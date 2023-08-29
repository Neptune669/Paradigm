import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="max-w-[800px] mx-auto my-9 flex justify-between font-inter">
      <div className="">
        <h1 className="uppercase ">pardigm</h1>
      </div>
      <div className="flex gap-6">
        <Link to="/">About us</Link>
        <Link to="/">Services</Link>
        <Link to="/">sustainability</Link>
        <Link to="/">Events</Link>
        <Link to="/">Contact</Link>
      </div>
    </nav>
  );
};

export default Nav;
