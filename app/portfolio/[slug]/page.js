import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolioDatas } from "../../constants/page";
import ScrollToTop from "./ScrollToTop";

export async function generateStaticParams() {
  return portfolioDatas.map((item) => ({
    slug: item.slug,
  }));
}

const Page = async ({ params }) => {
  // ✅ Next.js 15+ async params
  const { slug } = await params;

  const project = portfolioDatas.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <section className=" mx-auto md:px-6 px-3 md:py-20 py-10 relative z-0">
      <Link
        href="/portfolio"
        className="inline-flex items-center gap-2  text-lg hover:underline text-white hover:text-[#e558e5]"
      >
        ← Back to Portfolio
      </Link>

      <div className="my-7 flex flex-col gap-3">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-serif text-white">
          {project.title}
        </h1>

        <a href={project.url} className="text-lg text-white  flex items-center gap-2 underline hover:text-[#e558e5]">
          <Image src="/googleIcon.png" alt="View Project" width={23} height={23} />
          Website Coming Soon...
        </a>

      </div> 

      <Image
        src={project.image}
        alt={project.title}
        width={1400}
        height={700}
        priority
        className="w-full rounded-xl object-cover "
      />
      
      <ScrollToTop />

    </section>
  );
};

export default Page;

