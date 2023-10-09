import React from "react";
import LineChart from "../components/Visualizations/LineChart";

function EmissionPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 mt-5 h-screen">
      <h1 className="text-3xl font-bold text-gray-900">
        CO<sub>2</sub> Emission Analysis and Prediction of Nepal from 1960 to
        2022
      </h1>

      <div className="mt-16 flex flex-col justify-center">
        <LineChart />
      </div>
    </div>
  );
}

export default EmissionPage;
