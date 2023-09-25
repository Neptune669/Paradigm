const LayoutContainer = ({ children }) => {
  return (
    <div className="flex flex-col gap-20 mx-auto overflow-x-hidden max-w-7xl ">
      {children}
    </div>
  );
};

export default LayoutContainer;
