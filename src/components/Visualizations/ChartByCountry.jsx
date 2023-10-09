import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useEffect, useState } from "react";
import { getOneCountryData } from "../../data/Countries";

const ChartByCountry = ({ country }) => {
  let yearArr = [];
  let valuesArr = [];
  let countryData = getOneCountryData(country);
  let values = countryData.value;

  for (let year in values) {
    yearArr.push(year);
  }
  for (let year in values) {
    valuesArr.push(values[year]);
  }

  const [Data, setData] = useState({
    labels: yearArr,
    datasets: [
      {
        label: "Carbon Dioxide Emission",
        data: valuesArr,
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "green",
        borderWidth: 2,
      },
    ],
  });
  function updateChart() {
    setData({
      labels: yearArr,
      datasets: [
        {
          label: "Carbon Dioxide Emission",
          data: valuesArr,
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "green",
          borderWidth: 2,
        },
      ],
    });
  }
  useEffect(() => {
    console.log(Data);
  }, []);
  return (
    <main className="flex relative max-w-4xl mx-auto flex-col items-center min-h-96 justify-center mt-12">
      {/* <div className="h-96  mx-auto"> */}
      <Line data={Data} />

      <h3 className="font-bold text-2xl mt-4">
        Carbon dioxide Emission : For {country}
      </h3>

      <p className="text-center mt-2">
        <strong>x-axis:</strong> Year <br />
        <strong>y-axis:</strong> Carbon dioxide emission in kilotons
      </p>
      <button onClick={updateChart}> update</button>
      <p className="text-center mt-2 mb-4">
        This line chart shows the carbon dioxide emission of {country} from 1960
        to 2022. The actual data is taken from World Bank Open Data and the
        predicted data is calculated using the time series analysis.
      </p>
    </main>
  );
};

export default ChartByCountry;
