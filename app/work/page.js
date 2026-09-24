import Portfolio from "../portfolio/page";

const page = () => {
  return (
    <section className="md:w-6xl w-full m-auto container">

      <div className="w-full px-5 md:px-0 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-14">
          <h2 className="italic text-4xl md:text-5xl">
            What we build with
          </h2>

          <p className="max-w-sm text-gray-400 text-base md:text-lg leading-6">
            A working set of tools across design, web builds, and product
            engineering — chosen per project, not applied by default.
          </p>
        </div>

        <div className="border-t border-gray-800"></div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="py-8 md:pr-8 md:border-r border-gray-800">
            <h3 className="italic text-2xl mb-2">UI / UX Design</h3>

            <p className="text-gray-500 text-sm mb-7">
              Interfaces, prototypes, visual systems
            </p>

            <div className="border-t border-gray-800">
              <div className="flex justify-between items-center py-4 border-b border-gray-800">
                <span>Figma</span>
                <span className="text-gray-500 text-sm">
                  design & prototyping
                </span>
              </div>

              <div className="flex justify-between items-center py-4 border-b border-gray-800">
                <span>Adobe XD</span>
                <span className="text-gray-500 text-sm">UI prototyping</span>
              </div>

              <div className="flex justify-between items-center py-4 border-b border-gray-800">
                <span>Adobe Illustrator</span>
                <span className="text-gray-500 text-sm">visual assets</span>
              </div>

              <div className="flex justify-between items-center py-4 border-b border-gray-800">
                <span>Generative AI tools</span>
                <span className="text-gray-500 text-sm">concepting</span>
              </div>
            </div>
          </div>

          <div className="py-8 md:pl-8">
            <h3 className="italic text-2xl mb-2">Web Development</h3>

            <p className="text-gray-500 text-sm mb-7">
              Marketing sites, CMS builds, storefronts
            </p>

            <div className="border-t border-gray-800">
              <div className="flex justify-between items-center py-4 border-b border-gray-800">
                <span>React & Next.js</span>
                <span className="text-gray-500 text-sm">frontend</span>
              </div>

              <div className="flex justify-between items-center py-4 border-b border-gray-800">
                <span>WordPress</span>
                <span className="text-gray-500 text-sm">CMS</span>
              </div>

              <div className="flex justify-between items-center py-4 border-b border-gray-800">
                <span>HTML / CSS</span>
                <span className="text-gray-500 text-sm">core build</span>
              </div>

              <div className="flex justify-between items-center py-4 border-b border-gray-800">
                <span>Emerging frameworks</span>
                <span className="text-gray-500 text-sm">as needed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="md:w-6xl w-full md:mx-auto mx-5 font-serif  md:text-5xl text-3xl">
        Our Recent work
      </p>

      <Portfolio />
    </section>
  );
};

export default page;
