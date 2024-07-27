const LazyComponent = () => {
  console.log("LazyComponent loaded...........  ");
  fetch(
    "https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3"
  )
    .then((response) => response.json())
    .then((data) => {})
    .catch((error) => {
      if (error.name === "AbortError") {
        console.log("Fetch aborted"); // Handle fetch abortion
      } else {
        console.error("Fetch error:", error); // Handle other errors
      }
    });

  return (
    <div>
      <h2>I am a lazy-loaded component!</h2>
    </div>
  );
};

export default LazyComponent;
