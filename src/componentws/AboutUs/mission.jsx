import SectionWithImage from "./custom";
import arrow from "../AboutUs/arrow.svg";

const Mission = () => {
  return (
    <SectionWithImage
      header="Our Mission"
      text="To assist our clients everywhere to effectively and efficiently communicate and understand their requirements, available resources, and potential challenges, in order to support them achieve their objective goals successfully, and ensure they had an unforgettable experience throughout with a trusted partner that has their back."
      image={arrow}
    />
  );
};

export default Mission;
