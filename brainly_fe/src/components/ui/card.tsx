import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div className={`bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 ${className}`}>
      {children}
    </div>
  );
};
