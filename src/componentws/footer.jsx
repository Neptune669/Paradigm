import logo from "../assets/Vector.svg";
const Footer = () => {
	return (
		<footer className="max-w-7xl mt-20 px-8 lg:mx-auto">
			<div className="flex flex-col gap-2">
				<h2 className="">
					<img src={logo} alt="" />
				</h2>
				<p className="text-neutral-500 text-sm md:text-base">
					Bringing your Brand to life in digital world
				</p>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-[1.5fr,1fr,1fr] xl:grid-cols-[1.5fr,1fr,1fr,1.5fr] lg:gap-24 gap-10 mt-5">
				<ul className="flex flex-col gap-4">
					<li>
						<p>10 Nile st, oula, Giza district , Cairo Governorate</p>
					</li>
					<li>
						<a href="tel:+20102655200"> 0102655200</a>
					</li>
					<li>
						<a href="mailto:hi@paradigm-eg.com">hi@paradigm-eg.com</a>
					</li>
				</ul>
				<ul className="flex flex-col gap-4">
					<li>Home</li>
					<li>Services</li>
					<li>Sustainability</li>
					<li>Events</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
				<ul className="flex flex-col gap-4">
					<li>Instagram</li>
					<li>Facebook</li>
					<li>Twitter</li>
					<li>Youtube</li>
				</ul>
				<ul className="flex flex-col gap-4 ">
					<li>
						<p className="">
							<span>2023 Paradigm.All rights</span> <span>reserved</span>
						</p>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
