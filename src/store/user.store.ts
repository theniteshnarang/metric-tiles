import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import {
  StoreState,
  PartialInsightProps,
  TileType,
  CardType,
} from './insight.type';
import { initialInsight, initialCard } from './insight.initialState';
import createIdGenerator from '@features/insight/util/createIdGenerator';

const useUserStore = create<StoreState>()(
  immer((set) => ({
    insight: initialInsight,
    updateInsight: (updates: PartialInsightProps) =>
      set((state) => {
        Object.assign(state.insight, updates);
      }),
    updateChartTile: (tile: Partial<TileType>) =>
      set((state) => {
        const draftTiles = state.insight.chart.tiles;
        const tileIndex = draftTiles.findIndex((t) => t.tileId === tile.tileId);
        if (tileIndex !== -1) {
          Object.assign(draftTiles[tileIndex], tile);
        }
      }),
    addChartCard: (card: CardType) =>
      set((state) => {
        const draftTiles = state.insight.chart.tiles;
        const tileIndex = draftTiles.findIndex((t) => t.tileId === card.tileId);
        const draftTile = draftTiles[tileIndex];
        const cardIndex = draftTile.cards.findIndex(
          (c) => c.cardId === card.cardId
        );
        if (tileIndex !== -1 && cardIndex !== -1) {
          const newCard: CardType = {
            ...initialCard,
            cardId: createIdGenerator(`${card.tileId}-card`),
            tileId: card.tileId,
          };
          draftTile.cards.splice(cardIndex + 1, 0, newCard);
        }
      }),
    updateChartCard: (card: Partial<CardType>) =>
      set((state) => {
        const draftTiles = state.insight.chart.tiles;
        const tileIndex = draftTiles.findIndex((t) => t.tileId === card.tileId);
        const draftTile = draftTiles[tileIndex];
        const draftCards = draftTile.cards;
        const cardIndex = draftCards.findIndex((c) => c.cardId === card.cardId);
        if (tileIndex !== -1 && cardIndex !== -1) {
          Object.assign(draftCards[cardIndex], card);
        }
      }),
  }))
);

export default useUserStore;
