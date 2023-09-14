const CustomCard = ({ icon, text }) => {
  return (
    <div className="inline-flex flex-col items-start justify-between px-6 py-8 bg-black border-4 border-b-0 rounded-t-3xl rounded-r-3xl ">
      <div className="self-stretch h-[128.19px] flex-col justify-start items-start gap-4 flex">
        <div className="w-[134px] h-[87px] relative rounded-md">
          <img
            className="w-[134px] h-[88px] left-0 top-[-0.50px] absolute"
            src={icon}
            alt="Icon"
          />
        </div>
        <div className="pb-[0.19px] justify-start items-start inline-flex">
          <div className="w-[321px] text-[22px] font-semibold leading-normal">
            {text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
