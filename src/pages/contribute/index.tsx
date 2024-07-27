import { CalculationMemo } from "@/components/core";
import { PublicLayout } from "@/layouts";
import { memo, useCallback, useRef, useState } from "react";

const ContributePage = ({}) => {
  const [input1, SetInput1] = useState("");
  const [input2, SetInput2] = useState("");

  const [count, setCount] = useState(0);

  // const increment = useCallback(() => {
  //   setCount(count + 1);
  // }, [count]);

  // Use the functional form of setState
  // Functional Update: The increment function now uses the functional form of setState. This form takes the previous state and returns the new state.
  // This eliminates the need to include count in the dependency array of useCallback.
  // here the increment stop recreated .
  //? useCallback returns a memoized version of the callback function that only changes if one of its dependencies has changed

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  // The useCallback hook is used to memoize functions in React,
  // ensuring that the function reference remains stable across re-renders unless its dependencies change.
  // This can prevent unnecessary re-renders of child components that rely on these functions as props

  //! useEffect: Runs a side effect (like data fetching, subscriptions, or manually changing the DOM) after render and can clean up after itself.

  console.log("parent........");
  return (
    <PublicLayout
      title="Contribute | Acharya Prashant"
      navClass="fixed top-0 left-0 z-50 w-screen"
      insideNavClass="hidden"
      innerBarClass="lg:mt-[48px] mt-[68px]"
    >
      <section className="flex flex-col justify-center items-center h-[80vh]">
        <div className="text-5xl font-semibold text-orange-700">
          Contribution Page
        </div>
        {/* <input
          className="border px-4 py-2"
          placeholder="Enter...for .1"
          onChange={(e) => SetInput1(e.target.value)}
        />
        <input
          className="border px-4 py-2"
          placeholder="Enter...for .2"
          onChange={(e) => SetInput2(e.target.value)}
        /> */}
        {/* <CalculationMemo num={7} show="this is showing" /> */}
        <ChildComponent increment={increment} />
        <p>Count: {count}</p>
        {/* <MemorizedComponent input1={input1} /> */}
      </section>
    </PublicLayout>
  );
};
export default ContributePage;

const ChildCom = ({ input1 }: any) => {
  console.log("running....child");
  return (
    <section>
      <div>This is the child component {input1}</div>
    </section>
  );
};

const MemorizedComponent = memo(ChildCom);

// When using memo to wrap a component, (HOC)
// it performs a shallow comparison of the props by default.
//  This means that memo will re-render the component if any of the props have changed in value
//? Custom Comparison Function ( we can also implement that)

const ChildComponent = memo(({ increment }: any) => {
  console.log("Rendering ChildComponent");
  return (
    <button
      className="py-2 px-4 my-4 bg-gray-100 rounded-lg"
      onClick={increment}
    >
      Increment
    </button>
  );
});
