import { ReactNode } from "react";

type ButtonProps = {
  variant: "primary" | "secondary";
  url: string;
  children: ReactNode;
};

const variants = {
  primary: {
    background: "bg-green-500",
    hover: {
      background: "bg-green-700",
    },
  },
  secondary: {
    borderColor: "border-blue-500",
    textColor: "text-blue-500",

    hover: {
      background: "bg-blue-500",
      textColor: "text-gray-900",
    },
  },
};

const Button = ({ variant, url, children }: ButtonProps) => {
  const defaultProps =
    "px-6 py-4 flex items-center justify-center border rounded gap-[10px] font-bold text-sm uppercase transition-colors";

  return (
    <a
      href={url}
      className={
        variant === "primary"
          ? `${defaultProps} ${variants.primary.background}  hover:${variants.primary.hover.background}`
          : `${defaultProps} ${variants.secondary.borderColor} ${variants.secondary.textColor} hover:${variants.secondary.hover.background} hover:${variants.secondary.hover.textColor}`
      }
    >
      {children}
    </a>
  );
};

export default Button;
