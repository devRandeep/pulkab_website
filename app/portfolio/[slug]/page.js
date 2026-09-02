import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolioDatas } from "../../constants/page";

const Page = async ({ params }) => {
  // ✅ Next.js 15 requires await
  const { slug } = await params;

  // ❌ For Next.js 14, just use: const { slug } = params;

  const project = portfolioDatas.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <section className=" mx-auto md:px-6 px-3 md:py-20 py-10">
      <Link
        href="/portfolio"
        className="inline-flex items-center gap-2 mb-10 text-lg hover:underline text-white"
      >
        ← Back to Portfolio
      </Link>

      <Image
        src={project.image}
        alt={project.title}
        width={1400}
        height={700}
        priority
        className="w-full rounded-xl object-cover"
      />

      <div className="mt-12">
        <p className="uppercase tracking-widest text-gray-500 text-white">
          {project.category}
        </p>

        <h1 className="text-3xl md:text-4xl lg:text-6xl font-serif mt-3 text-white">
          {project.title}
        </h1>

        <p className="mt-8  text-lg leading-8 text-gray-700 text-white">
          {project.description}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {project.gallery.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`${project.title} ${index + 1}`}
            width={500}
            height={500}
            className="w-full h-[200px] md:h-[350]  rounded-xl object-cover"
          />
        ))}
      </div>
    </section>
  );
};

export default Page;
