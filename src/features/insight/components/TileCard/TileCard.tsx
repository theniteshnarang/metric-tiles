import { CardType } from '@store/insight.type';
import { ViewInsight } from '../ViewInsight/ViewInsight';
import { EditInsight } from '../EditInsight/EditInsight';

export interface TileCardProps {
  card: CardType;
}

export const TileCard = ({ card }: TileCardProps) => {
  return (
    <>
      {card.cardMode === 'edit' && <EditInsight card={card} />}
      {card.cardMode === 'view' && <ViewInsight card={card} />}
    </>
  );
};
