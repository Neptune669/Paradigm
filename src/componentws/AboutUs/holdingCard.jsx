import React from "react";

const HoldingCard = ({ logo, description }) => {
  return (
    <div className="flex items-center max-w-fit rounded-lg py-5 px-1 gap-5 border-4  border-[#fdfdfd0d]">
      <figure className="bg-black w-44">
        <img src={logo} alt="Logo" />
      </figure>
      <p className="max-w-md p-secondary">{description}</p>
    </div>
  );
};

export default HoldingCard;
