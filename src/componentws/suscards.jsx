import icon from "../assets/icons/1.svg";
import CustomCard from "../componentws/customsuscard";

const SucCard = () => {
  const data = [
    {
      icon: icon,
      text: "No poverty",
    },
    {
      icon: icon,
      text: "No poverty",
    },
    {
      icon: icon,
      text: "No poverty",
    },
    {
      icon: icon,
      text: "No poverty",
    },
    {
      icon: icon,
      text: "No poverty",
    },
    {
      icon: icon,
      text: "No poverty",
    },
    {
      icon: icon,
      text: "No poverty",
    },
    {
      icon: icon,
      text: "No poverty",
    },
    {
      icon: icon,
      text: "No poverty",
    },
    {
      icon: icon,
      text: "No poverty",
    },
    {
      icon: icon,
      text: "No poverty",
    },
    {
      icon: icon,
      text: "No poverty",
    },
    {
      icon: icon,
      text: "No poverty",
    },
    {
      icon: icon,
      text: "No poverty",
    },
    {
      icon: icon,
      text: "No poverty",
    },
    {
      icon: icon,
      text: "No poverty",
    },
    {
      icon: icon,
      text: "No poverty",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-3 gap-6 gap-y-8">
        {data.map((item, index) => (
          <CustomCard key={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default SucCard;
