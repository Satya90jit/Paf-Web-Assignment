import { PublicLayout } from "@/layouts";
import React, { memo, useState } from "react";

const TopicDetails = () => {
  const [data, setData] = useState({ value: "Hello" });
  return (
    <PublicLayout title="Articles | Acharya Prashant">
      <section className="flex flex-col justify-center items-center h-[80vh]">
        <div className="text-5xl font-semibold text-orange-700">
          Pure component
        </div>
        <button onClick={() => setData({ value: "Hello" })}>Update</button>
        <ChildComponent data={data} />
      </section>
    </PublicLayout>
  );
};

export default TopicDetails;

const ChildComponent = memo(({ data }: any) => {
  console.log("Rendering ChildComponent...............>");
  return (
    <div>
      <p>{data.value}</p>
    </div>
  );
});

//? Use Cases:
//  Use pure components when you have components that often receive the same props and state values, and you want to avoid unnecessary re-renders.

//? In this example, even if the button click updates the data state to the same value,
//? the ChildComponent will re-render because the new object reference is different from the previous one.

//? Shallow Comparison
// A shallow comparison checks:

// Primitive values (e.g., strings, numbers) by value.
// Objects and arrays by reference (not by the values inside them).
