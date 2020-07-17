import React from "react";

interface PhoneProfile {
  phone: any;
}

const PhoneProfile = ({ phone }: PhoneProfile) => {
  const { name } = phone;
  return (
    <div>
      <div>{name}</div>
    </div>
  );
};
export default PhoneProfile;
