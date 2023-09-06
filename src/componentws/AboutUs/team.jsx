import img from "../AboutUs/img.svg";
import imgTwo from "../AboutUs/imgTwo.svg";

import SectionWithImage from "./custom";
import ImageWithBackground from "./customCard";

const cards = [
  {
    icon: img,
  },
  {
    icon: imgTwo,
  },
  {
    icon: img,
  },
  {
    icon: img,
  },
  {
    icon: img,
  },
  {
    icon: img,
  },
];

const Team = () => {
  return (
    <div className="grid gap-10">
      <SectionWithImage header="Behind Every Success" title="Our Team" />
      <div className="grid gap-10 px-8 max-w-fit md:grid-cols-2 lg:grid-cols-3">
        {cards.map((item, index) => (
          <div key={index}>
            <ImageWithBackground img={item.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
