import EventImg from "../assets/service img.png";
import EventImgSec from "../assets/event.png";
import EventImgThird from "../assets/event three.svg";

import CustomSection from "./serviceCustomSection";

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
    title: "Audio Visual Solutions",
    image: EventImgSec,
    flexDirection: "flex-row-reverse",
    listItem: ["IP-based Video Conferencing Systems"],
  },
];
const ServicesMain = () => {
  return (
    <main className="flex flex-col gap-28">
      {sectionData.map((item, index) => (
        <CustomSection key={index} {...item} />
      ))}
    </main>
  );
};

export default ServicesMain;
