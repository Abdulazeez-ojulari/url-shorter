/* eslint-disable @typescript-eslint/no-explicit-any */
import { Column } from "@ant-design/plots";
import { ColumnConfig } from "@ant-design/plots";

interface BarChartProp {
  data: any;
  xField: string;
  yField: string;
  colorField: string;
}

const BarChart: React.FC<BarChartProp> = ({ data, xField, yField, colorField }) => {

  const config = {
    data: data,
    xField: xField,
    yField: yField,
    colorField: colorField,
    tooltip: (item: any) => {
      return { origin: item };
    },
    interaction: {
      tooltip: {
        render: (e: any, { title, items }: any) => {
          return (
            <div>
              <h4>{title}</h4>
              {items.map((item:any) => {
                const { name, color, origin } = item;
                return (
                  <div>
                    <div style={{ margin: 0, display: 'flex', justifyContent: 'space-between' }}>
                      <div>
                        <span
                          style={{
                            display: 'inline-block',
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            backgroundColor: color,
                            marginRight: 6,
                          }}
                        ></span>
                        <span>
                          {origin[colorField]}-{name}
                        </span>
                      </div>
                      <b>{origin[yField]}</b>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        },
      },
    },
  } as ColumnConfig;

  return (
    <Column
      {...config}
      // loading={
      //   totalTransactionsVolume.isFetching || totalTransactionsVolume.isLoading
      // }
    />
  );
};

export default BarChart;
