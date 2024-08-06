import { MetricType, SegmentType, Snapshot } from '@features/insight/api';

export type CardMode = 'edit' | 'view';

export interface CardType extends Snapshot {
  cardId: string;
  tileId: string;
  cardMode: CardMode;
}

export interface TileType {
  tileId: string;
  cards: Array<CardType>;
}

export interface InsightProps {
  segments: SegmentType[];
  metrics: MetricType[];
  chart: {
    tiles: Array<TileType>;
  };
}

export type PartialInsightProps = Partial<InsightProps>;

export interface InsightState {
  insight: InsightProps;
}

export interface InsightActions {
  updateInsight: (update: PartialInsightProps) => void;
  updateInsightChartTile: (tile: Partial<TileType>) => void;
  addInsightChartCard: (card: CardType) => void;
  updateInsightChartCard: (card: Partial<CardType>) => void;
}

export type StoreState = InsightState & InsightActions;
