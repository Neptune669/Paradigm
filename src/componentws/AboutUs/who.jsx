import back from "../AboutUs/back.svg";

import SectionWithImage from "./custom";
const Section = [
  {
    image: back,
    text: "Guided by 15 years of Scouts values, followed by professional academic training between Egypt and the UK over a span of 3 years under the Young Leaders programme, a collaboration between the British Council in Egypt & the UK, and the UK Ministry of Youth & Sports. Our group of founders graduated the Events Managers Training programme followed by TOT for Events Managers, which paved the way to form the Paradigm vision.",
    title: "Our Story",
    header: "Who We Are",
    textColor: "#505050",
    fontSize: "",
    flexDirection: "",
  },
];
const Who = () => {
  return (
    <div className="px-8 mx-auto max-w-7xl">
      {Section.map((item, index) => (
        <SectionWithImage key={index} {...item} />
      ))}
    </div>
  );
};

export default Who;
