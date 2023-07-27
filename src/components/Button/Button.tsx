import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { useState } from "react";
import "./Button.css";

export const Button = ({
  color = `default`,
  size = `md`,
  startIcon = "",
  endIcon = "",
  disabled = false,
  disableBoxShadow = false,
  variant = "default",
}: {
  color?: "primary" | "secondary" | "danger" | "default";
  size?: "sm" | "md" | "lg";
  startIcon?: "" | "local_grocery_store";
  endIcon?: "" | "local_grocery_store";
  disabled?: boolean;
  disableBoxShadow?: boolean;
  variant?: "default" | "outline" | "text";
}) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const style = {
    color: getTextColor(color, disabled, variant),
    backgroundColor: getBackgroundColor(color, variant, isHover),
    padding: getPadding(size),
    border: getBorder(color, variant),

    fontFamily: "Noto Sans JP",
    fontSize: "14px",
    fontWeight: 500,

    display: "flex",
    alignItems: "center",
    gap: "0 0.5rem",
    borderRadius: "6px",
    boxShadow: getBoxShadow(disableBoxShadow, variant),
  };
  return (
    <button
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {getStartIcon(startIcon)}Button{getEndIcon(endIcon)}
    </button>
  );
};

const getTextColor = (
  color: string,
  disabled?: boolean,
  variant?: string
): string => {
  let textColor = ``;
  if (variant === "outline" || variant === "text") {
    return getBackgroundColor(color);
  }

  if (color === "default") {
    textColor = `rgba(63, 63, 63, 1)`;
  } else {
    textColor = `rgba(255, 255, 255, 1)`;
  }
  return `${textColor.slice(0, -4)},${disabled ? 0.5 : 1})`;
};

const getBackgroundColor = (
  color: string,
  variant?: string,
  isHover?: boolean
): string => {
  if (variant === "outline" || variant === "text") {
    if (!isHover) return `inherit`;
    return `${getBackgroundColor(color).slice(0, -4)}, 0.1)`;
  }
  let buttonBgColor = ``;
  switch (color) {
    case "primary":
      buttonBgColor = !isHover ? "rgba(41, 98, 255, 1)" : `rgba(0, 57, 203, 1)`;
      break;
    case "secondary":
      buttonBgColor = !isHover ? "rgba(69, 90, 100, 1)" : `rgba(28, 49, 58, 1)`;
      break;
    case "danger":
      buttonBgColor = !isHover ? "rgba(211, 47, 47, 1)" : `rgba(154, 0, 7, 1)`;
      break;

    default:
      buttonBgColor = !isHover
        ? "rgba(224, 224, 224, 1)"
        : `rgba(174, 174, 174, 1)`;
      break;
  }
  return buttonBgColor;
};

const getPadding = (size: string): string => {
  let factor = 1;
  switch (size) {
    case "lg":
      factor = 1.25;
      break;
    case "sm":
      factor = 0.75;
      break;
    default:
      factor = 1;
      break;
  }
  return `${0.5 * factor}rem ${factor}rem`;
};

const getBorder = (color: string, variant: string) => {
  if (variant === "outline") {
    return `1px solid ${getTextColor(color, false, variant)}`;
  }
  return "none";
};

const getStartIcon = (icon: string) => {
  return icon === "" ? "" : <LocalGroceryStoreIcon fontSize="inherit" />;
};

const getEndIcon = (icon: string) => {
  return icon === "" ? "" : <LocalGroceryStoreIcon fontSize="inherit" />;
};

const getBoxShadow = (disableBoxShadow: boolean, variant?: string) => {
  if (disableBoxShadow || variant === "text") {
    return "none";
  }
  return `0px 2px 3px 0px rgba(0, 49, 202, 0.20)`;
};
