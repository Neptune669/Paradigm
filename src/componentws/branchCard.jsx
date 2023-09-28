const BranchCard = ({ branch }) => {
  const { location, phone, email } = branch;

  return (
    <main className="relative -z-10">
      <figure className="">
        <img className="w-full " src={branch.image} alt="" />
      </figure>
      <section className="absolute bottom-0 z-50 left-3 lg:bottom-5 lg:left-28">
        <ul className="items-center self-center justify-center grid-cols-1 gap-4 lg:grid lg:grid-cols-3">
          <ul className="inline-flex items-center justify-start gap-2 pr-6 lg:items-start lg:flex-col">
            <li className="text-xs font-normal leading-snug tracking-wider uppercase lg:text-xl text-neutral-200">
              Location:
            </li>
            <li className="text-xs font-bold leading-10 text-white uppercase lg:text-3xl">
              {location}
            </li>
          </ul>
          <ul className="inline-flex items-center justify-start gap-2 pr-6 lg:items-start lg:flex-col">
            <li className="text-xs font-normal leading-snug tracking-wider uppercase lg:text-xl text-neutral-200">
              Phone:
            </li>
            <li className="text-xs font-bold leading-10 text-white uppercase lg:text-3xl">
              {phone}
            </li>
          </ul>
          <ul className="inline-flex items-center justify-start gap-2 pr-6 lg:items-start lg:flex-col">
            <li className="text-xs font-normal leading-snug tracking-wider uppercase lg:text-xl text-neutral-200">
              Email:
            </li>
            <li className="text-xs font-bold leading-10 text-white uppercase lg:text-3xl">
              {email}
            </li>
          </ul>
        </ul>
      </section>
    </main>
  );
};

export default BranchCard;
