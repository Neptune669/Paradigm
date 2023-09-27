import { Disclosure } from "@headlessui/react";

export default function MyDisclosure() {
	return (
		<section className="flex flex-col items-center gap-6 px-8">
			<div className="w-full  pb-14">
				<Disclosure>
					<Disclosure.Button className="flex items-center justify-between w-full max-w-4xl gap-10 mx-auto text-2xl ">
						<div className="">
							<h1 className="text-base font-bold lg:text-3xl ">
								Are you open for new projects ?
							</h1>
						</div>
						<span className="">+</span>
					</Disclosure.Button>
					<Disclosure.Panel className="w-full max-w-4xl pb-0 m-0 mx-auto mt-4 text-gray-500">
						Yes! You can purchase a license that you can share with your entire
						team.
					</Disclosure.Panel>
				</Disclosure>
			</div>
			<div className="w-full   pb-14">
				<Disclosure>
					<Disclosure.Button className="flex items-center justify-between w-full max-w-4xl mx-auto text-2xl ">
						<div className="">
							<h1 className="text-base font-bold lg:text-3xl">
								How long has the agency been running for ?
							</h1>
						</div>
						<span className="">+</span>
					</Disclosure.Button>
					<Disclosure.Panel className="w-full max-w-4xl mx-auto mt-4 text-gray-500">
						Yes! You can purchase a license that you can share with your entire
						team.
					</Disclosure.Panel>
				</Disclosure>
			</div>
			<div className="w-full   pb-14">
				<Disclosure>
					<Disclosure.Button className="flex items-center justify-between w-full max-w-4xl mx-auto text-2xl ">
						<div className="">
							<h1 className="text-base font-bold lg:text-3xl">
								Do you currently have career openings ?
							</h1>
						</div>
						<span className="">+</span>
					</Disclosure.Button>
					<Disclosure.Panel className="w-full max-w-4xl mx-auto mt-4 text-gray-500">
						Yes! You can purchase a license that you can share with your entire
						team.
					</Disclosure.Panel>
				</Disclosure>
			</div>
			<div className="w-full  pb-14">
				<Disclosure>
					<Disclosure.Button className="flex items-center justify-between w-full max-w-4xl mx-auto text-2xl ">
						<div className="">
							<h1 className="text-base font-bold lg:text-3xl">
								Do you offer discounts for nonprofit companies ?
							</h1>
						</div>
						<span className="">+</span>
					</Disclosure.Button>
					<Disclosure.Panel className="w-full max-w-4xl mx-auto mt-4 text-gray-500">
						Yes! You can purchase a license that you can share with your entire
						team.
					</Disclosure.Panel>
				</Disclosure>
			</div>
		</section>
	);
}
