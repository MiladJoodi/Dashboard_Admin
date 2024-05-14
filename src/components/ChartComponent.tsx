import Chart from "react-apexcharts"

const ChartComponent = () => {
    
    const options = {
        chart: {
          type: "area",
        },
    
        xaxis: {
          labels: {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            formatter: function (value: any) {
              const dates = [
                "1402/01/01",
                "1402/01/02",
                "1402/01/03",
                "1402/01/04",
                "1402/01/05",
                "1402/01/06",
                "1402/01/07",
                "1402/01/08",
                "1402/01/09",
                "1402/01/10",
                "1402/01/11",
              ];
              return dates[value];
            },
          },
        },
      };
      const series = [
        {
          name: "فروش",
          data: [30, 140, 85, 50, 90, 60, 70, 91, 125],
        },
      ];

    return (
        <div className="w-full bg-white shadow-sm rounded-xl py-4 px-3">
            <Chart options={options} series={series} type="area" height={350} />
        </div>
    );
}

export default ChartComponent;