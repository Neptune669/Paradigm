import event from "../assets/event.png";
import hero from "../assets/event two.png";

const Event = () => {
	return (
		<div className="max-w-7xl mx-auto px-8">
			<p className="text-[#48AECD] uppercase text-sm font-semibold mb-2">
				portfolio
			</p>
			<div className="flex flex-col md:flex-row md:justify-between md:items-center mb-16">
				<h2 className="text-2xl md:text-3xl  lg:text-4xl font-medium mb-4 lg:mb-10 lg:w-10/12">
					Our Recent Events.
				</h2>
				<p className="font-semibold flex items-center lg:justify-end gap-1">
					<span className="lg:text-left">View All Events</span>
					<span>
						<svg
							width="18"
							height="28"
							viewBox="0 0 18 28"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M3.74988 14.1149H14.2499"
								stroke="white"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M8.99988 8.86487L14.2499 14.1149L8.99988 19.3649"
								stroke="white"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</span>
				</p>
			</div>
			<ul className="grid md:grid-cols-2 gap-10">
				<li className="flex flex-col gap-10">
					<figure className="rounded-2xl aspect-square">
						<img
							className=" object-cover rounded-2xl aspect-square"
							src={event}
							alt=""
						/>
					</figure>
					<div className="flex flex-col ">
						<h2 className="text-3xl font-medium mb-6">NCHR EGYPT</h2>
						<a href="#" className="flex items-center gap-2">
							<span>View Event</span>
							<svg
								width="19"
								height="28"
								viewBox="0 0 19 28"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M4.3125 14.4949H14.8125"
									stroke="white"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M9.5625 9.2449L14.8125 14.4949L9.5625 19.7449"
									stroke="white"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</a>{" "}
					</div>
				</li>
				<li className="flex flex-col gap-10">
					<figure className="rounded-2xl lg:aspect-square ">
						<img
							className=" object-cover  rounded-2xl aspect-square"
							src={hero}
							alt=""
						/>
					</figure>
					<div className="flex flex-col ">
						<h2 className="text-3xl font-medium mb-6">Insitiut Francis</h2>
						<a href="#" className="flex items-center gap-2">
							<span>View Event</span>
							<svg
								width="19"
								height="28"
								viewBox="0 0 19 28"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M4.3125 14.4949H14.8125"
									stroke="white"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M9.5625 9.2449L14.8125 14.4949L9.5625 19.7449"
									stroke="white"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</a>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default Event;
