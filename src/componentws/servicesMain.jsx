import dot from "../assets/dot.svg";
import EventImg from "../assets/event two.png";
import EventImgSec from "../assets/event.png";
import EventImgThird from "../assets/event three.svg";
import ServiceTechImg from "../assets/lap.svg";
import ServiceTech from "./serviceTech";
import ServiceAudio from "./serviceAudio";
import CustomSection from "./serviceCustomSection";
import CustomSectionSec from "./serviceCustomSectionSec";
import ServiceTranslation from "./serviceTranslation";
const ServicesMain = () => {
  return (
    <main className="flex flex-col gap-28">
      <CustomSection
        title="Event Consultancy & Management"
        image={EventImg}
        flexDirection="flex-row"
      />
      <CustomSectionSec image={EventImgSec} flexDirection="flex-row-reverse" />
      <ServiceAudio title="Audio Visual Solutions" />
      <ServiceTranslation
        image={EventImgThird}
        flexDirection="flex-row-reverse"
      />
      <ServiceTech image={ServiceTechImg} />
    </main>
  );
};

export default ServicesMain;
