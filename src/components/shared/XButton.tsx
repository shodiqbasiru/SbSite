import { Button, ButtonProps } from "primereact/button";
import { IconType } from "primereact/utils";
import React from "react";

type RoundedType = "full" | "xl" | "lg" | "md" | "sm";
type SeverityType =
  | "primary"
  | "primary-outline"
  | "secondary"
  | "secondary-outline"
  | "error"
  | "error-outline"
  | "warning"
  | "warning-outline"
  | "info"
  | "info-outline";

interface XButtonProps {
  label?: string;
  icon?: IconType<ButtonProps>;
  onClick?: () => void;
  severity?: SeverityType;
  rounded?: RoundedType;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function XButton({
  label,
  icon,
  onClick,
  severity,
  rounded,
  className,
  type,
}: XButtonProps) {
  const severityClass = (severity: SeverityType | undefined) => {
    switch (severity) {
      case "primary":
        return "bg-amber-600 text-white border-amber-600 hover:bg-transparent hover:text-amber-600 hover:border hover:border-amber-600";
      case "primary-outline":
        return "bg-transparent border border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-gray-800";
      case "secondary":
        return "bg-gray-600 text-white border-0 hover:bg-transparent hover:text-gray-600 hover:border-gray-600";
      case "secondary-outline":
        return "bg-transparent border border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-gray-800";
      case "error":
        return "bg-red-600 text-white border-0 hover:bg-transparent hover:text-red-600 hover:border-red-600";
      case "error-outline":
        return "bg-transparent border border-red-400 text-red-400 hover:bg-red-400 hover:text-gray-800";
      case "warning":
        return "bg-yellow-600 text-white border-0 hover:bg-transparent hover:text-yellow-600 hover:border-yellow-600";
      case "warning-outline":
        return "bg-transparent border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-800";
      case "info":
        return "bg-green-600 text-white border-0 hover:bg-transparent hover:text-green-600 hover:border-green-600";
      case "info-outline":
        return "bg-transparent border border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-800";
      default:
        return "bg-amber-600 text-white border-amber-600 hover:bg-transparent hover:text-amber-600 hover:border hover:border-amber-600";
    }
  };

  const roundedClass = (rounded: RoundedType | undefined) => {
    switch (rounded) {
      case "full":
        return "rounded-full";
      case "xl":
        return "rounded-xl";
      case "lg":
        return "rounded-lg";
      case "md":
        return "rounded-md";
      case "sm":
        return "rounded-sm";
      default:
        return "rounded";
    }
  };

  return (
    <Button
      label={label}
      size="small"
      icon={icon}
      onClick={onClick}
      pt={{
        root: {
          className: `${roundedClass(rounded)} ${severityClass(severity)} transition-all duration-200 ease-in-out ${className} focus:outline-none focus:ring-0 focus:ring-offset-0`,
        },
      }}
      type={type}
    />
  );
}
