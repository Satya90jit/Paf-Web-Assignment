import { useEffect, useState } from "react";

// Custom hook to detect screen size
const useWindowSize = (): [number, number] => {
  const isClient = typeof window === "object";

  const getSize = () => {
    return [
      isClient ? window.innerWidth : 0,
      isClient ? window.innerHeight : 0,
    ] as [number, number];
  };

  const [size, setSize] = useState<[number, number]>(getSize);

  useEffect(() => {
    if (!isClient) {
      return;
    }

    const handleResize = () => {
      setSize(getSize());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isClient]);

  return size;
};

export default useWindowSize;
