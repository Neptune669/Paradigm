import Marquee from "react-fast-marquee";

import logo1 from "../assets/logos/1.svg";
import logo2 from "../assets/logos/2.svg";
import logo3 from "../assets/logos/3.svg";
import logo4 from "../assets/logos/4.svg";
import logo5 from "../assets/logos/5.svg";
import logo6 from "../assets/logos/6.svg";
import logo7 from "../assets/logos/7.svg";
import logo8 from "../assets/logos/8.svg";
import logo9 from "../assets/logos/9.svg";
import logo10 from "../assets/logos/10.svg";
import logo11 from "../assets/logos/11.svg";
import logo12 from "../assets/logos/12.svg";
import logo13 from "../assets/logos/13.svg";
import logo114 from "../assets/logos/14.svg";
import logo15 from "../assets/logos/15.svg";
import logo16 from "../assets/logos/16.svg";
import logo17 from "../assets/logos/17.svg";
import logo18 from "../assets/logos/18.svg";

const Trust = () => {
  const logos = [
    {
      logo: (
        <div className="h-14 w-20 rounded-lg bg-white">
          {/* <img src={logo1} alt="" /> */}
        </div>
      ),
    },
    {
      logo: <div className="h-10 w-20 rounded-lg bg-white"></div>,
    },
    {
      logo: <div className="h-10 w-20 bg-white  rounded-lg"></div>,
    },
    {
      logo: <div className="h-10 w-20 bg-white rounded-lg"></div>,
    },
    {
      logo: <div className="h-10 w-20 bg-white rounded-lg"></div>,
    },
    {
      logo: <div className="h-10 w-20 bg-white rounded-lg"></div>,
    },
    {
      logo: <div className="h-10 w-20 bg-white rounded-lg"></div>,
    },
    {
      logo: <div className="h-10 w-20 bg-white rounded-lg"></div>,
    },
    {
      logo: <div className="h-10 w-20 bg-white rounded-lg"></div>,
    },
    {
      logo: <div className="h-10 w-20 bg-white rounded-lg"></div>,
    },
    {
      logo: <div className="h-10 w-20 bg-white rounded-lg"></div>,
    },
    {
      logo: <div className="h-10 w-20 bg-white rounded-lg"></div>,
    },
    {
      logo: <div className="h-10 w-20 bg-white rounded-lg"></div>,
    },
    {
      logo: <div className="h-10 w-20 bg-white rounded-lg"></div>,
    },
    {
      logo: <div className="h-10 w-20 bg-white rounded-lg"></div>,
    },
  ];
  return (
    <div className="mt-20 ">
      <div className=" max-w-fit mx-auto ">
        <p className="text-[#48AECD] text-center font-semibold text-sm uppercase mb-10">
          Trusted by the world's best Brands
        </p>
      </div>
      <Marquee pauseOnHover className="flex gap-5">
        <div className="flex items-center gap-5">
          <div className="">
            <div className="h-10 w-20 bg-white rounded-lg"></div>
          </div>
          {logos.map((logo) => {
            return logo.logo;
          })}
        </div>
      </Marquee>
      <Marquee
        direction="right"
        pauseOnHover
        className="mt-10 flex gap-5 items-center"
      >
        <div className="flex items-center gap-5 ">
          {logos.map((logo) => {
            return logo.logo;
          })}
        </div>
      </Marquee>
    </div>
  );
};

export default Trust;
