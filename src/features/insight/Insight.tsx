import { Stack } from '@mui/material';
import { Tile } from './components/Tile/Tile';
import useInsight from './hooks/useInsight';

interface InsightProps {}

const Insight = ({}: InsightProps) => {
  const { data } = useInsight();

  return (
    <Stack spacing={6} alignItems="center">
      {data.tiles?.map((tile) => <Tile key={tile.tileId} tile={tile} />)}
    </Stack>
  );
};

export default Insight;
