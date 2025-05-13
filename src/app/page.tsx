import Image from "next/image";
import Mockup from "@/assets/icons/mockup.png";
import TypeWriterText from "@/components/client/TypeWriter/TypeWriterText";
import Link from "next/link";

export default function Page() {
  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-y-scroll bg-custom-linear text-slate-50 sm:overflow-hidden">
      <div className="mt-0 h-[100dvh] w-full px-4 pt-8 md:px-8 xl:mt-8">
        <div className="mb-8 text-center">
          <h2 className="font-subHeading text-[24px] font-bold text-slate-300 xl:text-[36px]">
            Hello, i&apos;am
          </h2>
          <TypeWriterText />
          <p className="mx-auto max-w-full font-body text-sm text-slate-300 md:text-[16px] xl:max-w-[1300px]">
            A Software Engineer with experience in building web and mobile
            applications using Java, Spring Boot, .NET Core, React, Vue.js,
            Laravel, and React Native. I have worked on projects such as cashier
            systems, band websites, and livestock trading APIs, and I thrive in
            team environments, problem solving, and continuous learning.
          </p>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-4 pb-4 sm:pb-0 lg:flex-col-reverse">
          <div className="w-full">
            <Image
              src={Mockup}
              alt="Hero Image"
              width={1414}
              height={856.21}
              className="relative z-20 mx-auto my-8 h-auto max-w-[1414] lg:mt-0"
              priority
            />
          </div>
          <div className="flex w-full flex-col justify-center gap-4 font-mono lg:flex-row">
            <Link
              href="/about"
              className="w-full rounded-md bg-amber-500 px-4 py-4 text-center font-medium uppercase text-white lg:w-fit"
            >
              Get in Touch
            </Link>
            <Link
              href="/docs/cv.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-md border border-amber-500 bg-transparent px-4 py-4 text-center font-button uppercase text-amber-500 lg:w-fit"
            >
              Download CV
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
