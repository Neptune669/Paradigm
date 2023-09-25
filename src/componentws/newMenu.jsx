import * as Dialog from "@radix-ui/react-dialog";
import { NavLink } from "react-router-dom";

const NewMenu = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="text-white items-center flex  justify-between gap-2 py-2  bg-black px-[15px] font-medium leading-none border border-[#c0c0c0] rounded-full">
        Menu{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-[#000000c9] data-[state=open]:animate-overlayShow fixed inset-0" />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[40%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-black p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <Dialog.Title className=" m-0 text-[17px] font-medium ">
          <ul className="flex items-center justify-between mb-4">
            <li>Navigation</li>
            <Dialog.Close asChild>
              <li>
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </li>
            </Dialog.Close>
          </ul>
        </Dialog.Title>

        <div className="flex flex-col items-center justify-center gap-4 text-white ">
          <NavLink
            className="text-lg font-medium border-b border-[#c0c0c0] w-full text-center pb-2 "
            exact
            to="/about"
          >
            About us
          </NavLink>
          <NavLink
            className="text-lg font-medium border-b border-[#c0c0c0] w-full text-center pb-2 "
            to="/services"
          >
            Services
          </NavLink>
          <NavLink
            className="text-lg font-medium border-b border-[#c0c0c0] w-full text-center pb-2 "
            to="/sustainability"
          >
            Sustainability
          </NavLink>
          <NavLink
            className="text-lg font-medium border-b border-[#c0c0c0] w-full text-center pb-2 "
            to="/Events"
          >
            Events
          </NavLink>
          <NavLink
            className="text-lg font-medium border-b border-[#c0c0c0] w-full text-center pb-2 "
            to="/blogs"
          >
            Blogs
          </NavLink>
          <NavLink className="text-lg font-medium " to="/contact">
            Contact
          </NavLink>
          <div className="flex justify-end gap-[25px]"></div>
        </div>

        {/* <Dialog.Close asChild>
          <button
            className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close"
          ></button>
        </Dialog.Close> */}
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default NewMenu;
