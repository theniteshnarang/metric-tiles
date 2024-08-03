import { SelectDropdown } from '@components/index';
import { Button, Stack, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { TileCardProps } from '../TileCard/TileCard';
import useInsightEdit from '@features/insight/hooks/useInsightEdit';

export interface EditInsightProps extends TileCardProps {}

export const EditInsight = (props: EditInsightProps) => {
  const { data, onClick, state, api } = useInsightEdit(props);

  return (
    <Stack spacing={2} width="17rem">
      <SelectDropdown
        label="Metric"
        name="metric"
        options={data.metricUiOptions}
        value={state.dropdownSelection.metric}
        onChange={onClick.handleOnChange}
      />
      <SelectDropdown
        label="Segment key"
        name="segmentKey"
        options={data.segmentKeyUiOptions}
        value={state.dropdownSelection.segmentKey}
        onChange={onClick.handleOnChange}
      />
      {data.segmentIdUiOptions && data.segmentIdUiOptions.length > 0 && (
        <SelectDropdown
          label="Segment id"
          name="segmentId"
          options={data.segmentIdUiOptions}
          value={state.dropdownSelection.segmentId}
          onChange={onClick.handleOnChange}
        />
      )}
      <Stack direction="row" width="100%" justifyContent="space-between">
        <Button color="secondary" variant="outlined">
          {' '}
          Cancel
        </Button>
        <LoadingButton
          color="primary"
          variant="contained"
          disabled={onClick.disabledAddClick}
          loading={api.snapshotMutation.isPending}
          onClick={onClick.onPostSnapshotSubmit}
        >
          {' '}
          Add{' '}
        </LoadingButton>
      </Stack>
      {state.error.message && (
        <Typography variant="caption" color="error">
          {state.error.message}
        </Typography>
      )}
    </Stack>
  );
};
