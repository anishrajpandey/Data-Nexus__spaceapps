import { Card, CardBody, Typography, Chip } from "@material-tailwind/react";
import { Link } from "react-router-dom/dist";
import { BsClockFill } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
export default function InfoCard({ title, description, tags, link }) {
  return (
    <div className="max-w-[700px]  mx-auto flex justify-center my-3">
      <Card className="w-full flex-row h-fit grid items-center">
        <CardBody>
          <Link to={link} className="text-black inline-block my-0">
            <Typography variant="h4" color="black" className="mb-2">
              {title}
            </Typography>
          </Link>
          <Link to={link} className="text-black inline-block my-0">
            <Typography color="gray" className="mb-4 font-normal line-clamp-3">
              {description.length > 250
                ? description.slice(0, 250) + "..."
                : description}
            </Typography>
          </Link>
          <div className="chips flex gap-1">
            {tags.map((tag) => {
              return (
                <Chip
                  key={tag}
                  color={Math.random() > 0.5 ? "lightBlue" : "indigo"}
                  variant={Math.random() > 0.5 ? "ghost" : "outlined"}
                  value={tag}
                />
              );
            })}
          </div>

          {/* <div className="flex gap-2 mt-2">
            <Chip
              value={
                <div className="flex gap-1 items-center">
                  <BsClockFill />
                  8th October
                </div>
              }
            />
            <Chip
              color="blue"
              value={
                <div className="flex gap-1 items-center">
                  <FaDownload />
                  200+
                </div>
              }
            />

            <Chip variant="outlined" value="More Info" />
          </div> */}
        </CardBody>
      </Card>
    </div>
  );
}
