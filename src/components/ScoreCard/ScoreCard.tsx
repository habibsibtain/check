import React from "react";
import "./ScoreCard.css";

const ScoreCard = () => {
  const sportsCategories = [
    "SPORTS",
    "CRICKET",
    "FOOTBALL",
    "BASKETBALL",
    "KHO-KHO",
    "KABADDI",
    "HOCKEY",
    "VOLLEYBALL",
    "TABLE-TENNIS",
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

      {/* Cards Section  */}
      <div className="flex gap-4 items-center p-4 overflow-x-auto w-[80%] no-scrollbar rounded-3xl bg-gradient-to-r from-[#FF0000] to-[#000000]">
        {cards.map((card, index) => (
          <div
            key={index}
            className="min-w-[300px] text-nowrap  bg-gradient-to-br from-[#000000] to-[#D9D9D933] bg-opacity-50 backdrop-filter backdrop-blur border-[#D9D9D9] text-white py-4 px-8 rounded-lg shadow-lg flex flex-col items-center"
          >
            <h3 className="text-2xl text-[#FF0000] font-extrabold  ">
              {card.title}
            </h3>
            <div className="mt-4 flex  w-full justify-around font-Urbanist items-center ">
              {/* Team 1 */}
              <div className="flex flex-col items-center">
                <img
                  src="/TeamImages/Samrat.jpg"
                  alt=""
                  className="my-2 w-[3rem] h-[4rem] rounded-full"
                />
                <p className="text-lg">{card.team1}</p>
              </div>
              {/* Diveder */}
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
            <div className="mt-4 text-[0.7rem] gap-3 font-mono flex items-center" >
              <span>DATE-23RD SEPT</span>
              <span>TIME-6.30 PM</span>
              <span>LOCATION-STS</span>
            </div>
          </div>
        ))}
      </div>

        {/* Score Card Section */}
        <div className="flex gap-4 items-center p-4 overflow-x-auto w-[80%] no-scrollbar rounded-3xl bg-gradient-to-r from-[#FF0000] to-[#000000] mt-12 ">
        {cards.map((card, index) => (
          <div
            key={index}
            className="min-w-[300px] text-nowrap  bg-gradient-to-br from-[#000000] to-[#D9D9D933] bg-opacity-50 backdrop-filter backdrop-blur border-[#D9D9D9] text-white/40 py-4 px-8 rounded-lg shadow-lg flex flex-col items-center "
          >
            <h3 className="text-2xl  font-extrabold  ">
              {card.title}
            </h3>
            <div className="mt-4 flex  w-full justify-around font-Urbanist items-center ">
              {/* Team 1 */}
              <div className="flex flex-col items-center">
                <img
                  src="/TeamImages/Samrat.jpg"
                  alt=""
                  className="my-2 w-[3rem] h-[4rem] rounded-full grayscale"
                />
                <p className="text-lg">{card.team1}</p>
              </div>
              {/* Diveder */}
                <span className="h-[6rem] w-[0.2rem] grayscale bg-[#FF0000]"></span>
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
            <div className=" mt-1  font-mono flex flex-col items-center" >
              <span className="text-5xl">3-2</span>
              <span className="text-sm text-[#FF0000] text-semibold">NIT RKL WON</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScoreCard;
