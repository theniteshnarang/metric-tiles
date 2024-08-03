import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Accessibility from 'highcharts/modules/accessibility';
import './AreaChart.css';

Accessibility(Highcharts);

interface AreaChartProps {
  xAxisCategories?: string[];
  singleSeriesData: (
    | number
    | [string | number, number | null]
    | Highcharts.PointOptionsObject
    | null
  )[];
}

export const AreaChart = ({
  xAxisCategories,
  singleSeriesData,
}: AreaChartProps) => {
  const options: Highcharts.Options = {
    chart: {
      type: 'area',
    },
    title: {
      text: undefined,
    },
    xAxis: {
      categories: xAxisCategories,
      labels: {
        enabled: false, // Remove x-axis labels
      },
      title: {
        text: null, // Remove x-axis title
      },
      lineWidth: 0,
    },
    legend: {
      enabled: false, // Remove the legend
    },
    yAxis: {
      title: {
        text: null, // Remove y-axis title
      },
      labels: {
        enabled: false, // Remove y-axis labels
      },
      gridLineWidth: 0,
    },
    tooltip: {
      enabled: false,
    },
    series: [
      {
        data: singleSeriesData,
        type: 'area',
        color: '#119F97',
        lineWidth: 0.5,
        fillColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, 'rgba(17, 159, 151, 0.4)'],
            [1, 'rgba(17, 159, 151, 0)'],
          ],
        },
      },
    ],
    credits: {
      enabled: false, // Remove the Highcharts branding (credits)
    },
    plotOptions: {
      area: {
        stacking: 'normal',
        marker: {
          enabled: false, // Hide markers (data points)
        },
      },
    },
  };

  return (
    <div className="chart-container h-full w-full overflow-hidden">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
