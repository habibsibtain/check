"use client";
import { Collapse } from "react-collapse";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function Accordion(props) {
  // const [bgColor, setBgColor] = useState("");

  // useEffect(() => {
  //   if (props.isOpen) {
  //     setBgColor("bg-black");
  //   } else {
  //     setBgColor("");
  //   }
  // }, [props.isOpen]);

  return (
    <div className={`w-full text-[#FF0000] mt-4 mb-4`}>
      <div className="flex w-full">
        <div className={`nig bg-[#0B0A09] relative w-full p-6`}>
          <div
            className={`title w-full bg-[#0B0A09] flex justify-between items-center cursor-pointer pl-6 pr-4 pb-4 ${
              props.isOpen
                ? "border-0"
                : "border border-t-0 border-r-0 border-l-0 border-b-[#FF0000]"
            }`}
            onClick={props.toggleAccordion}
          >
            <div className={`flex items-center w-auto`}>
              <p className={`${urbanist.className}  md:text-xl text-[0.75em] `}>
                {props.question}
              </p>
            </div>
            <span
              className={`cursor-pointer flex justify-center items-center text-4xl font-bold`}
            >
              {props.isOpen ? (
                <svg
                  className="w-3 sm:w-4 h-auto"
                  viewBox="0 0 20 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 10.4125C18.0382 10.4125 16.602 9.46242 15.3966 8.50064C13.8411 7.26407 12.484 5.78641 11.4484 4.09228C10.6719 2.82205 9.92664 1.28212 9.92664 0.0429688M9.92664 0.0429688C9.92664 1.28212 9.18132 2.82333 8.4049 4.09228C7.36795 5.78641 6.01083 7.26407 4.45799 8.50064C3.25123 9.46242 1.81246 10.4125 0.853271 10.4125M9.92664 0.0429688L9.92664 5"
                    stroke="#FF0000"
                    strokeWidth="4.1"
                  />
                </svg>
              ) : (
                <svg
                  className="w-3 sm:w-4 h-auto"
                  viewBox="0 0 20 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 2.58747C18.0382 2.58747 16.602 3.53758 15.3966 4.49936C13.8411 5.73593 12.484 7.21359 11.4484 8.90772C10.6719 10.178 9.92664 11.7179 9.92664 12.957M9.92664 12.957C9.92664 11.7179 9.18132 10.1767 8.4049 8.90772C7.36795 7.21359 6.01083 5.73593 4.45799 4.49936C3.25123 3.53758 1.81246 2.58747 0.853271 2.58747M9.92664 12.957L9.92664 8"
                    stroke="#FF0000"
                    strokeWidth="4.1"
                  />
                </svg>
              )}
            </span>
          </div>
          <Collapse isOpened={props.isOpen}>
            <div
              className={` ${urbanist.className} md:text-xl text-[0.75em] accordion-content border border-t-0 border-l-0 border-r-0 border-b-[#FF0000] overflow-hidden transition-max-height duration-400 ease-in-out text-sm sm:text-xl font-normal leading-relaxed pb-4 pr-4 pl-6 pt-0`}
            >
              {props.answer}
            </div>
          </Collapse>
        </div>
      </div>
    </div>
  );
}
