import SucCard from "./suscards";
const Sdg = () => {
  const data = [
    {
      header: "SDG practices",
      title: "Our Sustainability Practices",
    },
  ];
  const Title = (
    <div className="flex flex-col gap-8 px-8">
      {data.map((item, index) => (
        <div className="" key={index}>
          <p className="mb-3 text-sm font-semibold p-main">{item.header}</p>
          <h2 className="mb-3 text-4xl font-bold">{item.title}</h2>
        </div>
      ))}
    </div>
  );
  return (
    <>
      {Title}
      <SucCard />
    </>
  );
};

export default Sdg;
