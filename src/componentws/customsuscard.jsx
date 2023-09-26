const CustomCard = ({ icon, text, border }) => {
  return (
    <div
      className={`flex flex-col gap-4 items-start  px-6 py-8 rounded-3xl border-4 border-b-0 rounded-t-3xl rounded-r-3xl ${border}`}
    >
      <figure className="w-[134px] h-[87px] relative rounded-md">
        <img
          className="w-[134px] h-[88px] left-0 top-[-0.50px] absolute"
          src={icon}
          alt="Icon"
        />
      </figure>
      <div className="pb-[0.19px] justify-center items-start text-xl inline-flex">
        <p className="font-semibold leading-normal ">{text}</p>
      </div>
    </div>
  );
};

export default CustomCard;
