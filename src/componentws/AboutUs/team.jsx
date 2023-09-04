import img from "../AboutUs/img.svg";
import imgTwo from "../AboutUs/imgTwo.svg";

import SectionWithImage from "./custom";
import ImageWithBackground from "./customCard";

const Team = () => {
  return (
    <div className="grid gap-10">
      <SectionWithImage header="Behind Every Success" title="Our Team" />
      <div className="grid grid-cols-3 gap-10">
        <ImageWithBackground img={img} />
        <ImageWithBackground img={img} />
        <ImageWithBackground img={imgTwo} />
        <ImageWithBackground img={img} />
        <ImageWithBackground img={img} />
        <ImageWithBackground img={img} />
      </div>
    </div>
  );
};

export default Team;
