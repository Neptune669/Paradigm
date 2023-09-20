import placeholder from "../assets/place.svg";
import BranchCard from "./branchCard";
const branchData = [
  {
    location: "Egypt, Cairo",
    phone: "(414) 248 - 8027",
    email: "info@paradigm-eg.com",
    image: placeholder,
  },
  {
    location: "Egypt, Cairo",
    phone: "(414) 248 - 8027",
    email: "info@paradigm-eg.com",
    image: placeholder,
  },
  {
    location: "Egypt, Cairo",
    phone: "(414) 248 - 8027",
    email: "info@paradigm-eg.com",
    image: placeholder,
  },
];
const Branches = () => {
  return (
    <>
      <header className="flex flex-col gap-3">
        <p className="text-sm font-semibold uppercase p-main">branches</p>
        <h1 className="text-5xl font-medium leading-[3.9rem]">
          Come and visit us at one of our branches
        </h1>
      </header>
      <main className="flex flex-col gap-8">
        {branchData.map((branch, index) => (
          <BranchCard key={index} branch={branch} />
        ))}
      </main>
    </>
  );
};

export default Branches;
