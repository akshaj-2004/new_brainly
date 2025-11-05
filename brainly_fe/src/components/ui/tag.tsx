import React from "react";

interface TagProps {
  label: string;
}

export const Tag: React.FC<TagProps> = ({ label }) => {
  return (
    <span className="text-xs font-medium text-indigo-600 bg-indigo-100 px-2 py-0.5 rounded-md">
      #{label}
    </span>
  );
};
