import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const AlertDialogDemo = () => (
  <AlertDialog.Root className="relative">
    <AlertDialog.Trigger asChild>
      <button className="text-violet11 gap-2   inline-flex h-[35px] items-center justify-center rounded-2xl  bg-black px-[15px] font-medium leading-none border  focus:shadow-black">
        Menu
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
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
    </AlertDialog.Trigger>
    <AlertDialog.Portal>
      <AlertDialog.Overlay className="bg-[#00000081] data-[state=open]:animate-overlayShow fixed inset-0" />
      <AlertDialog.Content className="data-[state=open]:animate-contentShow fixed top-[40%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-md bg-[#000000bf] p-[25px] ">
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
          <div className="flex justify-end gap-[25px]">
            <AlertDialog.Cancel asChild>
              <button className="absolute top-0 right-0 px-4 font-medium ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </AlertDialog.Cancel>
          </div>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Portal>
  </AlertDialog.Root>
);

export default AlertDialogDemo;
