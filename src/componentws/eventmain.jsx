import DynamicGrid from "./customGrid";
const data = [
  {
    number: "25",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    number: "75",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    number: "25",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    number: "25",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];
const EventMain = () => {
  return (
    <section className="px-8 mt-10">
      <div className="flex flex-col items-center justify-between gap-20 lg:flex-row md:gap-24">
        <div className="flex flex-col self-start gap-2 min-w-fit">
          <h1 className="text-5xl font-bold ">
            Large and short <br /> beautiful heading{" "}
          </h1>
          <p className="text-sm p-secondary ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
            Nesciunt ea, mollitia aliquid culpa ducimus explicabo <br /> cumque
            quidem
          </p>
        </div>
        <DynamicGrid data={data} />
      </div>
    </section>
  );
};

export default EventMain;
