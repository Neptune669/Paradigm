import SectionWithImage from "./custom";
import arrow from "../AboutUs/arrow.svg";

const MissionSection = [
  {
    image: arrow,
    text: "To assist our clients everywhere to effectively and efficiently communicate and understand their requirements, available resources, and potential challenges, in order to support them achieve their objective goals successfully, and ensure they had an unforgettable experience throughout with a trusted partner that has their back.",
    header: "Our Mission",
    title: "",
  },
];

const Mission = () => {
  return (
    <>
      {MissionSection.map((item, index) => (
        <SectionWithImage key={index} {...item} />
      ))}
    </>
  );
};

export default Mission;
