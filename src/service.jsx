// import mac from "./assets/Graphic Design.svg";
// import chef from "./assets/Catering.svg";
import it from "./assets/Technical Support.svg";
import tran from "./assets/Interpretation & Translation Services.svg";
// import fire from "./assets/Entertainment.svg";
import event from "./assets/Event Consultancy & Management..svg";
import media from "./assets/Documentation & Media Production.svg";
import vip from "./assets/Public Relations & VIP Management..svg";
// import brand from "./assets/Branding, Production, and Printing.svg";
// import travel from "./assets/Travel, Transportation & Accommodation.svg";
import audio from "./assets/Audio Visual Solutions.svg";

const Card = ({ icon, title, description, link = "#" }) => {
  return (
    <li className="border-4 border-[#121212] px-6 py-10 rounded-3xl flex flex-col">
      {icon && (
        <figure className="mb-5">
          <img src={icon} alt="" />
        </figure>
      )}
      {title && (
        <h3 className="mb-3 text-2xl font-semibold text-white">{title}</h3>
      )}
      {description && (
        <p className=" font-normal text-gray-700 dark:text-gray-400 mb-14">
          Event consultancy & Management
        </p>
      )}
      <a
        href={link}
        className="px-3 py-2 self-end flex items-center gap-1 text-sm font-medium  "
      >
        <span>Learn more</span>
        <span>
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.5625 10.1448L17.0928 9.61445L17.6232 10.1448L17.0928 10.6751L16.5625 10.1448ZM4.0625 10.8948H3.3125V9.39478H4.0625V10.8948ZM12.0928 4.61445L17.0928 9.61445L16.0322 10.6751L11.0322 5.67511L12.0928 4.61445ZM17.0928 10.6751L12.0928 15.6751L11.0322 14.6144L16.0322 9.61445L17.0928 10.6751ZM16.5625 10.8948H4.0625V9.39478H16.5625V10.8948Z"
              fill="white"
            />
          </svg>
        </span>
      </a>
    </li>
  );
};
const cards = [
  {
    icon: event,
    title: "Event consultancy & Management",
    description: "Event consultancy & Management",
    link: "#",
  },
  {
    icon: vip,
    title: "Public Relations & VIP Management.",
    description: "Event consultancy & Management",
    link: "#",
  },
  {
    icon: audio,
    title: "Audio Visual Solutions",
    description: "Event consultancy & Management",
    link: "#",
  },
  {
    icon: tran,
    title: "Interpretation & Translation Services",
    description: "Event consultancy & Management",
    link: "#",
  },
  {
    icon: it,
    title: "Technical Support",
    description: "Event consultancy & Management",
    link: "#",
  },
  {
    icon: media,
    title: "Documentation & Media Production",
    description: "Event consultancy & Management",
    link: "#",
  },
];
const Service = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <p className="text-[#48AECD] uppercase text-sm font-semibold mb-2">
        Our services{" "}
      </p>
      <div className="flex justify-between items-center mb-16">
        <h2 className="text-4xl font-medium">
          High-impact marketing services to <br /> grow your startup
        </h2>
        <p className="font-semibold flex items-center gap-1">
          <span>View all events</span>
          <span>
            <svg
              width="18"
              height="28"
              viewBox="0 0 18 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.74988 14.1149H14.2499"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.99988 8.86487L14.2499 14.1149L8.99988 19.3649"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </p>
      </div>

      <ul className="grid grid-cols-3 gap-4 mt-5">
        {cards.map((card, index) => {
          return <Card key={index} {...card} />;
        })}
      </ul>
    </div>
  );
};

export default Service;
