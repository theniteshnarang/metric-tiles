import { Divider, IconButton, Stack, Typography } from '@mui/material';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import { AreaChart } from '../AreaChart/AreaChart';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { TileCardProps } from '../TileCard/TileCard';
import { camelToLowerCase, capitalizeAnyString } from '@utils/convertString';

import { formatANumber } from '@utils/math';
import useInsightView from '@features/insight/hooks/useInsightView';

export interface ViewInsightProps extends TileCardProps {}

export const ViewInsight = (props: ViewInsightProps) => {
  const { data, onClick, state, action } = useInsightView(props);

  return (
    <Stack
      className="min-w-96 grow relative cursor-pointer "
      onMouseEnter={() => action.setIsAddVisibile(true)}
      onMouseLeave={() => action.setIsAddVisibile(false)}
      onClick={onClick.handleChartClick}
    >
      <Typography color="CaptionText" className="z-10 absolute">
        {capitalizeAnyString(data.title)} (
        {camelToLowerCase(props.card.segmentKey)})
      </Typography>
      <Stack direction="row" className="h-56 w-full">
        <Stack spacing={1} className="self-end">
          <Typography variant="h5">
            {formatANumber(data.metrics.averageValue)}
          </Typography>
          <Stack direction="row">
            {data.metrics.averageWeeklyGrowthRate < 0 ? (
              <SouthIcon fontSize="small" color="warning" />
            ) : (
              <NorthIcon fontSize="small" color="success" />
            )}
            <Typography color="GrayText">
              {data.metrics.averageWeeklyGrowthRate}%
            </Typography>
            <ChangeHistoryIcon fontSize="small" color="disabled" />
            <Typography color="gray">7d</Typography>
          </Stack>
        </Stack>
        <AreaChart
          singleSeriesData={data.singleSeriesData}
          xAxisCategories={data.xAxisCategories}
        />
      </Stack>
      <Divider
        orientation="vertical"
        className={`absolute right-0 ${state.isAddVisibile ? 'translate-x-6' : '-translate-x-0'}`}
      >
        {state.isAddVisibile && (
          <IconButton
            size="small"
            color="success"
            onClick={onClick.handleAddIcon}
          >
            <AddCircleIcon fontSize="small" />
          </IconButton>
        )}
      </Divider>
    </Stack>
  );
};
