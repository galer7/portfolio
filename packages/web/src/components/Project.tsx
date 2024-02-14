import clsx from "clsx";

import { type ProjectType as ProjectType } from "../projects";

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
        <div>{getIcon(status)}</div>

        <div className="flex flex-col">
          <div>{name}</div>
          <p className="text-xs text-gray-500 w-32 font-bold">{description}</p>
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
          <TagIcon />
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <TypeIcon />
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
            {type}
          </span>
        </div>
      </div>
    </div>
  );
}

function getIcon(status: ProjectType["status"]) {
  switch (status) {
    case "complete":
      return <SuccessIcon />;
    case "in-progress":
      return <InProgressIcon />;
    case "abandoned":
      return <FailureIcon />;
    case "on-hold":
    case "pending":
      return <PlannedIcon />;
    default: {
      const exhaustiveCheck: never = status;
      return exhaustiveCheck;
    }
  }
}

function PlannedIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
      />
    </svg>
  );
}

function SuccessIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-green-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

function FailureIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-red-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

function InProgressIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-yellow-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  );
}

function TagIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
      />
    </svg>
  );
}

function TypeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  );
}
