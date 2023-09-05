import SectionWithImage from "./custom";
import eye from "../AboutUs/eye.svg";
const Vision = () => {
  return (
    <SectionWithImage
      header="Our Vision"
      text="To become the go-to destination for events management, reinventing and inspiring innovative and sustainable practices in events management with the biggest and strongest global network of industry pioneers."
      image={eye}
      flexDirection={"md:flex-row-reverse"}
    />
  );
};

export default Vision;
