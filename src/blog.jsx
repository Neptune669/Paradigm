const Blog = () => {
	return (
		<div className="max-w-7xl mx-auto p-8 ">
			<p className="text-[#48AECD] uppercase text-sm font-semibold mb-2">
				Blog
			</p>
			<div className="flex justify-between items-center mb-16">
				<h2 className="text-4xl font-medium">Our Recent Articles</h2>
				<p className="font-semibold flex items-center gap-1">
					<span>View all events</span>
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
			</div>{" "}
			<div className="grid grid-cols-3 gap-14">
				<div className="relative h-80 flex flex-col justify-end  overflow-hidden rounded-xl bg-white shadow-none ">
					<figure className="rounded-xl">
						<img
							src="https://images.pexels.com/photos/3379261/pexels-photo-3379261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							className="absolute inset-0 h-full w-full overflow-hidden rounded-xl bg-transparent bg-cover bg-center"
						/>
					</figure>
					<div className="relative pl-3 pr-12 pb-4 font-semibold">
						<h3 className="text-white text-2xl mb-3">
							What Event Organizers Need to Know
						</h3>
						<h4 className=" uppercase text-sm">APril 1.2022</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
