import timer from "../assets/timer.svg";
import ticket from "../assets/ticket.svg";
import star from "../assets/star.svg";
import rocket from "../assets/rocket.svg";

const items = [
	{
		icon: timer,
		text: "Over 8 years of experience in event management",
	},
	{
		icon: star,
		text: "High quality levels across all our services",
	},
	{
		icon: rocket,
		text: "Delivering Full Event Production",
	},
	{
		icon: ticket,
		text: "Execution of diverse Events",
	},
];

const About = () => {
	return (
		<div className="max-w-7xl mx-auto flex flex-col lg:items-baseline px-8">
			<p className="text-[#48AECD] uppercase text-sm font-semibold mb-2">
				About us
			</p>
			<div className="max-w-4xl">
				<h2 className="text-2xl md:text-3xl  lg:text-4xl font-medium mb-10 lg:w-10/12">
					Discover the story Behind Our Passionate Event Management Agency And
					How Are We Empowering Business to succeed.
				</h2>
			</div>
			<ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-6 grid-cols-1">
				{items.map((item, index) => (
					<li key={index} className="border border-[#2E2E2E] rounded-2xl">
						<div className="flex flex-col items-center py-7 px-4 text-center gap-5">
							<img className="w-10 h-10" src={`${item.icon}`} alt="" />
							<div className="">
								<p>{item.text}</p>
							</div>
						</div>
					</li>
				))}
			</ul>
			<div className="bg-[#1F2020] rounded-full px-9 py-3 w-fit   ">
				<a className="flex items-end gap-2 font-medium" href="#">
					<span>Read our story </span>
					<span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="28"
							viewBox="0 0 19 28"
							fill="none"
						>
							<path
								d="M4.3125 13.6147H14.8125"
								stroke="#EEEEEE"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M9.5625 8.36475L14.8125 13.6147L9.5625 18.8647"
								stroke="#EEEEEE"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</span>
				</a>
			</div>
		</div>
	);
};

export default About;
