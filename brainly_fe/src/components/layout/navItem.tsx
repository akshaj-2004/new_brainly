import React, { ReactElement } from "react";

interface NavItemProps {
  icon: ReactElement;
  label: string;
}

export const NavItem: React.FC<NavItemProps> = ({ icon, label }) => {
  return (
    <button className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-200">
      {icon}
      <span className="font-medium">{label}</span>
    </button>
  );
};
