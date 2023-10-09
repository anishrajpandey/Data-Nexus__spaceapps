import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useState } from "react";
import { NepalData } from "../../data/NepalData";
import { PredictedData } from "../../data/PredictedData";

function LineChart() {
  const [Data, setData] = useState({
    labels: NepalData.map((data) => data.year),
    datasets: [
      {
        label: "Actual Emission",
        data: NepalData.map((data) => data.value),
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
      {
        label: "Predicted Emission",
        data: PredictedData.map((data) => data.value),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "red",
        borderWidth: 2,
      },
    ],
  });
  return (
    <main className="flex flex-col items-center h-96 justify-center mt-24">
      {/* <div className="h-96 w-1 mx-auto"> */}
      <Line data={Data} />
      {/* </div> */}
      <h3 className="font-bold text-2xl mt-4">
        Carbon dioxide Emission : Predicted vs Actual
      </h3>

      {/* explain the x-asis and y-axis data */}

      <p className="text-center mt-2">
        <strong>x-axis:</strong> Year <br />
        <strong>y-axis:</strong> Carbon dioxide emission in kilotons
      </p>

      <p className="text-center mt-2 mb-24">
        This line chart shows the actual and predicted carbon dioxide emission
        of Nepal from 1960 to 2022. The actual data is taken from World Bank
        Open Data and the predicted data is calculated using the time series
        analysis.
      </p>
    </main>
  );
}

export default LineChart;
