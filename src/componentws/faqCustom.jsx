import { Disclosure } from "@headlessui/react";

export default function MyDisclosure() {
  return (
    <section className="flex flex-col gap-6">
      <div className="w-full border-b border-gray-600 pb-14">
        <Disclosure>
          <Disclosure.Button className="flex items-center justify-between w-full max-w-4xl mx-auto text-2xl ">
            <div className="">
              <h1 className="">Are you open for new projects ?</h1>
            </div>
            <div className="">+</div>
          </Disclosure.Button>
          <Disclosure.Panel className="w-full max-w-4xl pb-0 m-0 mx-auto mt-4 text-gray-500">
            Yes! You can purchase a license that you can share with your entire
            team.
          </Disclosure.Panel>
        </Disclosure>
      </div>
      <div className="w-full border-b border-gray-600 pb-14">
        <Disclosure>
          <Disclosure.Button className="flex items-center justify-between w-full max-w-4xl mx-auto text-2xl ">
            <div className="">
              <h1 className="">How long has the agency been running for ?</h1>
            </div>
            <div className="">+</div>
          </Disclosure.Button>
          <Disclosure.Panel className="w-full max-w-4xl mx-auto mt-4 text-gray-500">
            Yes! You can purchase a license that you can share with your entire
            team.
          </Disclosure.Panel>
        </Disclosure>
      </div>
      <div className="w-full border-b border-gray-600 pb-14">
        <Disclosure>
          <Disclosure.Button className="flex items-center justify-between w-full max-w-4xl mx-auto text-2xl ">
            <div className="">
              <h1 className="">Do you currently have career openings ?</h1>
            </div>
            <div className="">+</div>
          </Disclosure.Button>
          <Disclosure.Panel className="w-full max-w-4xl mx-auto mt-4 text-gray-500">
            Yes! You can purchase a license that you can share with your entire
            team.
          </Disclosure.Panel>
        </Disclosure>
      </div>
      <div className="w-full border-b border-gray-600 pb-14">
        <Disclosure>
          <Disclosure.Button className="flex items-center justify-between w-full max-w-4xl mx-auto text-2xl ">
            <div className="">
              <h1 className="">
                Do you offer discounts for nonprofit companies ?
              </h1>
            </div>
            <div className="">+</div>
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
