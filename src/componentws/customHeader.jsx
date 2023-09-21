const CustomHeader = ({ children }) => {
  return (
    <h1 className="text-4xl font-extrabold uppercase md:text-7xl lg:text-8xl text-gradient-blue">
      {children}
    </h1>
  );
};

export default CustomHeader;
