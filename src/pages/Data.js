import React from "react";
import { useParams } from "react-router-dom";

import data from "../data/data.json";
import { Chip } from "@material-tailwind/react";

function Data() {
  const params = useParams();
  const id = params.id;

  const idWithoutDash = id; //.replaceAll("-", " ");

  const item = data.find((item) => item.title.toLowerCase() === idWithoutDash);

  const { title, description, category, tags, link } = item;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 mt-5">
      <h1 className="text-3xl font-bold text-gray-900">{title}</h1>

      <div className="mt-4 ">
        <Chip variant="ghost" value={category} className="w-fit" />
      </div>

      {/* description */}
      <div className="mt-4">
        <p className="text-gray-700">{description}</p>
      </div>

      {/* download link */}
      <div className="mt-4">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:underline cursor-pointer"
        >
          Download
        </a>
      </div>
    </div>
  );
}

export default Data;
