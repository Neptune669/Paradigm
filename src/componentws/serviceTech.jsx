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
const ServiceTech = ({ image }) => {
  return (
    <section className={`flex  justify-between gap-11`}>
      <div className="flex flex-col gap-6">
        <h1 className="text-5xl font-bold ">Technical Support</h1>
        <ul className="flex flex-col gap-3 ">
          {data.map((item, index) => (
            <li key={index} className="text-base font-bold poppins-font">
              <img className="inline-block" src={dot} alt={item} /> {item.text}
            </li>
          ))}
        </ul>
      </div>
      <figure>
        <img src={image} alt="Technical Support" />
      </figure>
    </section>
  );
};

export default ServiceTech;
