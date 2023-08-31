import { Link } from "react-router-dom";
import logo from "../assets/Vector.svg";
const Nav = () => {
	return (
		<nav className="px-8 max-w-7xl mx-auto my-9 flex justify-between">
			<Link to="/">
				<img className="w-[200px] lg:w-full" src={logo} alt="" />
			</Link>
			<div className="lg:flex gap-6 hidden ">
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
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</div>
		</nav>
	);
};

export default Nav;
