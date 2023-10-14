import mac from "../assets/Graphic Design.svg";
import chef from "../assets/Catering.svg";
import it from "../assets/Technical Support.svg";
import tran from "../assets/Interpretation & Translation Services.svg";
import fire from "../assets/Entertainment.svg";
import event from "../assets/Event Consultancy & Management..svg";
import media from "../assets/Documentation & Media Production.svg";
import vip from "../assets/Public Relations & VIP Management..svg";
import brand from "../assets/Branding, Production, and Printing.svg";
import travel from "../assets/Travel, Transportation & Accommodation.svg";
import audio from "../assets/Audio Visual Solutions.svg";

const Card = ({ icon, title, description, link = "#" }) => {
  return (
    <li className="border-4 border-[#042A37] px-6 py-10 rounded-3xl flex flex-col">
      {icon && (
        <figure className="mb-5">
          <img src={icon} alt="" />
        </figure>
      )}
      {title && (
        <h3 className="mb-3 text-2xl font-semibold text-white">{title}</h3>
      )}
      {description && <p className="opacity-50 mb-14">{description}</p>}
      <a
        href={link}
        className="flex items-center gap-1 px-3 py-2 mt-auto text-sm font-medium lg:self-end "
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
  {
    icon: travel,
    title: "Travel, Transportation & Accommodation",
    description: "Event consultancy & Management",
    link: "#",
  },
  {
    icon: mac,
    title: "Graphic Design",
    description: "Event consultancy & Management",
    link: "#",
  },
  {
    icon: brand,
    title: "Branding, Production, and Printing",
    description: "Event consultancy & Management",
    link: "#",
  },
  {
    icon: chef,
    title: "Branding, Production, and Printing",
    description: "Event consultancy & Management",
    link: "#",
  },
  {
    icon: fire,
    title: "Entertainment",
    description: "Event consultancy & Management",
    link: "#",
  },
];
const Service = () => {
  return (
    <div className="px-8 max-w-7xl lg:mx-auto">
      <p className="text-[#48AECD] uppercase text-sm font-semibold mb-2">
        Our services{" "}
      </p>
      <div className="flex flex-col mb-16 md:flex-row md:justify-between md:items-center">
        <h2 className="mb-4 text-2xl font-medium md:text-3xl lg:text-4xl ">
          High-impact marketing <br /> services to grow your startup
        </h2>
        <p className="flex items-center gap-1 font-semibold lg:justify-end">
          <span className="text-left">View all services</span>
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

      <ul className="grid gap-4 mt-5 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => {
          return <Card key={index} {...card} />;
        })}
      </ul>
    </div>
  );
};

export default Service;
