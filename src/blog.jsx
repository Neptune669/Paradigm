const Blog = () => {
  return (
    <div className="max-w-[800px] mx-auto mt-[8rem] p-8 ">
      <p className="text-[#48AECD]">Blogs</p>
      <div className="grid grid-cols-3 gap-14 mt-6">
        <div className="relative grid h-[20rem] w-[15rem] max-w-[35rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
          <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://images.pexels.com/photos/3379261/pexels-photo-3379261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
          </div>
          <div className="relative p-6 py-14 px-6 md:px-12">
            <h2 className="mb-6 block font-inter text-sm font-bold leading-[1.5] tracking-normal text-white antialiased">
              What Event Organizers Need to Know
            </h2>
            <h5 className="mb-4 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-400 antialiased">
              Abril 1.2022
            </h5>
          </div>
        </div>
        <div className="relative grid h-[20rem] w-[15rem] max-w-[35rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
          <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://images.pexels.com/photos/3379261/pexels-photo-3379261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
          </div>
          <div className="relative p-6 py-14 px-6 md:px-12">
            <h2 className="mb-6 block font-inter font-bold text-sm  leading-[1.5] tracking-normal text-white antialiased">
              What Event Organizers Need to Know
            </h2>
            <h5 className="mb-4 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-400 antialiased">
              Abril 1.2022
            </h5>
          </div>
        </div>
        <div className="relative grid h-[20rem] w-[15rem] max-w-[35rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
          <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://images.pexels.com/photos/3379261/pexels-photo-3379261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
          </div>
          <div className="relative p-6 py-14 px-6 md:px-12">
            <h2 className="mb-6 block font-inter text-sm font-bold leading-[1.5] tracking-normal text-white antialiased">
              What Event Organizers Need to Know
            </h2>
            <h5 className="mb-4 block font-sans text-xl font-semibold  leading-snug tracking-normal text-gray-400 antialiased">
              Abril 1.2022
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
