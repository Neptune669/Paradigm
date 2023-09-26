import timer from "../assets/timer.svg";
import ticket from "../assets/ticket.svg";
import star from "../assets/star.svg";
import rocket from "../assets/rocket.svg";
import bg from "../assets/aboutbg.svg";

const items = [
  {
    icon: timer,
    text: "Over 8 years of experience in event management",
  },
  {
    icon: star,
    text: "High quality levels across all our services",
  },
  {
    icon: rocket,
    text: "Delivering Full Event Production",
  },
  {
    icon: ticket,
    text: "Execution of diverse Events",
  },
];

const About = () => {
  return (
    <div className="relative z-10 flex flex-col px-8 mx-auto max-w-7xl lg:items-baseline">
      {/* <div
        style={{
          backgroundImage: `url(${bg})`,
          width: "30rem",
          height: "100%",
          position: "absolute",
          right: "0",

          backgroundRepeat: "no-repeat",
        }}
        className="absolute w-[30rem] right-0 -z-10"
      ></div> */}
      <p className="text-[#48AECD] uppercase text-sm font-semibold mb-2">
        About us
      </p>
      <div className="max-w-4xl">
        <h2 className="mb-10 text-2xl font-medium md:text-3xl lg:text-4xl lg:w-10/12">
          Discover the story Behind Our Passionate Event Management Agency And
          How Are We Empowering Business to succeed.
        </h2>
      </div>
      <ul className="z-10 grid grid-cols-1 gap-10 mb-6 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <li key={index} className="border border-[#2E2E2E] rounded-2xl">
            <div className="flex flex-col items-center gap-5 px-4 text-center py-7">
              <img className="w-10 h-10" src={`${item.icon}`} alt="" />
              <div className="">
                <p>{item.text}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="bg-[#1F2020] rounded-full px-9 py-3 w-fit   ">
        <a className="flex items-end gap-2 font-medium" href="#">
          <span>Read our story </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="28"
              viewBox="0 0 19 28"
              fill="none"
            >
              <path
                d="M4.3125 13.6147H14.8125"
                stroke="#EEEEEE"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.5625 8.36475L14.8125 13.6147L9.5625 18.8647"
                stroke="#EEEEEE"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
};

export default About;
