import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";
import data from "./data/data.json";
import Data from "./pages/Data";
import EmissionPage from "./pages/EmissionPage";
import EmissionVisualization from "./pages/EmissionVisualization";
import NotFound from "./pages/NotFound";

function App() {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const [Category, setCategory] = useState("all");

  const handleCategoryChange = (value) => {
    setCategory(value);

    if (value === "all") return setFilteredData(data);
    const newFilteredData = data.filter((item) => {
      return item.category === value;
    });

    setFilteredData(newFilteredData);
  };

  const handleChange = (value) => {
    setQuery(value);

    const newFilteredData = data.filter((item) => {
      const query = value.toLowerCase();
      const wordsInQuery = query.split(" ");

      const title = item.title.toLowerCase();
      const description = item.description.toLowerCase();
      const tags = item.tags.join(" ").toLowerCase();
      const category = item.category.toLowerCase();

      const allWordsInQueryContained =
        wordsInQuery.every((word) => title.includes(word)) ||
        wordsInQuery.every((word) => description.includes(word)) ||
        wordsInQuery.every((word) => tags.includes(word)) ||
        wordsInQuery.every((word) => category.includes(word));

      return allWordsInQueryContained;
    });

    setFilteredData(newFilteredData);
  };

  return (
    <>
      <Navbar query={query} handleChange={handleChange} />

      <div className="min-h-[calc(100vh-8rem)] bg-gray-50 pt-2 pb-3">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                data={filteredData}
                Category={Category}
                handleCategoryChange={handleCategoryChange}
              />
            }
          />
          <Route path="/data/:id" element={<Data />} />
          <Route path="/emission-analysis" element={<EmissionPage />} />
          {/* <Route path="/emission-analysis" element={<LineChart />} /> */}

          <Route
            path="emission-visualization"
            element={<EmissionVisualization />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
