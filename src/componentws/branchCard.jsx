const BranchCard = ({ branch }) => {
  const { location, phone, email } = branch;

  return (
    <div className="relative -z-10">
      <figure className="">
        <img className="w-full " src={branch.image} alt="" />
      </figure>
      <div className="absolute z-50 mx-auto bottom-5 left-28">
        <div className="grid items-center self-center grid-cols-3 gap-4">
          <div className="inline-flex flex-col items-start justify-start gap-2 pr-6">
            <div className="text-xl font-normal leading-snug tracking-wider uppercase text-neutral-200">
              Location:
            </div>
            <div className="text-3xl font-bold leading-10 text-white uppercase">
              {location}
            </div>
          </div>
          <div className="pr-0.5 flex-col justify-start items-start gap-2 inline-flex">
            <div className="text-xl font-normal leading-snug tracking-wider uppercase text-neutral-200">
              Phone:
            </div>
            <div className="text-3xl font-bold leading-10 text-white uppercase">
              {phone}
            </div>
          </div>
          <div className="inline-flex flex-col items-start justify-start gap-2 pr-9">
            <div className="text-xl font-normal leading-snug tracking-wider uppercase text-neutral-200">
              Email:
            </div>
            <div className="text-3xl font-bold leading-10 text-white uppercase">
              {email}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchCard;
