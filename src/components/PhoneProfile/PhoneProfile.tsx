import React from "react";
import "./styles.scss";
import CustomButton from "../CustomButton/CustomButton";
import { useHistory } from "react-router-dom";

interface PhoneProfile {
  phone: any;
}

const PhoneProfile = ({ phone }: PhoneProfile) => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/catalogue");
  };
  const {
    name,
    images,
    color,
    description,
    manufacturer,
    price,
    processor,
    ram,
    screen,
  } = phone;
  return (
    <div>
      <div className="container__profile">
        <div className="column1__profile">
          <img
            src={images[0]}
            className="image__profile"
            alt={`Front of a  ${name}`}
          />
        </div>
        <div className="column2__profile">
          <h1 className="name__profile">{name}</h1>
          <h3 className="manufacturer__profile">by {manufacturer}</h3>
          <h3>{description}</h3>
          <h3>Color: {color}</h3>
          <h3>Price: €{price}</h3>
          <h2 className="subtitle__profile">Specs:</h2>
          <h3 className="itemData__profile">Processor: {processor}</h3>
          <h3 className="screen__profile">Screen: {screen}</h3>
          <h3 className="ram__profile">Ram: {ram}gb</h3>
        </div>
      </div>
      <div className="buttonContainer__profile">
        <CustomButton
          label="Go back to catalogue"
          className="Profile__button"
          handleClick={() => handleClick()}
        />
      </div>
    </div>
  );
};
export default PhoneProfile;
