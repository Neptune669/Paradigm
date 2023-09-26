import CustomCard from "../componentws/customsuscard";

const SucCard = () => {
  const data = [
    {
      text: "No poverty",
      id: "1",
    },
    {
      text: "Zero hunger",
      id: "2",
    },
    {
      text: "Good health and well-being",
      id: "3",
    },
    {
      text: "Quality education",
      id: "4",
    },
    {
      text: "Gender equality",
      id: "5",
    },
    {
      text: "Clean water and sanitation",
      id: "6",
    },
    {
      text: "Affordable and clean energy",
      id: "7",
    },
    {
      text: "Decent work and economic growth",
      id: "8",
    },
    {
      text: "Industry, innovation and infrastructure",
      id: "9",
    },
    {
      text: "Reduced inequalities",
      id: "10",
    },
    {
      text: "Sustainable cities and communities",
      id: "11",
    },
    {
      text: "Responsible consumption and production",
      id: "12",
    },
    {
      text: "Climate action",
      id: "13",
    },
    {
      text: "Life Below Water",
      id: "14",
    },
    {
      text: "Life on land",
      id: "15",
    },
    {
      text: "Peace, justice and strong institutions",
      id: "16",
    },
    {
      text: "Partnerships for the goals",
      id: "17",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 px-8 gap-x-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-16 lg:gap-x-6">
        {data.map((item, index) => (
          <CustomCard
            key={index}
            icon={`/icons/${item.id}.svg`}
            border={`b${item.id}`}
            text={item.text}
          />
        ))}
      </div>
    </>
  );
};

export default SucCard;
