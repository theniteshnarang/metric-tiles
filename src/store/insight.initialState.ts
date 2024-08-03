import createIdGenerator from '@features/insight/util/createIdGenerator';
import { TileType, CardType } from './insight.type';

export enum DefaultIds {
  Card = 'card-default',
  Tile = 'tile-default',
}

export const initialCard: CardType = {
  cardId: DefaultIds.Card,
  tileId: DefaultIds.Tile,
  cardMode: 'edit',
  metric: '',
  segmentKey: '',
  segmentId: '',
  values: [],
};

const createInitialCard = (tileId: string) => {
  const cardId = createIdGenerator(`${tileId}-card`);
  return {
    ...initialCard,
    cardId: cardId,
    tileId: tileId,
  };
};

const createInitialTile = (): TileType => {
  const tileId = createIdGenerator('tile');
  return {
    tileId: tileId,
    cards: [createInitialCard(tileId)],
  };
};

export const createInitialInsight = (num: number) => {
  const initialTiles = Array.from({ length: num }, createInitialTile);
  return {
    segments: [],
    metrics: [],
    chart: {
      tiles: initialTiles,
    },
  };
};

export const initialInsight = createInitialInsight(4);
