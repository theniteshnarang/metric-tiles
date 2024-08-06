import { CardType } from '@store/insight.type';
import { ViewInsight } from '../ViewInsight/ViewInsight';
import { EditInsight } from '../EditInsight/EditInsight';

export interface TileCardProps {
  card: CardType;
  idx: number;
}

export const TileCard = ({ card, idx }: TileCardProps) => {
  return (
    <>
      {card.cardMode === 'edit' && <EditInsight card={card} idx={idx} />}
      {card.cardMode === 'view' && <ViewInsight card={card} idx={idx} />}
    </>
  );
};
