import { Stack } from '@mui/material';
import { TileCard } from '../TileCard/TileCard';
import { TileType } from '@store/insight.type';

interface TileProps {
  tile: TileType;
}

export const Tile = ({ tile }: TileProps) => {
  return (
    <Stack
      direction="row"
      className="min-h-min min-w-max paper-rounded flex-wrap gap-6"
    >
      {tile?.cards?.map((tileCard) => (
        <TileCard key={tileCard.cardId} card={tileCard} />
      ))}
    </Stack>
  );
};
