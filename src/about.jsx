import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglass } from "@fortawesome/free-solid-svg-icons";

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
            <div className="">
              <FontAwesomeIcon
                icon={faHourglass}
                style={{ color: "#ffffff" }}
              />
            </div>
            <div className="">
              <p>High quality levels across all our services</p>
            </div>
          </div>
        </div>
        <div className="border-[0.5px] border-solid   border-[#fffefdd2] rounded-[6px]">
          <div className="flex flex-col items-center py-4 px-2 text-center gap-2">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                />
              </svg>
            </div>
            <div className="">
              <p>High quality levels across all our services</p>
            </div>
          </div>
        </div>
        <div className="border-[0.5px] border-solid   border-[#fffefdd2] rounded-[6px]">
          <div className="flex flex-col items-center py-4 px-2 text-center gap-2">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            </div>
            <div className="">
              <p>High quality levels across all our services</p>
            </div>
          </div>
        </div>
        <div className="border-[0.5px] border-solid   border-[#fffefdd2] rounded-[6px]">
          <div className="flex flex-col items-center py-4 px-2 text-center gap-2">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                />
              </svg>
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
