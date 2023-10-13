import { useRef, useState } from "react";
import { countryData as countries, getOneCountryData } from "../data/Countries";
import { Line } from "react-chartjs-2";

function CountriesSelect({ country, setCountry }) {
  let updatebtn = useRef();
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
  return (
    <>
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Select a country
      </label>
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={country}
        onChange={(e) => {
          setCountry((country) => e.target.value);
          setTimeout(() => {
            updatebtn.current.click();
          });
        }}
      >
        {countries.map((country) => (
          <option key={country.Country_Name} value={country.Country_Name}>
            {country.Country_Name}
          </option>
        ))}
      </select>

      {/* actual chart goes here */}
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
        {/* <button onClick={updateChart}> update</button> */}
        <p className="text-center mt-2 mb-4">
          This line chart shows the carbon dioxide emission of {country} from
          1960 to 2020. The actual data is taken from World Bank Open Data and
          the predicted data is calculated using the time series analysis.
        </p>
        <button ref={updatebtn} onClick={updateChart}></button>
      </main>
    </>
  );
}

export default CountriesSelect;
