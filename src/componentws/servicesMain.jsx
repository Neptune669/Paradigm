import ServiceTrust from "./serviceTrust";
import Faq from "./faq";
import EventImg from "../assets/service img.png";
import EventImgSec from "../assets/event.png";
import EventImgThird from "../assets/event three.svg";
import sph from "../assets/sph.svg";
import CustomSection from "./serviceCustomSection";
import lap from "../assets/lap.svg";
import car from "../assets/car.svg";
import graphic from "../assets/grahic.svg";
import brand from "../assets/brand.svg";
import food from "../assets/food.svg";
import enter from "../assets/Entert.svg";
const sectionData = [
  {
    title: "Event Consultancy & Management",
    image: EventImg,

    flexDirection: "flex-row",
    listItem: [
      "Public Relations & VIP Management",
      "Venue Scouting & Booking",
      "Event Timeline Planning",
      "Crowd Management & Registration",
      "Safety and Security Planning",
      "COVID-19 Protocols",
      "Post Event Reports",
      "Safety and Security Planning",
    ],
  },
  {
    title: "Public Relations & VIP Management",

    image: EventImgSec,
    flexDirection: "flex-row-reverse",
    listItem: [
      "IP-based Video Conferencing Systems",
      "Audio Visual Solutions",
      "Public Relations & VIP Management",
      "Public Relations & VIP Management",
      "Public Relations & VIP Management",
      "Public Relations & VIP Management",
      "Public Relations & VIP Management",
    ],
  },

  {
    title: "Audio Visual Solutions",

    listStyle: "another",
    flexDirection: "flex-row",
    image: sph,
    listItem: [
      {
        textHeader: "Public Relations",
        text: "VIP Management",
        secondTextHeader: "Another header",
        secondText: "Another list item",
        thirdTextHeader: "And another header",
        thirdText: "And another one",
      },
    ],
  },
  {
    title: "Interpretation & Translation Services",
    image: EventImgThird,
    flexDirection: "flex-row-reverse",
    listItem: ["Interpretation Booths (Single & Multiple)"],
  },
  {
    title: "Technical Support",
    image: lap,
    flexDirection: "flex-row",
    listItem: [
      "Public Relations & VIP Management",
      "Public Relations & VIP Management",
      "Public Relations & VIP Management",
      "Public Relations & VIP Management",
      "Public Relations & VIP Management",
      "Public Relations & VIP Management",
      "Public Relations & VIP Management",
    ],
  },
  {
    title: "Documentation & Media Production",
    image: EventImgThird,
    flexDirection: "flex-row-reverse",
    listItem: ["Interpretation Booths (Single & Multiple)"],
  },
  {
    title: "Travel, Transportation & Accommodation",
    image: car,
    flexDirection: "flex-row",
    listItem: ["Interpretation Booths (Single & Multiple)"],
  },
  {
    title: "Graphic Design",
    image: graphic,
    flexDirection: "flex-row-reverse",
    listItem: ["Interpretation Booths (Single & Multiple)"],
  },
  {
    title: "Branding, Production and Printing",
    image: brand,
    flexDirection: "flex-row",
    listItem: ["Interpretation Booths (Single & Multiple)"],
  },
  {
    title: "Catering",
    image: graphic,
    flexDirection: "flex-row-reverse",
    listItem: ["Interpretation Booths (Single & Multiple)"],
  },
  {
    title: "Branding, Production and Printing",
    image: food,
    flexDirection: "flex-row",
    listItem: ["Interpretation Booths (Single & Multiple)"],
  },
  {
    title: "Entertainment",
    image: enter,
    flexDirection: "flex-row-reverse",
    listItem: ["Interpretation Booths (Single & Multiple)"],
  },
];
const ServicesMain = () => {
  return (
    <main className="flex flex-col px-8 overflow-hidden gap-28">
      {sectionData.map((item, index) => (
        <CustomSection key={index} {...item} />
      ))}
      <ServiceTrust />
      <Faq />
    </main>
  );
};

export default ServicesMain;
