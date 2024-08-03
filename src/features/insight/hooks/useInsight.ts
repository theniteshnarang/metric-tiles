import useUserStore from '@store/user.store';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { getSegments, getMetrics } from '../api';

const useInsight = () => {
  const { insight, updateInsight } = useUserStore((state) => ({
    insight: state.insight,
    updateInsight: state.updateInsight,
  }));

  const metricsQuery = useQuery({ queryKey: ['metrics'], queryFn: getMetrics });

  const segmentsQuery = useQuery({
    queryKey: ['segments'],
    queryFn: getSegments,
  });

  const segmentsData = segmentsQuery?.data?.data?.data || [];
  const metricsData = metricsQuery?.data?.data?.data || [];

  useEffect(() => {
    if (segmentsData.length > 0 && metricsData.length > 0) {
      updateInsight({ segments: segmentsData, metrics: metricsData });
    }
  }, [segmentsData, metricsData]);

  const tiles = insight.chart.tiles;

  const data = {
    tiles,
  };
  return { data };
};

export default useInsight;
