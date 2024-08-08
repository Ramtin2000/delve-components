import React, { ReactNode, ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import Spinner from "./Spinner";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent" | "text";
  size?: "small" | "medium" | "large";
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  onClick,
  className,
  isLoading,
  ...props
}) => {
  const baseStyles =
    "rounded-md border border-[#E5E5E5] flex flex-row items-center transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:text-gray-400";

  const variantStyles = classNames({
    "bg-primary-400 text-background-900 hover:bg-primary-300 disabled:bg-primary-500/50":
      variant === "primary",
  });

  const sizeStyles = classNames({
    "py-[0.5rem] px-[1rem] text-sm": size === "small",
    "py-[0.75rem] px-[1.25rem] text-base": size === "medium",
    "py-[1rem] px-[1.5rem] text-lg": size === "large",
  });

  return (
    <button
      className={`${className} ${baseStyles} ${variantStyles} ${sizeStyles}`}
      onClick={onClick}
      {...props}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
};

export default Button;
