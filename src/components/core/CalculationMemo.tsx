import React, { memo, useMemo } from "react";

const ExpensiveCalculationComponent = ({ num, show }: any) => {
  const computeExpensiveValue = (num: any) => {
    console.log("Calculating...");
    return num * 2;
  };

  const memoizedValue = useMemo(() => computeExpensiveValue(num), [num]); // it prevents the unnecessary call of function
  // const memoizedValue = computeExpensiveValue(num);
  //you use useMemo here or you can use this there where you call this function.
  // like some functions are declare in the utils folder not in the components that case you can use useMemo where you call the functions.
  console.log(".....calculating component rendering...>>");
  return (
    <section>
      <p>{memoizedValue}</p>
      <p>{show}</p>
    </section>
  );
};

const MemorizeExpensiveCalculationComponent = memo(
  ExpensiveCalculationComponent
);

export default MemorizeExpensiveCalculationComponent;
