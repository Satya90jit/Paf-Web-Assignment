import { useAppContext } from "@/contexts";
import { useSWRAPI } from "@/hooks";
import { RootState } from "@/store";
import { ExpandMore } from "@mui/icons-material";
import { Collapse, Typography } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";

type FaqType = {
  question: string;
  answer: string;
};

const FaqSection = () => {
  //! use of context API
  // const { selectedLanguage } = useAppContext();
  //! use of redux toolkit
  const selectedLanguage = useSelector(
    (state: RootState) => state.language.selectedLanguage
  );
  const { data } = useSWRAPI(
    `https://api.acharyaprashant.org/v2/legacy/courses/faqs?language=${
      selectedLanguage == "English" ? "english" : "hindi"
    }`
  );

  return (
    <section className="w-full flex lg:flex-row flex-col gap-8 bg-orange-100/10 lg:p-12 md:p-6 p-2">
      <div className="lg:w-[30%] w-full">
        <h2 className="text-xl font-medium pb-2 text-start">FAQs</h2>
        <p className="text-gray-700 text-md">
          <span>Can't find the answer you're looking for?</span>
          <br />
          <span>Reach out to our </span>
          <span className="text-orange-400 cursor-pointer">support</span> team.
        </p>
      </div>
      <ul className="lg:w-[70%] w-full flex flex-col">
        {data?.data?.map((faq: FaqType, index: number) => (
          <Accordion key={index} idx={index + 1} faq={faq} />
        ))}
      </ul>
    </section>
  );
};
export default FaqSection;

const Accordion = ({ idx, faq }: { idx: number; faq: FaqType }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="bg-white my-2 shadow-sm max-h-[20rem] overflow-y-scroll no-scrollbar">
      <h2
        onClick={handleClick}
        className="flex flex-row justify-between items-center font-medium p-3 cursor-pointer transition-colors duration-300 ease-in-out hover:bg-gray-100/50"
      >
        <p className="flex gap-2">
          <span className="text-gray-700">{idx}.</span>
          <span className="text-md">{faq?.question}</span>
        </p>
        <ExpandMore
          className={`text-orange-700 h-6 w-6 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </h2>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <div className="border-l-2 border-orange-600 overflow-hidden pb-2">
          <Typography className="px-3 pt-3 pb-1 text-gray-900 text-sm">
            {faq?.answer}
          </Typography>
        </div>
      </Collapse>
    </li>
  );
};
