const CustomCard = ({ icon, text, description, border }) => {
  return (
    <div
      className={`flex flex-col gap-4 items-start  px-6 py-8 rounded-3xl border-4 border-b-0 rounded-t-3xl rounded-r-3xl ${border}`}
    >
      <figure className="w-[134px] h-[87px] relative rounded-md">
        <img className="" src={icon} alt="Icon" />
      </figure>
      <div className="pb-[0.19px] flex flex-col gap-2 justify-center items-start text-xl ">
        {text && <p className="font-semibold leading-normal ">{text}</p>}{" "}
        {description && (
          <p className="leading-normal text-lg text-[#ffffff68] ">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default CustomCard;
