"use client";
import React, { useState } from "react";
import Accordion from "./Accordion";
import "./Faq.css";

export default function Faq() {
  const accordionData = [
    {
      serial: "01",
      question: "What is the format of the competition?",
      answer:
        "The format (e.g., knockout, round-robin, or league) depends on the sport and the number of participants/teams. Further details will be shared before the commencement of the event.",
    },
    {
      serial: "02",
      question: "Is accommodation provided for outstation participants?",
      answer:
        "Yes, accommodation is provided in the Halls of Residence. After the offline verification process, you will be sent to the respective accommodation facilities.",
    },
    {
      serial: "03",
      question:
        "Where can we find the confirmation letter required for the registration process?",
      answer:
        "The confirmation letter must be provided by the participant. It should be signed by your college Dean/Principal/Director, confirming that you have received permission to attend Vriddhi 2025.",
    },
    {
      serial: "04",
      question:
        "Can we register on the spot at the venue if we haven't registered online?",
      answer:
        "No, spot registration will not be entertained. You can only register for Vriddhi through the official website",
    },
    {
      serial: "05",
      question: "Can I register for multiple events, or is there a limit?",
      answer:
        "Participants can register for only one event in order to prevent conflicts in scheduling.",
    },
    {
      serial: "06",
      question:
        "What happens in case of bad weather or unexpected circumstances?",
      answer:
        "We are not responsible for unforeseen weather conditions or other unexpected events, and no refunds will be provided in such cases.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="FAQs" className="bg-[#0B0A09] flex justify-between pb-14">
      <div className="bg-[#0B0A09] flex flex-col">
        <div className="w-full h-16"></div>
        <div className="accordion bg-[#0B0A09] w-full flex flex-col">
          <div className="pl-12 pr-6">
            <h1 className="my-4 font-bunken text-white font-bold text-4xl md:text-6xl">
              FAQs
            </h1>
            <div className="h-1 w-20 md:w-32 bg-gradient-to-r from-red-600 to-red-800 rounded-full mx-0 mb-6"></div>
          </div>

          {/* Add the responsive SVG below FAQs */}
          {/* <div className="pl-12 pr-6 mt-4">
            <svg
              className="w-full max-w-[1479px] h-auto"
              viewBox="0 0 1479 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.00139664"
                y1="0.500002"
                x2="1470"
                y2="4.63129"
                stroke="white"
              />
            </svg>
          </div> */}

          {/* <div className="h-16 w-full"></div> */}
          <div className="prob">
            {accordionData.map((data, index) => (
              <Accordion
                key={index}
                question={data.question}
                isOpen={openIndex === index}
                toggleAccordion={() => toggleAccordion(index)}
                answer={data.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
