// import hero from "./assets/pexels-anna-shvets-5325104.jpg";
import hero2 from "./assets/pexels-luis-quintero-2774556.jpg";

const Event = () => {
  return (
    <div className="max-w-[800px] mx-auto mt-[8rem] pb-5">
      <div className="">
        <p className="text-[#48AECD]">portfolio</p>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="">
          <p className="text-[1.9rem]">Our Recent Events.</p>
        </div>
        <div className="">
          <p className="text-[1rem]">View all events</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <div className="">
            <img className="h-[350px] object-cover" src={hero2} alt="" />
          </div>
          <div className="flex flex-col ">
            <h2 className="text-lg">NCHR EGYPT</h2>
            <a href="">View Event &rarr;</a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="">
            <img className="h-[350px] object-cover" src={hero2} alt="" />
          </div>
          <div className="flex flex-col ">
            <h2 className="text-lg">NCHR EGYPT</h2>
            <a href="">View Event &rarr;</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
