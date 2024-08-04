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
      justifyContent="center"
      className="min-h-min w-full flex-wrap gap-6 paper-rounded"
    >
      {tile?.cards?.map((tileCard) => (
        <TileCard key={tileCard.cardId} card={tileCard} />
      ))}
    </Stack>
  );
};
