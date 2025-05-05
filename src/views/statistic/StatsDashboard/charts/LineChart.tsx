import { Line } from "@ant-design/plots";

interface LineChartProp {
  data?: any;
  xField: string;
  yField: string;
}

const LineChart: React.FC<LineChartProp> = ({ data, xField, yField }) => {

  const config = {
    data: data,
    xField: xField,
    yField: yField,
    point: {
      shapeField: 'square',
      sizeField: 4,
    },
    interaction: {
      tooltip: {
        marker: false,
      },
    },
    style: {
      lineWidth: 2,
    },
  };
  return (
    <Line
      {...config}
      // loading={
      //   totalTransactionsCount.isFetching || totalTransactionsCount.isLoading
      // }
    />
  );
};

export default LineChart;
