import React from "react";
import { Brain } from "lucide-react";

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2 px-2">
      <Brain className="text-indigo-600" size={24} />
      <h1 className="font-semibold text-lg text-gray-800">Brainly</h1>
    </div>
  );
};
