import React from "react";
import "./styles.scss";
import { IButton } from "../../utils/interfaces";

const CustomButton = ({ label, className, handleClick }: IButton) => {
  return (
    <button className={className} onClick={handleClick}>
      {label}
    </button>
  );
};
export default CustomButton;
