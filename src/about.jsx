import timer from "./assets/timer.svg";
import ticket from "./assets/ticket.svg";
import star from "./assets/star.svg";
import rocket from "./assets/rocket.svg";

const About = () => {
  return (
    <div className="max-w-[800px] mt-[8rem] mx-auto flex flex-col gap-4">
      <div className="">
        <p className="text-[#48AECD]">About us</p>
      </div>
      <div className="max-w-4xl">
        <div className="text-[1.6rem]">
          <h2>discover the story Behind Our Passionate</h2>
          <h2>Event Management Agency And How Are We Empowering</h2>
          <h2>Business to succeed. </h2>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="border-[0.5px] border-solid   border-[#FBFFFF] rounded-[6px] ">
          <div className="flex flex-col items-center py-4 px-2 text-center gap-2">
            <img src={timer} alt="" />
            <div className="">
              <p>High quality levels across all our services</p>
            </div>
          </div>
        </div>
        <div className="border-[0.5px] border-solid   border-[#fffefdd2] rounded-[6px]">
          <div className="flex flex-col items-center py-4 px-2 text-center gap-2">
            <div className="">
              <img src={ticket} alt="" />
            </div>
            <div className="">
              <p>High quality levels across all our services</p>
            </div>
          </div>
        </div>
        <div className="border-[0.5px] border-solid   border-[#fffefdd2] rounded-[6px]">
          <div className="flex flex-col items-center py-4 px-2 text-center gap-2">
            <div className="">
              <img src={star} alt="" />
            </div>
            <div className="">
              <p>High quality levels across all our services</p>
            </div>
          </div>
        </div>
        <div className="border-[0.5px] border-solid   border-[#fffefdd2] rounded-[6px]">
          <div className="flex flex-col items-center py-4 px-2 text-center gap-2">
            <div className="">
              <img src={rocket} alt="" />
            </div>
            <div className="">
              <p>High quality levels across all our services</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1F2020] rounded-full px-3 py-2 w-fit gid ">
        <a className="items-center font-medium" href="">
          Read our story &rarr;
        </a>
      </div>
    </div>
  );
};

export default About;
