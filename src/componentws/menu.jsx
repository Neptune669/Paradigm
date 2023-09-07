import { Menu } from "@headlessui/react";
import Hamburger from "hamburger-react";
import { useState } from "react";

export default function MyDropdown() {
  const [isOpen, setOpen] = useState(false);
  return (
    <Menu as="div" className="md:block lg:hidden">
      <div className="flex flex-col items-center justify-end w-12 gap-2 ">
        <Menu.Button>
          <Hamburger toggle={setOpen} size={25} label="menu" toggled={isOpen} />
        </Menu.Button>
        <Menu.Items className="flex flex-col items-center gap-2 ">
          <Menu.Item>
            {() => (
              <a className={``} href="/about">
                About Us
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {() => (
              <a className={``} href="/services">
                Services
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {() => (
              <a className={``} href="/sustainability">
                Sustainability
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {() => (
              <a className={``} href="/events">
                Events
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {() => (
              <a className={``} href="/Contact">
                Contact
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            <span></span>
          </Menu.Item>
        </Menu.Items>
      </div>
    </Menu>
  );
}
