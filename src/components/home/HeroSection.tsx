import { ArrowRightAlt } from "@mui/icons-material";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="main-container">
      <div className="relative ">
        <img src="/ap-hero-image.jpg" className="h-full w-full" />
        <div className="absolute top-14 left-20 space-y-5 w-[42%]">
          <h1 className="text-7xl font-bold  text-gray-900">
            Acharya Prashant
          </h1>
          <h2 className="text-4xl italic font-serif text-gray-600 pl-4">
            To demolish all that is false
          </h2>
          <div className="w-full pr-14 space-y-5">
            <h3 className="text-xl  text-gray-800 font-sans">
              Acharya Prashant is a spiritual teacher rooted in Advait Vedanta.
              His unique spiritual literature is at par with the highest words
              that mankind has ever known. Equally, one could simply call him a
              teacher beyond any tradition.
            </h3>
            <h3 className="text-xl text-gray-800">
              He is a veganism promoter, an environmental activist, a science
              activist, a campaigner against superstition, and a champion of
              essential human freedom.
            </h3>
          </div>
          <Link
            href={"/"}
            className="text-red-700 inline-block  group hover:text-red-500"
          >
            Read Bio
            <ArrowRightAlt className="group-hover:-rotate-12 common-transition" />
          </Link>
        </div>
      </div>
      <div className="relative my-24 p-5 rounded-xl  bg-[url('/hero-bg-sri-krisna.jpg')] bg-cover bg-no-repeat flex justify-center items-center">
        <img
          src="/sri-krisna.jpg"
          className="rounded-full h-[12rem] w-[12rem] absolute left-7"
        />
        <div className="space-y-3">
          <h2 className="text-gray-900 text-4xl font-semibold">
            Shrimad Bhagavad Gita Live Session
          </h2>
          <h4 className="text-xl font-700 font-medium">
            Acharya Prashant is teaching Bhagavad Gita, verse by verse. Do not
            miss.
          </h4>
        </div>
        <button className="bg-red-800 text-xl font-semibold hover:bg-opacity-90 text-white px-8 py-3 rounded-lg absolute right-7">
          Know More
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
