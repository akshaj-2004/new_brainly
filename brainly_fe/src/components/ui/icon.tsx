import React, { ButtonHTMLAttributes, ReactElement } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactElement;
  label?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  label,
  className = "",
  ...rest
}) => {
  return (
    <button
      title={label}
      className={`p-2 rounded-lg hover:bg-gray-100 text-gray-600 transition-all duration-200 ${className}`}
      {...rest}
    >
      {icon}
    </button>
  );
};
