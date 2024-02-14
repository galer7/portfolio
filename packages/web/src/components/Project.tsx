import clsx from "clsx";

import { type ProjectType as ProjectType } from "../projects";
import SuccessIcon from "./icons/SuccessIcon";
import RunningIcon from "./icons/RunningIcon";
import FailedIcon from "./icons/FailedIcon";
import SkippedIcon from "./icons/SkippedIcon";
import CancelledIcon from "./icons/CancelledIcon";

interface ProjectProps extends ProjectType {
  index: number;
}

export default function Project({
  name,
  description,
  link,
  image,
  status,
  type,
  tags,
}: ProjectProps) {
  return (
    <div className="flex gap-20 p-4 border border-[#31363C] border-t-0 first:border-t last:rounded-b-md w-full">
      <div className="flex gap-2 flex-1">
        <div className="mt-1">{getIcon(status)}</div>

        <div className="flex flex-col">
          <div>{name}</div>
          <p className="text-xs text-gray-500 font-bold">{description}</p>
        </div>
      </div>
      <div className="flex-1">
        <a
          href={link}
          className={clsx(
            "font-mono text-xs bg-blue-900 px-2 py-1 rounded-md",
            link ? "text-blue-500" : "text-gray-300"
          )}
          target="_blank"
          rel="noreferrer"
        >
          {link ? link : "No link"}
        </a>
      </div>

      <div className="flex flex-col gap-2 flex-1">
        <div className="flex gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-gray-600 bg-gray-100 px-2 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <span
            className={clsx(
              "text-xs text-gray-600 px-2  rounded-md",
              getLabelColor(type)
            )}
          >
            {type}
          </span>
        </div>
      </div>
    </div>
  );
}

function getIcon(status: ProjectType["status"]) {
  switch (status) {
    case "success":
      return <SuccessIcon />;
    case "running":
      return <RunningIcon />;
    case "failed":
      return <FailedIcon />;
    case "cancelled":
      return <CancelledIcon />;
    case "skipped":
      return <SkippedIcon />;
    default: {
      const exhaustiveCheck: never = status;
      return exhaustiveCheck;
    }
  }
}

function getLabelColor(type: ProjectType["type"]) {
  switch (type) {
    case "personal":
      return "bg-blue-100 border-2 border-blue-500";
    case "work":
      return "bg-red-100 border-2 border-red-500";
    case "school":
      return "bg-yellow-100 border-2 border-yellow-500";
    case "other":
      return "bg-gray-100 border-2 border-gray-500";
    default: {
      const exhaustiveCheck: never = type;
      return exhaustiveCheck;
    }
  }
}
