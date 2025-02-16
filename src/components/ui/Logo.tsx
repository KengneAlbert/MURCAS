import React from "react";
import logoLight from "../../assets/images/logo-murcas.png";
import logoDark from "../../assets/images/logo-murcas.png";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export function Logo({
  variant = "light",
  className = "h-16 w-auto",
}: LogoProps) {
  return (
    <img
      src={variant === "light" ? logoLight : logoDark}
      alt="MURCAS FASAS"
      className={className}
    />
  );
}
