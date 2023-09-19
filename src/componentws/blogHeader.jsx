import CustomHeader from "./customHeader";

const BlogHero = () => {
  return (
    <section>
      <div className="flex flex-col gap-3 mt-16">
        <CustomHeader>blog</CustomHeader>
        <p className="font-medium text-lg text-[#C0C0C0]">
          We strongly believe in the value of Corporate Social Responsibilities;
          It is a culturally embedded concept and a widely embraced social
          practice in our community. The bigger we grow as a company, the more
          we become aware of our impact potential. With sustainability being the
          core focus of our vision, we take inspiration from the United Nations’
          Global Goals, and we strive to actively participate in achieving those
          goals within the field of our practices.
        </p>
      </div>
    </section>
  );
};

export default BlogHero;
