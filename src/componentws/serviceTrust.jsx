// The Logo component
const Logo = ({ src }) => (
  <figure className="flex items-center justify-center w-20 h-12 p-2 bg-white rounded-lg">
    <img src={src} className="p-2 rounded-lg " />
  </figure>
);

const ServiceTrust = () => {
  const logoRows = [
    Array.from({ length: 11 }, (_, i) => `/logos/${i + 1}.svg`),
    Array.from({ length: 11 }, (_, i) => `/logos/rowTwo/${i + 1}.png`),
    Array.from({ length: 11 }, (_, i) => `/logos/rowTwo/${i + 1}.png`),
    Array.from({ length: 11 }, (_, i) => `/logos/rowTwo/${i + 1}.png`),
    Array.from({ length: 11 }, (_, i) => `/logos/rowTwo/${i + 1}.png`),
    Array.from({ length: 11 }, (_, i) => `/logos/rowTwo/${i + 1}.png`),
    Array.from({ length: 7 }, (_, i) => `/logos/rowTwo/${i + 1}.png`),
    // Add more rows here...
  ];

  return (
    <>
      <main className="flex flex-col items-center gap-10">
        <header className="flex flex-col gap-x-2">
          <p className="font-semibold text-center p-main">
            Trusted by the world’s best brands
          </p>
          <h1 className="text-5xl font-bold">Our Valuable Clients</h1>
        </header>
      </main>
      <div className="flex flex-col items-center gap-x-6 gap-y-8 ">
        {logoRows.map((row, rowIndex) => (
          <section key={rowIndex}>
            <div className="flex items-center gap-5">
              {row.map((logo, index) => (
                <Logo key={index} src={logo} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

export default ServiceTrust;
