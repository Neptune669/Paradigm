import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../assets/Vector.svg";
// import MyDropdown from "./menu";

import NewMenu from "./newMenu";

const Nav = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<nav className="flex justify-between px-8 mx-auto max-w-7xl my-9">
			<Link to="/">
				<img className="w-[12.5rem] lg:w-full" src={logo} alt="" />
			</Link>
			<div className="items-center hidden gap-10 lg:flex ">
				<NavLink
					className={`text-lg font-medium ${activeIndex === 1 ? "active" : ""}`}
					to="/about"
				>
					About us
				</NavLink>
				<NavLink
					className={`text-lg font-medium ${activeIndex === 2 ? "active" : ""}`}
					to="/services"
				>
					Services
				</NavLink>
				<NavLink
					className={`text-lg font-medium ${activeIndex === 3 ? "active" : ""}`}
					to="/sustainability"
				>
					Sustainability
				</NavLink>
				<NavLink
					className={`text-lg font-medium ${activeIndex === 4 ? "active" : ""}`}
					to="/Events"
				>
					Events
				</NavLink>
				<NavLink
					className={`text-lg font-medium ${activeIndex === 6 ? "active" : ""}`}
					to="/contact"
				>
					Contact
				</NavLink>
				<NavLink
					className={` text-xs  bg-green-500 text-white px-4 py-3 rounded-full  ${
						activeIndex === 7 ? "text-white" : ""
					}`}
					to="/contact"
				>
					Chat Via Whatsapp
				</NavLink>
			</div>
			<div className="lg:hidden">
				<NewMenu />
			</div>
		</nav>
	);
};

export default Nav;
