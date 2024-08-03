import axios, { AxiosError } from 'axios';
import useUserStore from '@store/user.store';
import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { postSnapshot, SegmentIdType } from '../api';
import { CardType } from '@store/insight.type';
import { EditInsightProps } from '../components/EditInsight/EditInsight';
import { SelectChangeEvent } from '@mui/material';

interface UseInsightEditProps extends EditInsightProps {}

interface DropdownSelection {
  metric: string;
  segmentKey: string;
  segmentId: string;
  segmentIdOptions: Array<SegmentIdType>;
}

interface ErrorResponse {
  message: string;
}

interface ErrorState {
  message: string | null;
  timeout: NodeJS.Timeout | null;
}

const initialError = {
  message: null,
  timeout: null,
};

const initialSelection: DropdownSelection = {
  metric: '',
  segmentKey: '',
  segmentId: '',
  segmentIdOptions: [],
};

const useInsightEdit = ({ card }: UseInsightEditProps) => {
  const [dropdownSelection, setDropdownSelection] = useState<DropdownSelection>(
    { ...initialSelection, ...card }
  );

  const [error, setError] = useState<ErrorState>(initialError);

  const updateError = (error: Partial<ErrorState>) =>
    setError((e) => ({ ...e, ...error }));

  const { insight, updateChartCard } = useUserStore((state) => ({
    insight: state.insight,
    updateChartCard: state.updateChartCard,
  }));

  const snapshotMutation = useMutation({
    mutationKey: ['postSnapshot'],
    mutationFn: postSnapshot,
    onSuccess: (data) => {
      if (data.status === 200) {
        const updatedCard: CardType = {
          ...card,
          cardMode: 'view',
          ...data.data.data,
        };
        updateChartCard(updatedCard);
      }
    },
    onError: (error: AxiosError) => {
      console.error('Error submitting snapshot', error);
      if (axios.isAxiosError(error)) {
        const errorResponse = error.response?.data as ErrorResponse;
        if (errorResponse?.message) {
          // Server responded with a status other than 200 range
          updateError({ message: errorResponse.message });
          // setError(errorResponse.message);
        } else if (error.request) {
          // Request was made but no response received
          updateError({
            message: 'No response from server. Please try again later.',
          });
        } else {
          // Something else caused an error
          updateError({ message: error.message });
        }
      } else {
        updateError({ message: 'An unexpected error occurred' });
      }
      // Set a timeout to clear the error after 2 seconds
      const timeoutId = setTimeout(() => {
        updateError({ message: null });
      }, 2000);

      updateError({ timeout: timeoutId });
    },
  });

  const metricUiOptions = insight?.metrics.map((metric) => ({
    id: metric.id,
    value: metric.id,
    label: metric.displayName,
  }));

  const segmentKeyUiOptions = insight?.segments.map((segment) => ({
    id: segment.segmentKey,
    value: segment.segmentKey,
    label: segment.displayName,
  }));

  const segmentIdUiOptions =
    dropdownSelection?.segmentIdOptions.map((segment) => ({
      id: segment.segmentId,
      value: segment.segmentId,
      label: segment.displayName,
    })) || [];

  const handleOnChange = (e: SelectChangeEvent<string | number>) => {
    const { name, value } = e.target;
    if (name && value) {
      setDropdownSelection((selection) => ({ ...selection, [name]: value }));
    }
  };

  useEffect(() => {
    if (dropdownSelection.segmentKey) {
      const selectedSegmentValues = insight.segments.find(
        (segment) => segment.segmentKey === dropdownSelection.segmentKey
      )?.values;
      if (selectedSegmentValues && selectedSegmentValues?.length > 0) {
        setDropdownSelection((selection) => ({
          ...selection,
          segmentIdOptions: selectedSegmentValues,
        }));
      }
    }
  }, [dropdownSelection.segmentKey]);

  // Cleanup the timeout when the component unmounts
  useEffect(() => {
    return () => {
      if (error.timeout) {
        clearTimeout(error.timeout);
      }
    };
  }, [error.timeout]);

  const onPostSnapshotSubmit = () => {
    // Clear any existing timeout
    if (error.timeout) {
      clearTimeout(error.timeout);
    }
    const { segmentId, segmentKey, metric } = dropdownSelection;
    const checks = segmentId && segmentKey && metric;
    if (checks) {
      snapshotMutation.mutate({ segmentId, segmentKey, metric });
    }
  };

  const disabledAddClick = !(
    dropdownSelection.metric &&
    dropdownSelection.segmentKey &&
    dropdownSelection.segmentId &&
    !snapshotMutation.isSuccess
  );

  const data = {
    metricUiOptions,
    segmentKeyUiOptions,
    segmentIdUiOptions,
  };

  const onClick = {
    handleOnChange,
    onPostSnapshotSubmit,
    disabledAddClick,
  };

  const state = {
    dropdownSelection,
    error,
  };

  const api = {
    snapshotMutation,
  };
  return { data, onClick, state, api };
};

export default useInsightEdit;
