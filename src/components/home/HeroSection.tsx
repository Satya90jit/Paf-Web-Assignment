import { ArrowRightAlt } from "@mui/icons-material";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:main-container">
      <img src="/ap.jpg" className="h-full w-full lg:hidden" />
      <article className="lg:relative main-container">
        <img
          src="/ap-hero-image.jpg"
          className="h-full w-full hidden lg:block"
        />
        <div className="lg:absolute lg:top-14 lg:left-20 lg:space-y-5 space-y-3 lg:w-[42%] w-full lg:mt-0 mt-5">
          <h1 className="lg:text-7xl text-4xl font-bold  text-gray-900 text-center lg:text-start">
            Acharya Prashant
          </h1>
          <h2 className="lg:text-4xl text-2xl italic font-serif text-gray-600 lg:pl-4 text-center lg:text-start">
            To demolish all that is false
          </h2>
          <div className="w-full lg:pr-14 lg:space-y-5 space-y-3">
            <h3 className="lg:text-xl text-lg  text-gray-800 font-sans">
              Acharya Prashant is a spiritual teacher rooted in Advait Vedanta.
              His unique spiritual literature is at par with the highest words
              that mankind has ever known. Equally, one could simply call him a
              teacher beyond any tradition.
            </h3>
            <h3 className="lg:text-xl text-lg text-gray-800">
              He is a veganism promoter, an environmental activist, a science
              activist, a campaigner against superstition, and a champion of
              essential human freedom.
            </h3>
          </div>
          <Link
            href={"/"}
            className="text-red-700 block pb-8 lg:pb-0 group hover:text-red-500 text-center lg:text-start"
          >
            Read Bio
            <ArrowRightAlt className="group-hover:-rotate-12 common-transition" />
          </Link>
        </div>
      </article>
      <article className="main-container ">
        <div className="relative lg:my-24 md:my-16 my-8 p-5 rounded-xl bg-[url('/hero-bg-sri-krisna.jpg')] bg-cover bg-no-repeat flex lg:flex-row flex-col justify-center items-center">
          <img
            src="/sri-krisna.jpg"
            className="rounded-full lg:h-[12rem] h-[5rem] lg:w-[12rem] w-[5rem] absolute lg:left-7 -top-10"
          />
          <div className="lg:space-y-3 space-y-1 mt-7">
            <h2 className="text-gray-900 lg:text-4xl text-xl font-semibold text-center">
              Shrimad Bhagavad Gita Live Session
            </h2>
            <h4 className="lg:text-xl text-md font-700 font-medium text-center">
              Acharya Prashant is teaching Bhagavad Gita, verse by verse. Do not
              miss.
            </h4>
          </div>
          <button className="bg-red-800 lg:text-xl text-md lg:font-semibold font-medium hover:bg-opacity-90 text-white lg:px-8 px-4 lg:py-3 md:py-2 py-1 rounded-lg lg:absolute lg:right-7 mt-3">
            Know More
          </button>
        </div>
      </article>
    </section>
  );
};

export default HeroSection;
