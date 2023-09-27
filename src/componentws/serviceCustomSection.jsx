import React from "react";
import dot from "../assets/dot.svg";
// import EventImg from "../assets/event two.png";
// import EventImgSec from "../assets/event.png";
const data = [
  {
    text: "Event Concept Creation ",
  },
  {
    text: "Event Concept Creation ",
  },
  {
    text: "Event Concept Creation ",
  },
  {
    text: "Event Concept Creation ",
  },
  {
    text: "Event Concept Creation ",
  },
];
const CustomSection = ({ title, image, flexDirection }) => {
  return (
    <section className={`flex ${flexDirection} justify-between gap-11`}>
      <div className="flex flex-col gap-6">
        <h1 className="text-5xl font-bold ">{title}</h1>
        <ul className="flex flex-col gap-3 ">
          {data.map((item, index) => (
            <li key={index} className="text-base font-bold poppins-font">
              <img className="inline-block" src={dot} alt={item} /> {item.text}
            </li>
          ))}
        </ul>
      </div>
      <figure>
        <img src={image} alt={title} />
      </figure>
    </section>
  );
};

export default CustomSection;
