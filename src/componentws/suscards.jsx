import CustomCard from "../componentws/customsuscard";

const SucCard = () => {
  const data = [
    {
      text: "No poverty",
      id: "1",
    },
    {
      text: "No poverty",
      id: "2",
    },
    {
      text: "No poverty",
      id: "3",
    },
    {
      text: "No poverty",
      id: "4",
    },
    {
      text: "No poverty",
      id: "5",
    },
    {
      text: "No poverty",
      id: "6",
    },
    {
      text: "No poverty",
      id: "7",
    },
    {
      text: "No poverty",
      id: "8",
    },
    {
      text: "No poverty",
      id: "9",
    },
    {
      text: "No poverty",
      id: "10",
    },
    {
      text: "No poverty",
      id: "11",
    },
    {
      text: "No poverty",
      id: "12",
    },
    {
      text: "No poverty",
      id: "13",
    },
    {
      text: "No poverty",
      id: "14",
    },
    {
      text: "No poverty",
      id: "15",
    },
    {
      text: "No poverty",
      id: "16",
    },
    {
      text: "No poverty",
      id: "17",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-3 gap-6 px-8 gap-y-8">
        {data.map((item, index) => (
          <CustomCard
            key={index}
            icon={`/icons/${item.id}.svg`}
            text={item.text}
          />
        ))}
      </div>
    </>
  );
};

export default SucCard;
