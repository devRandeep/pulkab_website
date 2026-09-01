import Hero from "../hero/page";
import Portfolio from "../portfolio/page";

const page = () => {
  return (
    <section className="md:w-6xl w-full m-auto container">
      <Hero />
      <Portfolio />
    </section>
  );
};

export default page;
