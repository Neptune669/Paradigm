import React from "react";

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
    Array.from({ length: 7 }, (_, i) => `/logos/rowTwo/${i + 1}.png`), // Last row
    // Add more rows here...
  ];

  return (
    <>
      {" "}
      <main className="flex flex-col items-center gap-3">
        <header className="flex flex-col gap-2">
          <p className="font-semibold text-center p-main">
            Trusted by the world’s best brands
          </p>
          <h1 className="text-5xl font-bold text-center">
            Our Valuable Clients
          </h1>
        </header>

        {logoRows.map((row, rowIndex) => (
          <section key={rowIndex}>
            <div
              className={`grid grid-cols-3 gap-2    lg:flex items-center justify-center`}
            >
              {row.map((logo, index) => (
                <Logo key={index} src={logo} />
              ))}
            </div>
          </section>
        ))}
      </main>
    </>
  );
};

export default ServiceTrust;
