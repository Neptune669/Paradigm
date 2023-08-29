const Footer = () => {
  return (
    <div className="max-w-[800px] mx-auto mt-[8rem] p-8">
      <div className="flex flex-col gap-2">
        <h2 className="uppercase text-5xl font-bold">paradigm</h2>
        <p className="text-[13px] text-neutral-500">
          Bringing your Brand to life in digital world
        </p>
      </div>
      <div className="grid grid-cols-4 gap-24 mt-5">
        <div className="">
          <ul className="flex flex-col gap-4">
            <li>10 Nile st, oula, Giza district , Cairo Governorate </li>
            <li>0102655200</li>
            <li>Emil Us : hi@paradigm-eg.com</li>
          </ul>
        </div>
        <div className="">
          <ul className="flex flex-col gap-4">
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
          </ul>
        </div>
        <div className="">
          <ul className="flex flex-col gap-4">
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
          </ul>
        </div>
        <div className="">
          <ul className="flex flex-col gap-4">
            <li>lorem</li>
            <li>lorem</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
