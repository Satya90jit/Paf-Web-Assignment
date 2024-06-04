import { ICONS } from "@/assets";
import { useWindowSize } from "@/hooks";
import { ICourseSeries } from "@/types/courseSeries";
import { ICourseSeriesDetails } from "@/types/courseSeriesDetails";
import { constructImageUrl, formatDuration } from "@/utils";
import { ShareComponent } from "../core";

const VideoSeriesCard = ({
  courseDetails,
  courses,
  isValidating,
}: {
  courseDetails: ICourseSeriesDetails;
  courses: ICourseSeries[];
  isValidating: Boolean;
}) => {
  const imageUrl = constructImageUrl(courseDetails?.thumbnail);

  return (
    <section>
      <div className="flex gap-1 py-6">
        <p className="text-gray-600 ">Home</p>
        <ICONS.DoubleArrowRight />
        <p className="text-gray-900 font-medium">{courseDetails?.title}</p>
      </div>
      <h4 className="text-gray-900 font-semibold text-2xl pb-4">
        {courseDetails?.title}
      </h4>
      <aside className="flex lg:flex-row flex-col gap-8 w-full pb-8">
        {isValidating ? (
          <div className="flex items-center justify-center h-[15rem] lg:h-[23rem] md:h-[20rem] w-full lg:w-[45%]">
            <div className="flex space-x-2 animate-pulse">
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            </div>
          </div>
        ) : (
          <div className="lg:h-[23rem] md:h-[20rem] h-[15rem] w-full lg:w-[45%] relative">
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-gray-800 to-transparent rounded-md"></div>
            <img
              src={imageUrl && imageUrl}
              alt={courseDetails?.thumbnail?.key}
              className="h-full w-full rounded-md object-cover"
            />
            <img
              src="/ic_apsignature_hindi.png"
              className="absolute bottom-3 right-3 w-20"
            />
          </div>
        )}
        <div className="space-y-3 lg:w-[55%] w-full">
          <h2 className="text-gray-900 font-semibold text-xl">
            {courseDetails?.subtitle}
          </h2>
          <p className="text-gray-600 text-lg">{courseDetails?.description}</p>
        </div>
      </aside>
      <div className="lg:pb-16 md:pb-12 pb-8">
        <ShareComponent />
      </div>
      <h4 className="text-gray-800 text-xl font-medium pb-2">
        Video Series ({courseDetails?.coursesCount})
      </h4>
      <hr />
      <aside className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-14 md:gap-10 gap-8">
        {courses?.map((item: ICourseSeries, index: number) => (
          <SeriesCard key={item?.id} item={item} />
        ))}
      </aside>
    </section>
  );
};

export default VideoSeriesCard;

const SeriesCard = ({ item }: { item: ICourseSeries }) => {
  const [width] = useWindowSize();
  return (
    <section
      key={item?.id}
      className={`hover:bg-orange-100/20 rounded-lg border-b ${
        width < 640 ? "last:border-none" : ""
      } p-4 border-gray-500 space-y-2 cursor-pointer`}
    >
      <div className="clip-custom bg-orange-700/50 text-white shadow-sm text-md rounded-md font-medium pr-4 pl-2 inline-block">
        भाग {item?.series?.order?.seq}
      </div>
      <h1 className="text-gray-700 font-semibold">{item?.title}</h1>
      <h4 className="text-gray-600">{item?.subtitle}</h4>
      <p className="text-gray-600">{formatDuration(item?.courseHours)}</p>
      <p className="text-gray-600">
        Contribution : <span className="text-gray-800">₹{item?.amount}</span>{" "}
        <span className="line-through text-gray-800">
          ₹{item?.originalAmount}
        </span>
      </p>
      <p className="bg-orange-100/80 text-orange-700 capitalize text-sm rounded-lg px-2 inline-block">
        {item?.language}
      </p>
      <div className="text-orange-600 flex gap-3 text-sm">
        <p className="uppercase border-r border-gray-300 pr-3 cursor-pointer hover:text-orange-800 common-transition">
          ADD TO CART
        </p>
        <p className="uppercase hover:text-orange-800 common-transition">
          ENROL
        </p>
      </div>
    </section>
  );
};
