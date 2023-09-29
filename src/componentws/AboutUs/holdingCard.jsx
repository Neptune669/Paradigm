import React from "react";

const HoldingCard = ({ logo, description }) => {
  return (
    <div className="flex items-center flex-col md:flex-row  max-w-fit rounded-lg py-5 px-1 gap-5 border-4  border-[#fdfdfd0d]">
      <figure className="flex items-center justify-center bg-black w-80 lg:w-44 ">
        <img className="text-center" src={logo} alt="Logo" />
      </figure>
      <p className="max-w-md text-xs text-center md:text-start md:text-base p-secondary">
        {description}
      </p>
    </div>
  );
};

export default HoldingCard;
