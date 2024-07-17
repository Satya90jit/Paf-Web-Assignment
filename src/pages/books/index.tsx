import { PublicLayout } from "@/layouts";
import React, { useEffect, useState } from "react";

const Books = () => {
  const [data, setData] = useState();
  useEffect(() => {
    // Create an AbortController instance to cancel the fetch request if needed
    const controller = new AbortController();

    // Start a fetch request with the controller's signal
    fetch(
      "https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3",
      { signal: controller.signal }
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data); // Update state with fetched data
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("Fetch aborted"); // Handle fetch abortion
        } else {
          console.error("Fetch error:", error); // Handle other errors
        }
      });

    const time = setInterval(() => {
      fetch(
        "https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3",
        { signal: controller.signal }
      )
        .then((response) => response.json())
        .then((data) => {
          setData(data); // Update state with fetched data
        })
        .catch((error) => {
          if (error.name === "AbortError") {
            console.log("Fetch aborted"); // Handle fetch abortion
          } else {
            console.error("Fetch error:", error); // Handle other errors
          }
        });
    }, 1000);

    // Return the cleanup function
    return () => {
      clearInterval(time);
      // This cleanup function runs when the component unmounts
      // or before the effect runs again if dependencies change
      controller.abort(); // Abort the fetch request to clean up
    };
  }, []); // Empty dependency array means this effect runs only once after the initial render

  return (
    <PublicLayout
      title="Books | Acharya Prashant"
      navClass="fixed top-0 left-0 z-50 w-screen"
      insideNavClass="hidden"
      innerBarClass="lg:mt-[48px] mt-[68px]"
    >
      <section className="flex flex-col justify-center items-center h-[80vh]">
        <div className="text-5xl font-semibold text-orange-700">Books Page</div>
        <p className="text-2xl text-gray-600 font-semibold mt-4">
          UNDER MAINTENANCE
        </p>
      </section>
    </PublicLayout>
  );
};

export default Books;
