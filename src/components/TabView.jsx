import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useRef } from "react";
import { FaInfoCircle } from "react-icons/fa";

export default function TabsCustomAnimation({
  handleCategoryChange,
  open,
  setOpen,
}) {
  const tabsHeader = useRef(null);

  const data = [
    {
      label: "All ",
      value: "all",
      desc: ``,
      clicked: true,
    },
    {
      label: "Climate and Weather ",
      value: "climate",
      desc: "",
    },

    {
      label: "Agriculture and Land",
      value: "agriculture",
      desc: "",
    },

    {
      label: "Space Exploration and Astronomy",
      value: "exploration",
      desc: ``,
    },
    {
      label: "Spectral / Engineering",
      value: "speceng",
      desc: ``,
    },
    {
      label: "Ocean and Marine",
      value: "ocean",
      desc: ``,
    },
    {
      label: "Atmosphere and Biosphere",
      value: "atmosphere",
      desc: ``,
    },
    {
      label: "Solar Hub",
      value: "solar",
      desc: ``,
    },
    {
      label: "Environment and Ecosystem",
      value: "environment",
      desc: ``,
    },
    {
      label: "Public Health and Survellience",
      value: "health",
      desc: ``,
    },
    {
      label: "Human Dimensions",
      value: "human",
      desc: ``,
    },
    {
      label: "Hydrosphere and Cyrosphere",
      value: "hydrosphere",
      desc: ``,
    },
    {
      label: "Disease and Injury",
      value: "disease",
      desc: ``,
    },
  ];
  const handleInfoClick = () => {
    setOpen(!open);
  };
  window.onload = () => {
    // console.log(first)
    tabsHeader.current.children[0].click();
  };
  return (
    <Tabs
      value="html"
      orientation="vertical"
      className="w-fit my-12 z-50 flex flex-col "
    >
      <TabsHeader className="w-52">
        {/* add a text about the filter */}
        <div className="text-black text-md font-semibold text-center py-3">
          <span>Filter by Category</span>
          <FaInfoCircle
            className="inline-block ml-2 text-balck text-md cursor-pointer"
            onClick={handleInfoClick}
          />
        </div>
        {data.map(({ label, value }) => (
          <Tab
            className="my-1"
            clicked
            key={value}
            value={value}
            onClick={() => {
              handleCategoryChange(value);
            }}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody className="flex flex-col gap-0" ref={tabsHeader}>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={"value"} className="py-0 ">
            {desc}{" "}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
