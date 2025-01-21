"use client";
import React, { useEffect, useRef, useState } from "react";
import "./ScoreCard.css";

const ScoreCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const sportsCategories = [
    "CRICKET",
    "FOOTBALL",
    "BASKETBALL",
    "KHO-KHO",
    "CHESS",
    "VOLLEYBALL",
    "TABLE-TENNIS",
    "YOGA",
    "BADMINTON",
  ];
  const cards = [
    { title: "FOOTBALL", team1: "NIT RKL", team2: "NIT SUR", score: "3 - 2" },
    { title: "CRICKET", team1: "NIT RKL", team2: "NIT SUR", score: "3 - 2" },
    { title: "BASKETBALL", team1: "NIT RKL", team2: "NIT SUR", score: "3 - 2" },
    { title: "KHO-KHO", team1: "NIT RKL", team2: "NIT SUR", score: "3 - 2" },
    { title: "KABADDI", team1: "NIT RKL", team2: "NIT SUR", score: "3 - 2" },
    { title: "HOCKEY", team1: "NIT RKL", team2: "NIT SUR", score: "3 - 2" },
    { title: "VOLLEYBALL", team1: "NIT RKL", team2: "NIT SUR", score: "3 - 2" },
    {
      title: "TABLE-TENNIS",
      team1: "NIT RKL",
      team2: "NIT SUR",
      score: "3 - 2",
    },
  ];

  // Hum ek  parent div mai two card fetch kar rhe hai uske liye hai
  const chunkedCards = [];
  for (let i = 0; i < cards.length; i += 2) {
    chunkedCards.push(cards.slice(i, i + 2));
  }

   const scrollRef1 = useRef(null);
   const scrollRef2 = useRef(null);
 
   useEffect(() => {
     // Function to handle scrolling for a specific carousel
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     const handleScroll = (scrollRef:any) => {
       if (scrollRef.current) {
         const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
         const nextScroll = scrollLeft + clientWidth;
 
         scrollRef.current.scrollTo({
           left: nextScroll >= scrollWidth ? 0 : nextScroll,
           behavior: "smooth",
         });
       }
     };
 
     const interval1 = setInterval(() => handleScroll(scrollRef1), 5000);
     const interval2 = setInterval(() => handleScroll(scrollRef2), 5000);
 
     return () => {
       clearInterval(interval1);
       clearInterval(interval2);
     }; 
   }, []);
 
   useEffect(() => {
     const interval = setInterval(() => {
       setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
     }, 5000);
     return () => clearInterval(interval);
   }, [cards.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div className="w-full bg-[#0B0A09] flex flex-col items-center px-6 md:px-16 mb-6 relative md:pt-14 font-bunken">
      {/* Sports Categories */}
      <div className="flex gap-4 mb-6 w-[80%] p-4 items-center overflow-x-scroll no-scrollbar">
        {sportsCategories.map((category, index) => (
          <button
            key={index}
            className={`w-full py-2  px-4 font-mono  rounded-full text-nowrap outline-none text-sm ${
              category === "CRICKET"
                ? "bg-[#FF0000] text-white"
                : "bg-gray-200 text-black"
            } hover:bg-[#FF0000] hover:text-white`}
          >
            {category}
          </button>
        ))}
      </div>

      <h1 className="text-4xl">Upcoming Events</h1>

      {/* Cards Section  */}
      <div className="w-full bg-[#0B0A09] flex flex-col items-center px-6 md:px-16 mb-6 relative md:pt-14 font-bunken">
        {/* Grouped cards */}
        <div
          className="flex gap-6 overflow-x-auto p-4 w-[80%] no-scrollbar rounded-3xl bg-gradient-to-r from-[#FF0000] to-[#000000]"
          ref={scrollRef1}
        >
          {chunkedCards.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className="flex gap-4 min-w-full justify-around items-center"
            >
              {group.map((card, cardIndex) => (
                <div
                  key={cardIndex}
                  className="min-w-[300px] text-nowrap text-white py-4 px-8 rounded-lg shadow-lg flex flex-col items-center bg-gradient-to-br from-[#000000] to-[#D9D9D933]"
                >
                  <h3 className="text-2xl text-[#FF0000] font-extrabold">
                    {card.title}
                  </h3>
                  <div className="mt-4 flex w-full justify-around font-Urbanist items-center">
                    {/* Team 1 */}
                    <div className="flex flex-col items-center">
                      <img
                        src="/TeamImages/Samrat.jpg"
                        alt=""
                        className="my-2 w-[3rem] h-[4rem] rounded-full"
                      />
                      <p className="text-lg">{card.team1}</p>
                    </div>
                    {/* Divider */}
                    <span className="h-[6rem] w-[0.2rem] bg-[#FF0000]"></span>
                    {/* Team 2 */}
                    <div className="flex flex-col items-center">
                      <img
                        src="/TeamImages/Samrat.jpg"
                        alt=""
                        className="my-2 w-[3rem] h-[4rem] rounded-full"
                      />
                      <p className="text-lg">{card.team2}</p>
                    </div>
                  </div>
                  <div className="mt-4 text-[0.7rem] gap-3 font-mono flex items-center">
                    <span>DATE-23RD SEPT</span>
                    <span>TIME-6.30 PM</span>
                    <span>LOCATION-STS</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

        <h1 className="text-4xl mt-4 ">Previous Events</h1>

      {/* Score Card Section */}
      <div className="w-full bg-[#0B0A09] flex flex-col items-center px-6 md:px-16 mb-6 relative md:pt-14 font-bunken">
        {/* Grouped cards */}
        <div
          className="flex gap-6 overflow-x-auto p-4 w-[80%] no-scrollbar rounded-3xl bg-gradient-to-r from-[#FF0000] to-[#000000]"
          ref={scrollRef2}
        >
          {chunkedCards.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className="flex gap-4 min-w-full justify-around items-center"
            >
              {group.map((card, cardIndex) => (
                <div
                  key={cardIndex}
                  className="min-w-[300px] text-nowrap text-white/40 py-4 px-8 rounded-lg shadow-lg flex flex-col items-center bg-gradient-to-br from-[#000000] to-[#D9D9D933]"
                >
                  <h3 className="text-2xl font-extrabold">{card.title}</h3>
                  <div className="mt-4 flex w-full justify-around font-Urbanist items-center">
                    {/* Team 1 */}
                    <div className="flex flex-col items-center">
                      <img
                        src="/TeamImages/Samrat.jpg"
                        alt=""
                        className="my-2 w-[3rem] h-[4rem] rounded-full grayscale"
                      />
                      <p className="text-lg">{card.team1}</p>
                    </div>
                    {/* Divider */}
                    <span className="h-[6rem] w-[0.2rem] bg-[#FF0000] grayscale"></span>
                    {/* Team 2 */}
                    <div className="flex flex-col items-center">
                      <img
                        src="/TeamImages/Samrat.jpg"
                        alt=""
                        className="my-2 w-[3rem] h-[4rem] rounded-full grayscale"
                      />
                      <p className="text-lg">{card.team2}</p>
                    </div>
                  </div>
                  <div className=" mt-1  font-mono flex flex-col items-center">
                    <span className="text-5xl">{card.score} </span>
                    <span className="text-sm text-[#FF0000] text-semibold">
                      NIT RKL WON
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
