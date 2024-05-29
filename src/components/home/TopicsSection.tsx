import {
  AccessTime,
  ArrowRightAlt,
  SignalCellularAltOutlined,
  SmsOutlined,
  ThumbUpOffAlt,
} from "@mui/icons-material";
import React from "react";

const categories = [
  {
    level: "Beginner",
    labels: [
      "11+ Inspiring Personalities",
      "Veganism and Environment",
      "Education and Career",
      "Relationships",
      "Youth",
      "Life Problems",
      "Women Liberation",
      "People and Society",
    ],
  },
  {
    level: "Advanced",
    labels: [
      "Bhagavad Gita",
      "13+ Upanishads",
      "10+ Gita Collection",
      "5+ Vedant - Scriptures",
      "7+ Bhakti - Scriptures",
      "17+ Bhakti - Saints",
      "28+ Masters and Philosophers",
      "8+ Other Scriptures",
      "6+ Other Streams",
    ],
  },
  {
    level: "Intermediate",
    labels: ["10+ Literature subjects", "Spirituality and Wisdom"],
  },
];

const currentEvents = [
  {
    title:
      "आत्मा न तो शरीर में रहती है, न शरीर का आत्मा से कोई संबंध है || आचार्य प्रशांत, अष्टावक्र गीता (2023)",
    duration: "3 min",
    views: 6716,
    likes: 203,
    comments: 10,
  },
  {
    title: "What is Dharma? - Bhagavad Gita",
    duration: "11 min",
    views: 6421,
    likes: 77,
    comments: 7,
  },
  {
    title:
      "ताज़ा विवाद: क्या सनातन धर्म एक बीमारी है? || आचार्य प्रशांत, बातचीत (2023)",
    duration: "1 min",
    views: 3108,
    likes: 163,
    comments: 8,
  },
  {
    title: "East meets West on climate change || With BARD College (2022)",
    duration: "10 min",
    views: 1711,
    likes: 27,
    comments: 3,
  },
];

const TopicsSection = () => {
  return (
    <section className="main-container flex lg:flex-row flex-col justify-between gap-8">
      <div className="lg:p-8 md:p-5 py-5 px-3 bg-orange-200/10 lg:w-1/2 w-full">
        <h1 className="text-gray-800 font-semibold text-center title">
          On Current Events
        </h1>
        <div className="flex flex-col gap-6 lg:mt-12 mt-6">
          {currentEvents?.map((event, index) => (
            <div
              key={index}
              className="hover:bg-orange-100/30 cursor-pointer lg:p-5 p-3 rounded-md border-b common-transition"
            >
              <p className="lg:text-xl text-lg lg:font-semibold font-medium text-gray-700 mb-3">
                {event?.title}
              </p>
              <div className="flex items-center gap-5 text-gray-500 text-sm">
                <p className="flex items-center gap-1">
                  <AccessTime />
                  {event?.duration}
                </p>
                <p className="flex items-center gap-1">
                  <SignalCellularAltOutlined />
                  {event?.views}
                </p>
                <p className="flex items-center gap-1">
                  <ThumbUpOffAlt />
                  {event?.likes}
                </p>
                <p className="flex items-center gap-1">
                  <SmsOutlined />
                  {event?.comments}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="flex items-center lg:justify-start justify-center mt-8 text-red-700 hover:text-red-600 group common-transition cursor-pointer">
          View All Articles{" "}
          <ArrowRightAlt className="group-hover:-rotate-12 common-transition" />
        </p>
      </div>
      <div className="p-8 bg-orange-200/10 lg:w-1/2 w-full">
        <h1 className="title text-gray-800 font-semibold text-center">
          Topics Covered
        </h1>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 lg:mt-12 mt-6">
          {categories?.map((items, index) => (
            <div key={index}>
              <div className="clip-custom bg-orange-700 text-white shadow-sm text-md rounded-md font-medium pr-7 pl-2 inline-block">
                {items?.level}
              </div>
              {items?.labels?.map((label, i) => (
                <div
                  key={i}
                  className={`${
                    items?.level === "Advanced"
                      ? "border-red-600"
                      : "border-gray-800"
                  } flex flex-col bg-white border  text-sm py-2 mt-2 rounded-lg text-center hover:bg-orange-600 hover:text-white common-transition cursor-pointer`}
                >
                  {label}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopicsSection;
