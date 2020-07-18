import React from "react";

interface Props {
  placeholder: string;
  className: string;
  handleOnChange: Function;
}

const Searchbox = ({ placeholder, className, handleOnChange }: Props) => {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        className={className}
        onChange={(e) => handleOnChange(e.target.value)}
      />
    </div>
  );
};

export default Searchbox;
