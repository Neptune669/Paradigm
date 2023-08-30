import timer from "./assets/timer.svg";
import ticket from "./assets/ticket.svg";
import star from "./assets/star.svg";
import rocket from "./assets/rocket.svg";

const About = () => {
	return (
		<div className="max-w-7xl mx-auto flex flex-col ">
			<p className="text-[#48AECD] uppercase text-sm font-semibold mb-2">
				About us
			</p>
			<div className="max-w-4xl">
				<div className="text-4xl font-medium mb-10">
					<h2>Discover the story Behind Our Passionate</h2>
					<h2>Event Management Agency And How Are We Empowering</h2>
					<h2>Business to succeed. </h2>
				</div>
			</div>
			<div className="grid grid-cols-4 gap-10 mb-6">
				<div className="border   border-[#2E2E2E] rounded-2xl ">
					<div className="flex flex-col items-center py-7 px-4 text-center gap-5  ">
						<img className="w-10 h-10" src={timer} alt="" />
						<div className="">
							<p>Over 8 years of experience in event management</p>
						</div>
					</div>
				</div>
				<div className="border    border-[#2E2E2E] rounded-2xl">
					<div className="flex flex-col items-center py-7 px-4 text-center gap-5  ">
						<div className="">
							<img className="w-10 h-10" src={star} alt="" />
						</div>
						<div className="">
							<p className="">High quality levels across all our services</p>
						</div>
					</div>
				</div>
				<div className="border    border-[#2E2E2E] rounded-2xl">
					<div className="flex flex-col items-center py-7 px-4 text-center gap-5  ">
						<div className="">
							<img className="w-10 h-10" src={rocket} alt="" />
						</div>
						<div className="">
							<p>Delivering Full Event Production</p>
						</div>
					</div>
				</div>
				<div className="border    border-[#2E2E2E] rounded-2xl">
					<div className="flex flex-col items-center py-7 px-4 text-center gap-5  ">
						<div className="">
							<img className="w-10 h-10" src={ticket} alt="" />
						</div>
						<div className="">
							<p>Execution of diverse Events</p>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-[#1F2020] rounded-full px-9 py-3 w-fit   ">
				<a className="items-center flex gap-1   font-medium" href="">
					<span>Read our story </span>
					<span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="19"
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
