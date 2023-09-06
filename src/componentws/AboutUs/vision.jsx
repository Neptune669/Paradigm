import SectionWithImage from "./custom";
import eye from "../AboutUs/eye.svg";

const Section = [
  {
    image: eye,
    header: "Our Vision",
    text: "To become the go-to destination for events management, reinventing and inspiring innovative and sustainable practices in events management with the biggest and strongest global network of industry pioneers.",
    flexDirection: "md:flex-row-reverse",
    textColor: "",
    fontSize: "",
  },
];
const Vision = () => {
  return (
    <>
      {Section.map((item, index) => (
        <SectionWithImage key={index} {...item} />
      ))}
    </>
  );
};

export default Vision;
