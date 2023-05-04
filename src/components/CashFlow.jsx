import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import * as R from "ramda";

export const CashFlow = () => {
  //   const series = [
  //     {
  //       name: "Income",
  //       data: [
  //         [1, 2],
  //         [2, 5],
  //         [3, 8],
  //       ],
  //     },
  //     {
  //       name: "Expense",
  //       data: [
  //         [1, 3],
  //         [2, 4],
  //         [3, 10],
  //       ],
  //     },
  //   ];

  const options = formatOptions(series);
  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
};

const staticNumberOfDays = 50;
const income = {
  name: "income",
  periodicity: 14,
  amount: 2000,
};
const rent = {
  name: "rend",
  periodicity: 30,
  amount: 1100,
};
const deriveSeriesData = ({ periodicity, amount }, numberOfDays) => {
  return R.pipe(
    R.range(0),
    R.reduce((acc, i) => {
      const previousAmount = R.pipe(
        R.last,
        R.defaultTo([]),
        R.last,
        R.defaultTo(0)
      )(acc);
      return R.append(
        [i, R.add(previousAmount, i % periodicity === 0 ? amount : 0)],
        acc
      );
    }, [])
  )(numberOfDays);
};
const deriveData = () => {
  const incomeSeries = {
    name: "Income",
    data: deriveSeriesData(income, staticNumberOfDays),
  };
  const rentSeries = {
    name: "Rent",
    data: deriveSeriesData(rent, staticNumberOfDays),
  };
  return [incomeSeries, rentSeries];
};
const series = deriveData();

const formatOptions = (series) => ({
  title: {
    text: "Cash Flow",
    align: "center",
  },
  //   plotOptions: {
  //     column: {
  //       stacking: "normal",
  //       dataLabels: {
  //         enabled: true,
  //       },
  //     },
  //   },
  //   xAxis: {
  //     categories: columns,
  //   },
  chart: {
    type: "area",
    height: "60%",
    plotBorderWidth: 1,
  },
  series,
});
