import { ICourseSeriesDetails } from "@/types/courseSeriesDetails";
import { constructImageUrl } from "@/utils";
import { ArrowRightAlt } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const RelatedContent = ({
  relatedContents,
}: {
  relatedContents: ICourseSeriesDetails[];
}) => {
  const router = useRouter();
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <section className="w-full bg-orange-100/10">
      <h1 className="text-xl lg:text-2xl text-start font-medium py-5">
        Related<span className=" text-orange-600"> Course Series :</span>
      </h1>
      <div className="w-full md:p-0 p-3">
        <Slider {...sliderSettings}>
          {relatedContents?.map((item: ICourseSeriesDetails) => {
            const imageUrl = constructImageUrl(item?.thumbnail);
            return (
              <div
                key={item?.id}
                onClick={() => {
                  router?.push(`/video-modules/series/${item?.id}`);
                }}
                className="p-4 group rounded-lg space-y-2 cursor-pointer border hover:bg-orange-100/50 hover:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] common-transition"
              >
                <div className="h-full w-full relative">
                  <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-gray-800 to-transparent rounded-md"></div>
                  <h4 className="whitespace-nowrap absolute bottom-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-semibold flex flex-col items-center">
                    Video Series ({item?.coursesCount})
                    <ArrowRightAlt className="w-0 group-hover:w-full common-transition" />
                  </h4>
                  <img
                    src={imageUrl}
                    className="rounded-lg common-transition"
                  />
                  <img
                    src="/ic_apsignature_hindi.png"
                    className="absolute bottom-3 right-3 w-12"
                  />
                </div>
                <h4 className="text-gray-700 font-semibold hover:text-orange-700">
                  {item?.title}
                </h4>
                <p className="text-gray-600 text-md">{item?.subtitle}</p>
                <span className="bg-orange-100/50 px-3 text-orange-800 rounded-md inline-block">
                  {item?.language}
                </span>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default RelatedContent;
