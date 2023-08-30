import { Link } from "react-router-dom";
import logo from "../assets/Vector.svg";
const Nav = () => {
	return (
		<nav className="max-w-7xl mx-auto my-9 flex justify-between ">
			<div className="">
				<img src={logo} alt="" />
			</div>
			<div className="flex gap-6">
				<Link className="text-[18px] font-[500]" to="/">
					About us
				</Link>
				<Link className="text-[18px] font-[500]" to="/">
					Services
				</Link>
				<Link className="text-[18px] font-[500]" to="/">
					sustainability
				</Link>
				<Link className="text-[18px] font-[500]" to="/">
					Events
				</Link>
				<Link className="text-[18px] font-[500]" to="/">
					Contact
				</Link>
			</div>
		</nav>
	);
};

export default Nav;
