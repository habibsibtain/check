import Image from "next/image";
import React from "react";
import "./MedalTable.css";

interface Team {
  rank: number;
  name: string;
  gold: number;
  silver: number;
}

const MedalTable: React.FC = () => {
  const teams: Team[] = [
    { rank: 1, name: "NIT RKL", gold: 12, silver: 3 },
    { rank: 2, name: "NIT SURATKAL", gold: 10, silver: 2 },
    { rank: 3, name: "NIT TRICHY", gold: 7, silver: 4 },
    { rank: 4, name: "BIT", gold: 4, silver: 0 },
    { rank: 5, name: "IIT BOMBAY", gold: 3, silver: 0 },
    { rank: 6, name: "IIT DELHI", gold: 1, silver: 1 },
    { rank: 7, name: "OUTR", gold: 0, silver: 1 },
    { rank: 9, name: "IIIT", gold: 0, silver: 0 },
    { rank: 10, name: "IIIT", gold: 0, silver: 0 },
    { rank: 11, name: "IIIT", gold: 0, silver: 0 },
    { rank: 12, name: "IIIT", gold: 0, silver: 0 },
    { rank: 13, name: "IIIT", gold: 0, silver: 0 },
    { rank: 14, name: "IIIT", gold: 0, silver: 0 },
    { rank: 15, name: "IIIT", gold: 0, silver: 0 },
    { rank: 16, name: "IIIT", gold: 0, silver: 0 },
    { rank: 17, name: "IIIT", gold: 0, silver: 0 },
    { rank: 18, name: "IIIT", gold: 0, silver: 0 },
  ];

  return (
    <div className="bg-[#0B0A09] text-white font-bunken w-full mt-8 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-center mb-6">
        MEDAL <span className="text-[#FF0000]"> TABLE </span>
      </h1>
      <div className="w-[75%] py-2 bg-[#0B0A09] rounded-lg shadow-lg shadow-[#FF0000] font-Urbanist border border-white h-[500px] overflow-y-auto no-scrollbar">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-700 py-3 px-4 text-lg font-bold">
          <span className="w-1/12 mr-8 md:mr-0 text-center">RANK</span>
          <span className="w-6/12 text-start">NAME</span>
          <span className="w-1/12 flex justify-center">
            <Image src="/images/medal.png" alt="gold" width={35} height={35} />
          </span>
          <span className="w-1/12 flex justify-center">
            <Image src="/images/silver.png" alt="silver" width={35} height={35} />
          </span>
        </div>
        {/* Body */}
        <ol className="">
          {teams.map((team) => (
            <li
              key={team.rank}
              className="flex justify-between text-sm items-center py-3 px-4 hover:bg-gray-800"
            >
              <span className="w-1/12 mr-8 md:mr-0 text-center">{team.rank}</span>
              <span className="w-6/12 text-start">{team.name}</span>
              <span className="w-1/12 text-yellow-400 text-center">{team.gold}</span>
              <span className="w-1/12 text-gray-300 text-center">{team.silver}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default MedalTable;
