import logo from "./assets/Vector.svg";
const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto mt-[8rem] p-8">
      <div className="flex flex-col gap-2">
        <div className="">
          <img src={logo} alt="" />
        </div>
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
            <li>Home</li>
            <li>Services</li>
            <li>sustainability</li>
            <li>events</li>
            <li>about</li>
            <li>contact</li>
          </ul>
        </div>
        <div className="">
          <ul className="flex flex-col gap-4">
            <li>instagram</li>
            <li>Facebook</li>
            <li>twitter</li>
            <li>youtube</li>
          </ul>
        </div>
        <div className="">
          <ul className="flex flex-col gap-4">
            <li>
              2023 Paradigm.All rights <br /> reserved
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
