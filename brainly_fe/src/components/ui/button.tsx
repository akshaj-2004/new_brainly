import React, { ReactElement, ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  text?: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  text,
  startIcon,
  endIcon,
  children,
  className = "",
  ...rest
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
  };

  const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };

  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <button className={buttonClasses} {...rest}>
      {startIcon && <span className="mr-2 flex items-center">{startIcon}</span>}
      {text || children}
      {endIcon && <span className="ml-2 flex items-center">{endIcon}</span>}
    </button>
  );
};
