import React from "react";
import "./styles.scss";

interface IButton {
  label: string;
  className: string;
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CustomButton = ({ label, className, handleClick }: IButton) => {
  return (
    <button className={className} onClick={handleClick}>
      {label}
    </button>
  );
};
export default CustomButton;
