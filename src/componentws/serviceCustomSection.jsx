import React from "react";
import dot from "../assets/dot.svg";

// The ListItem component
const ListItem = ({ text }) => (
  <li className="text-base font-bold poppins-font">
    <img className="inline-block mr-2" src={dot} alt="" />
    {text}
  </li>
);

const CustomSection = ({ title, image, flexDirection, listItem }) => {
  return (
    <section className={`flex ${flexDirection} justify-between gap-11`}>
      <div className="flex flex-col gap-7 w-[38rem]">
        <h1 className="text-5xl font-bold ">{title}</h1>
        <ul className="flex flex-col gap-4">
          {listItem.map((item, index) => (
            <ListItem key={index} text={item} />
          ))}
        </ul>
      </div>
      <figure>
        <img src={image} alt="" />
      </figure>
    </section>
  );
};

export default CustomSection;
