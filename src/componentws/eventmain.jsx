const EventMain = () => {
  return (
    <section className="px-8 mt-10">
      <div className="flex flex-col items-center justify-between gap-20 lg:flex-row md:gap-24">
        <div className="flex flex-col self-start gap-2 min-w-fit">
          <h1 className="text-5xl font-bold ">
            Large and short <br /> beautiful heading{" "}
          </h1>
          <p className="text-sm ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
            Nesciunt ea, mollitia aliquid culpa ducimus explicabo <br /> cumque
            quidem
          </p>
        </div>
        <div className="grid grid-cols-2 gap-y-20 gap-x-6">
          <ul className="flex flex-col gap-4 pt-4 border-t">
            <li className="text-4xl font-bold">25</li>
            <li className="p-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing
              elit.consectetur adipisicing
            </li>
          </ul>
          <ul className="flex flex-col gap-4 pt-4 border-t">
            <li className="text-4xl font-bold">25</li>
            <li className="p-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing
              elit.consectetur adipisicing
            </li>
          </ul>
          <ul className="flex flex-col gap-4 pt-4 border-t">
            <li className="text-4xl font-bold">25</li>
            <li className="p-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing
              elit.consectetur adipisicing
            </li>
          </ul>
          <ul className="flex flex-col gap-4 pt-4 border-t">
            <li className="text-4xl font-bold">25</li>
            <li className="p-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing
              elit.consectetur adipisicing
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EventMain;
