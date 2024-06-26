import Icon from "@/assets/icon";
import {
  FolderCopyOutlined,
  LanguageOutlined,
  YouTube,
} from "@mui/icons-material";
import Link from "next/link";
import React from "react";

const YouTubeData = {
  category: "YouTube",
  statistics: [
    {
      label: "Subscribers",
      value: "47 million+",
    },
    {
      label: "Views",
      value: "2.4 billion+",
    },
    {
      label: "Watch hours",
      value: "71 million+",
    },
  ],
};
const MediaData = {
  category: "Social Media",
  statistics: [
    {
      label: "Followers",
      value: "62 million+",
    },
  ],
};
const ContentData = {
  category: "Repository of Wisdom Content",
  statistics: [
    {
      label: "Books",
      value: "140+",
      description: "On life topics and scriptures",
    },
    {
      label: "Articles",
      value: "6000+",
      description: "Available for free",
    },
    {
      label: "Videos",
      value: "12000+",
      description: "Available for free",
    },
    {
      label: "Commentaries",
      value: "60+",
      description: "On scriptures",
    },
  ],
};

const OurJourney = () => {
  return (
    <section className="main-container lg:my-16 my-12">
      <header className="flex flex-col justify-center items-center space-y-4">
        <h1 className="title text-center">Our Journey</h1>
        <p className="description text-center lg:w-[50%] md:w-[80%] w-[90%]">
          Today, the mission of Acharya Prashant has touched the lives of tens
          of millions of individuals. Through his direct contact with people and
          through various internet-based channels, he continues to bring clarity
          to all.
        </p>
      </header>
      <article className="flex flex-col gap-4 lg:my-12 my-8">
        <aside className="flex lg:flex-row flex-col items-center gap-4">
          <div className="bg-orange-300/30 rounded-xl p-6 lg:w-[80%] w-full">
            <Link
              href="https://www.youtube.com/@ShriPrashant"
              className="flex items-center gap-2 text-2xl font-medium text-gray-900 "
            >
              <YouTube className="text-youtube" />
              {YouTubeData?.category}
            </Link>
            <div className={`grid lg:grid-cols-3 grid-cols-1 gap-6 mt-3`}>
              {YouTubeData?.statistics?.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-md hover:bg-orange-500 group p-3 common-transition cursor-pointer"
                >
                  <h4 className="lg:text-2xl text-xl text-red-700 group-hover:text-white font-semibold">
                    {item?.value}
                  </h4>
                  <p className="text-gray-800 group-hover:text-white lg:text-lg text-md">
                    {item?.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-orange-300/30 rounded-xl p-6 lg:w-[20%] w-full">
            <Link
              href=""
              className="flex items-center gap-2 text-2xl font-medium text-gray-900 "
            >
              <LanguageOutlined className="text-youtube" />
              {MediaData?.category}
            </Link>
            <div className={`grid grid-cols-1 gap-6 mt-3`}>
              {MediaData?.statistics?.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-md hover:bg-orange-500 group p-3 common-transition cursor-pointer"
                >
                  <h4 className="lg:text-2xl text-xl text-red-700 group-hover:text-white font-semibold">
                    {item?.value}
                  </h4>
                  <p className="text-gray-800 group-hover:text-white lg:text-lg text-md">
                    {item?.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </aside>
        <aside className="bg-orange-300/30 rounded-xl p-6 w-full">
          <Link
            href=""
            className="flex items-center gap-2 text-2xl font-medium text-gray-900 "
          >
            <FolderCopyOutlined className="text-youtube" />
            {ContentData?.category}
          </Link>
          <div className={`grid lg:grid-cols-4 grid-cols-1 gap-6 mt-3`}>
            {ContentData?.statistics?.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-md hover:bg-orange-500 group p-3 common-transition cursor-pointer"
              >
                <h4 className="lg:text-2xl text-xl text-red-700 group-hover:text-white font-semibold">
                  {item?.value} <span>{item?.label}</span>
                </h4>
                <p className="text-gray-800 group-hover:text-white lg:text-lg text-md">
                  {item?.description}
                </p>
              </div>
            ))}
          </div>
        </aside>
      </article>
    </section>
  );
};

export default OurJourney;
