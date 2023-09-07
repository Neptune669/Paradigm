import { Link } from "react-router-dom";
import logo from "../assets/Vector.svg";

import MyDropdown from "./menu";
const Nav = () => {
  return (
    <nav className="flex justify-between px-8 mx-auto max-w-7xl my-9">
      <Link to="/">
        <img className="w-[12.5rem] lg:w-full" src={logo} alt="" />
      </Link>
      <div className="hidden gap-6 lg:flex ">
        <Link className="text-lg font-medium" to="/about">
          About us
        </Link>
        <Link className="text-lg font-medium" to="/services">
          Services
        </Link>
        <Link className="text-[18px] font-medium" to="/sustainability">
          Sustainability
        </Link>
        <Link className="text-lg font-medium" to="/events">
          Events
        </Link>
        <Link className="text-lg font-medium" to="/contact">
          Contact
        </Link>
      </div>
      <div className="lg:hidden">
        <MyDropdown />
      </div>
    </nav>
  );
};

export default Nav;
