import React from "react";

const buttonStyles = {
  primary:
    "bg-transparent border border-white text-white font-semibold hover:bg-white hover:text-black",
  outline:
    "bg-white hover:bg-transparent font-semibold border hover:border-white hover:text-white ",
};

const buttonSize = {
  small: "px-5 py-2",
  medium: "px-9 py-4",
  large: "px-11 py-6",
};

const Button = ({ title, btnStyle, btnSize, onClick }) => {
  const btnTypeStyle =
    btnStyle === "primary" ? buttonStyles.primary : buttonStyles.outline;
  const btnSizeStyle =
    btnSize === "small"
      ? buttonSize.small
      : btnSize === "medium"
      ? buttonSize.medium
      : buttonSize.large;

  return (
    <button className={`${btnSizeStyle} ${btnTypeStyle}`} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
