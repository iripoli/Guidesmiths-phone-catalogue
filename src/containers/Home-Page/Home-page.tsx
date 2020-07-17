import React from "react";
import "./styles.scss";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/catalogue");
  };
  return (
    <div className="container__homePage">
      <p className="title__homePage">THE BEST PHONES FROM LIKE...</p>
      <p className="title2__homePage">4 YEARS AGO, ALL IN</p>
      <p className="title3__homePage">ONE PLACE!!</p>
      <div className="buttonContainer__homePage">
        <CustomButton
          label={"Go to catalogue"}
          className={"Home_Page_Button"}
          handleClick={() => handleClick()}
        />
      </div>
      <div className="iphoneContainer__homePage">
        <img
          className="iphone__homePage"
          src={require("../../assets/images/iphone7.png")}
          alt="Iphone front"
        />
        <img
          className="guidesmithsLogo__homePage"
          src={require("../../assets/images/guidesmiths-logo.png")}
          alt="Guidesmiths logo in iphone"
        />
      </div>
    </div>
  );
};

export default HomePage;
