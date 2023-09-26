const DynamicGrid = ({ data }) => {
  return (
    <div className="grid grid-cols-2 gap-y-20 gap-x-6">
      {data.map((item, index) => (
        <ul key={index} className="flex flex-col gap-4 pt-4 border-t">
          <li className="text-4xl font-bold">{item.number}</li>
          <li className="p-secondary">{item.text}</li>
        </ul>
      ))}
    </div>
  );
};

export default DynamicGrid;
