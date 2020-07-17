import React from "react";

const PhoneProfilePage = ({ phoneProps }: any) => {
  const { name } = phoneProps;
  return (
    <div>
      <div>{name}</div>
    </div>
  );
};
export default PhoneProfilePage;
