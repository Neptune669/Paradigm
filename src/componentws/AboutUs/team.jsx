import img from "../AboutUs/img.svg";
import imgTwo from "../AboutUs/imgTwo.svg";

import SectionWithImage from "./custom";
import ImageWithBackground from "./customCard";

const Team = () => {
  return (
    <div className="grid gap-10">
      <SectionWithImage header="Behind Every Success" title="Our Team" />
      <div className="grid gap-10 px-8 max-w-fit md:grid-cols-2 lg:grid-cols-3">
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
