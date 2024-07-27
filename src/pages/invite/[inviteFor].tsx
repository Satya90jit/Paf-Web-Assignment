import { PublicLayout } from "@/layouts";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

const InvitePage = () => {
  const router = useRouter();
  const [classCus, setClassCus] = useState("");

  const inputRef = useRef(null);

  // console.log("..inputRef", inputRef?.current);

  const handleButtonClick = () => {
    if (inputRef.current) {
      setClassCus("bg-gray-100/40 p-3 border border-green-600");
    }
  };

  const [count, setCount] = useState(0);
  const timerRef: any = useRef(null);

  const startTimer = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  };
  console.log("...timeRef", timerRef?.current);

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  return (
    <PublicLayout
      title="Invite Acharya Prashant"
      navClass="fixed top-0 left-0 z-50 w-screen"
      insideNavClass="hidden"
      innerBarClass="lg:mt-[48px] mt-[68px]"
    >
      <section className="flex flex-col justify-center items-center h-[80vh]">
        <div className="text-5xl font-semibold text-orange-700">
          Use Ref Page
        </div>
        <div className="my-16">
          <input
            ref={inputRef}
            type="text"
            className={`${classCus} p-2`}
            placeholder={`Focus me with the button`}
          />
          <button onClick={handleButtonClick}>Focus the input</button>
        </div>
        <div className="border border-red-600 p-5 space-y-4">
          <p>Timer: {count}</p>
          <div className="flex flex-col space-y-3">
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default InvitePage;
