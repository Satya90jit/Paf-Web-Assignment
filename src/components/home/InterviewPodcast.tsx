import { ArrowRightAlt, PlayCircleOutline } from "@mui/icons-material";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { CustomNextArrow, CustomPrevArrow } from "../core";

const youtubeVideos = [
  {
    id: "1",
    title: "The Ranveer Show",
    embedUrl: "https://www.youtube.com/embed/t8e3_eaf_js?si=wsUFEOElkIj8CNVb",
  },
  {
    id: "2",
    title: "The Lallantop",
    embedUrl: "https://www.youtube.com/embed/RkfFPM3MUDg?si=zT4_0sDhwuN7dC8y",
  },
  {
    id: "3",
    title: "Amar Ujala - Mukti Book Launch",
    embedUrl: "https://www.youtube.com/embed/UsmGmVgJaVw?si=RUvU7JTZGDOxf27B",
  },
  {
    id: "4",
    title: "With PETA CEO",
    embedUrl: "https://www.youtube.com/embed/dOozKU-dUXc?si=y1v8POO7lcr4NttW",
  },
  {
    id: "5",
    title: "With Meneka Gandhi",
    embedUrl: "https://www.youtube.com/embed/Aj1bGL-w0ro?si=jZNw-gIQ5suLbz_F",
  },
  {
    id: "6",
    title: "Dhruv Rathee With AP",
    embedUrl: "https://www.youtube.com/embed/atKEM5ObmRE?si=adQ_WPGHc3F9Og8u",
  },
];

const InterviewPodcast = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    arrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrow: true,
        },
      },
    ],
  };

  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const handleVideoPlay = (id: string) => {
    setPlayingVideo(id);
  };

  return (
    <section className="main-container bg-orange-100/40 py-20 my-24 rounded-sm">
      <div className="space-y-7">
        <h1 className="text-5xl font-bold text-gray-900">
          Interviews and Podcasts
        </h1>
        <button className="bg-orange-600 rounded-3xl text-white text-xl font-semibold px-8 py-2">
          Invite
        </button>
        <hr className="border-t-2 border-dotted border-red-700" />
      </div>
      <div className="flex justify-between items-center my-8">
        <h2 className="text-xl font-medium text-gray-800">
          Videos from past Interviews and Podcasts
        </h2>
        <p className="text-red-600 group cursor-pointer common-transition hover:text-red-500">
          See all videos{" "}
          <ArrowRightAlt className="group-hover:-rotate-12 common-transition" />
        </p>
      </div>
      <div className="w-full md:p-0 p-3">
        <Slider {...sliderSettings}>
          {youtubeVideos?.map((item: any, index: number) => {
            return (
              <div
                key={item?.id}
                onClick={() => handleVideoPlay(item?.id)}
                className="p-4 group rounded-lg space-y-2 cursor-pointer border hover:bg-orange-100/50 hover:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] common-transition"
              >
                <div className="h-full w-full relative">
                  {playingVideo === item?.id && (
                    <div className="absolute bottom-0 left-0 h-[5rem] w-full bg-gradient-to-t from-gray-800 to-transparent rounded-md"></div>
                  )}
                  <iframe
                    key={item?.id}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    src={item?.embedUrl}
                    className="rounded-lg common-transition h-[12rem] w-full z-40"
                  />
                  {playingVideo === item?.id && (
                    <span className="absolute bottom-3 left-3 block text-white">
                      <PlayCircleOutline className="h-14 w-14" />
                    </span>
                  )}
                  {playingVideo === item?.id && (
                    <img
                      src="/ic_apsignature_hindi.png"
                      className="absolute bottom-3 right-3 w-12"
                    />
                  )}
                </div>
                <h4 className="text-gray-700 font-semibold hover:text-orange-700">
                  {item?.title}
                </h4>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default InterviewPodcast;
