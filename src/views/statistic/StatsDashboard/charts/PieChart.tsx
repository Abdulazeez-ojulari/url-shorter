import { Pie } from "@ant-design/plots";

interface PieChartProp {
  data?: any;
  angleField: string;
  colorField: string;
  text: string;
}

const PieChart: React.FC<PieChartProp> = ({ data, angleField, colorField, text }) => {

  const config = {
    data: data,
    angleField: angleField,
    colorField: colorField,
    innerRadius: 0.6,
    label: {
        text: colorField,
        style: {
          fontWeight: 'bold',
        },
    },
    annotations: [
        {
          type: 'text',
          style: {
            text: text,
            x: '50%',
            y: '50%',
            textAlign: 'center',
            fontSize: 40,
            fontStyle: 'bold',
            fill: '#FFFFFF'
          },
        },
    ],
    style: {
      lineWidth: 2,
    },
  };
  return (
    <Pie
      {...config}
    />
  );
};

export default PieChart;
