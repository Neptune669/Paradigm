import icon from "./assets/Rectangle.png";
import Marquee from "react-fast-marquee";
const Trust = () => {
  const logos = [
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
    <div className="mt-[8rem]  mx-auto">
      <p className="text-[#48AECD] text-center text-base mb-10">
        Trusted by the world's best Brands
      </p>
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
