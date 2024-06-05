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

  courses?.forEach((item) => {
    console.log("each--->", item?.id);
  }); // its only modify the original array , dose not return anything

  const a = courses?.map((item) => item?.title); // its give a new array , with modified value
  console.log("map--aaa->", a);

  // now try the ab with let const and var
  // if let then we have to declare it outside like let ab , same as for const like , const ab
  {
    //  here we can declare with let and const cant be access to jsx .as let and const are block scope
    var ab = courses?.map((item: ICourseSeries) => (
      <SeriesCard key={item?.id} item={item} />
    ));
  }
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
      {/* we can also  use in this way the map,  its return the new array with modification */}
      <aside className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-14 md:gap-10 gap-8">
        {ab}
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

//!Notes
// ForEach is more commonly used when you need to iterate over an array and perform a side effect for each element,
//  without needing to create a new array. Some common use cases for forEach include:

//? 1. Logging or Printing:
// If you need to log each element in an array or print them to the console, forEach is a straightforward choice.

// const numbers = [1, 2, 3, 4];
// numbers.forEach((number) => console.log(number));

//? 2. Modifying Existing Data:
//  When you want to update elements in an existing array without creating a new array, forEach can be useful.

//? 3. Iterating Over DOM Elements:
//  When working with DOM elements directly, forEach can be used to iterate over a NodeList or an array-like object returned by querySelectorA

// const elements = document.querySelectorAll(".a");
// elements.forEach((element) => {
//   // Do something with each element
// });

//? 4. Asynchronous Operations:
// If you need to perform asynchronous operations for each element in an array, forEach can be used, but you need to be careful with handling the asynchronous nature of the operations.

// const urls = ["url1", "url2", "url3"];
// urls.forEach((url) => {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error));
// });
