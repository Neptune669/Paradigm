import mac from "./assets/Graphic Design.svg";
import chef from "./assets/Catering.svg";
import it from "./assets/Technical Support.svg";
import tran from "./assets/Interpretation & Translation Services.svg";
import fire from "./assets/Entertainment.svg";
import event from "./assets/Event Consultancy & Management..svg";
import media from "./assets/Documentation & Media Production.svg";
import vip from "./assets/Public Relations & VIP Management..svg";
import brand from "./assets/Branding, Production, and Printing.svg";
import travel from "./assets/Travel, Transportation & Accommodation.svg";
import audio from "./assets/Audio Visual Solutions.svg";

const Service = () => {
  return (
    <div className="max-w-[800px] mx-auto mt-14">
      <div className="">
        <p className="text-[#48AECD]">Our services </p>
      </div>
      <div className="flex items-center justify-between ">
        <h2 className="text-[1.8rem] max-w-md">
          High-impact marketing services to grow your startup
        </h2>
        <p>View all events &rarr;</p>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-5">
        <div className="max-w-sm border border-gray-200 rounded-lg ">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <img src={mac} alt="" />
            </a>
            <p className="mb-3 font-normal text-white mt">Graphic design</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Event consultancy & Management
            </p>
          </div>
          <a
            href="#"
            className="flex-row-reverse flex items-center px-3 py-2 text-sm font-medium  text-white text-right"
          >
            Learn more &rarr;
          </a>
        </div>
        <div className="max-w-sm border border-gray-200 rounded-lg ">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <img src={fire} alt="" />
            </a>
            <p className="mb-3 font-normal text-white mt">Entreatment</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Event consultancy & Management
            </p>
          </div>
          <a
            href="#"
            className="flex-row-reverse flex items-center px-3 py-2 text-sm font-medium  text-white text-right"
          >
            Learn more &rarr;
          </a>
        </div>
        <div className="max-w-sm border border-gray-200 rounded-lg ">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <img src={it} alt="" />
            </a>
            <p className="mb-3 font-normal text-white mt">Technical support</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Event consultancy & Management
            </p>
          </div>
          <a
            href="#"
            className="flex-row-reverse flex items-center px-3 py-2 text-sm font-medium  text-white text-right"
          >
            Learn more &rarr;
          </a>
        </div>
        <div className="max-w-sm border border-gray-200 rounded-lg ">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <img src={tran} alt="" />
            </a>
            <p className="mb-3 font-normal text-white mt">
              interpretation & translation services
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Event consultancy & Management
            </p>
          </div>
          <a
            href="#"
            className="flex-row-reverse flex items-center px-3 py-2 text-sm font-medium  text-white text-right"
          >
            Learn more &rarr;
          </a>
        </div>
        <div className="max-w-sm border border-gray-200 rounded-lg ">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <img src={chef} alt="" />
            </a>
            <p className="mb-3 font-normal text-white mt">Graphic design</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Event consultancy & Management
            </p>
          </div>
          <a
            href="#"
            className="flex-row-reverse flex items-center px-3 py-2 text-sm font-medium  text-white text-right"
          >
            Learn more &rarr;
          </a>
        </div>
        <div className="max-w-sm border border-gray-200 rounded-lg ">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <img src={event} alt="" />
            </a>
            <p className="mb-3 font-normal text-white mt">Graphic design</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Event consultancy & Management
            </p>
          </div>
          <a
            href="#"
            className="flex-row-reverse flex items-center px-3 py-2 text-sm font-medium  text-white text-right"
          >
            Learn more &rarr;
          </a>
        </div>
        <div className="max-w-sm border border-gray-200 rounded-lg ">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <img src={media} alt="" />
            </a>
            <p className="mb-3 font-normal text-white mt">Graphic design</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Event consultancy & Management
            </p>
          </div>
          <a
            href="#"
            className="flex-row-reverse flex items-center px-3 py-2 text-sm font-medium  text-white text-right"
          >
            Learn more &rarr;
          </a>
        </div>
        <div className="max-w-sm border border-gray-200 rounded-lg ">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <img src={vip} alt="" />
            </a>
            <p className="mb-3 font-normal text-white mt">Graphic design</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Event consultancy & Management
            </p>
          </div>
          <a
            href="#"
            className="flex-row-reverse flex items-center px-3 py-2 text-sm font-medium  text-white text-right"
          >
            Learn more &rarr;
          </a>
        </div>
        <div className="max-w-sm border border-gray-200 rounded-lg ">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <img src={brand} alt="" />
            </a>
            <p className="mb-3 font-normal text-white mt">Graphic design</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Event consultancy & Management
            </p>
          </div>
          <a
            href="#"
            className="flex-row-reverse flex items-center px-3 py-2 text-sm font-medium  text-white text-right"
          >
            Learn more &rarr;
          </a>
        </div>
        <div className="max-w-sm border border-gray-200 rounded-lg ">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <img src={audio} alt="" />
            </a>
            <p className="mb-3 font-normal text-white mt">Graphic design</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Event consultancy & Management
            </p>
          </div>
          <a
            href="#"
            className="flex-row-reverse flex items-center px-3 py-2 text-sm font-medium  text-white text-right"
          >
            Learn more &rarr;
          </a>
        </div>
        <div className="max-w-sm border border-gray-200 rounded-lg ">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <img src={travel} alt="" />
            </a>
            <p className="mb-3 font-normal text-white mt">Graphic design</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Event consultancy & Management
            </p>
          </div>
          <a
            href="#"
            className="flex-row-reverse flex items-center px-3 py-2 text-sm font-medium  text-white text-right"
          >
            Learn more &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Service;
