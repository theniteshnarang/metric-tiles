import { useState } from 'react';
import useUserStore from '@store/user.store';
import { CardMode } from '@store/insight.type';
import calculateMetrics from '@utils/analytics';
import { ViewInsightProps } from '../components/ViewInsight/ViewInsight';

interface UseInsightViewProps extends ViewInsightProps {}

const useInsightView = ({ card }: UseInsightViewProps) => {
  const { updateChartCard, addChartCard } = useUserStore((state) => ({
    updateChartCard: state.updateChartCard,
    addChartCard: state.addChartCard,
  }));
  const [isAddVisibile, setIsAddVisibile] = useState(false);
  const title = `${card.metric}, ${card.segmentId}`;
  const singleSeriesData = card.values.map((v) => v.value);
  const xAxisCategories = card.values.map((v) => v.date);
  const metrics = calculateMetrics(card.values);

  const handleChartClick = () => {
    const nextMode: CardMode = card.cardMode === 'edit' ? 'view' : 'edit';
    const updatedCard = { ...card, cardMode: nextMode };
    updateChartCard(updatedCard);
  };

  const handleAddIcon: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    addChartCard(card);
  };

  const data = {
    singleSeriesData,
    xAxisCategories,
    title,
    metrics,
  };

  const onClick = {
    handleChartClick,
    handleAddIcon,
  };

  const state = {
    isAddVisibile,
  };

  const action = {
    setIsAddVisibile,
  };

  return { onClick, data, state, action };
};

export default useInsightView;
