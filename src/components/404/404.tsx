import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import { useHistory } from "react-router-dom";
import "./styles.scss";

const Page404 = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };

  return (
    <div className="container__404">
      <h1 className="title__404">The page you're looking for can't be found</h1>
      <CustomButton
        label="go to home"
        className="Profile__button"
        handleClick={() => handleClick()}
      />
    </div>
  );
};

export default Page404;
