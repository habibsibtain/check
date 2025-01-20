import React from "react";
import Image from "next/image";
import "./Teams.css";
import { teamData } from "../../Data/TeamData";
const Teams = () => {
  return (
    <>
      {/* <div className="w-full">
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="text-left pb-4 border-b-2 text-4xl sm:text-4xl md:text-6xl font-bunken">
            <p>OUR <span className='text-[#FF0000]'>TEAM</span></p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
            {teamData.map((team, index) => (
                <div key={index} className="w-full overflow-hidden flex flex-col justify-center items-center pt-16 pl-12 pr-12">
                    <div className='box'>
                        <Image className="object-center object-cover h-auto w-full" src={team.image} alt="photo"
                        width={500}
                        height={500}
                        layout='fixed'
                        />
                    </div>
                    <div className="text-center py-8 sm:py-6 w-full font-Urbanist">
                        <p className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-white font-bold mb-[2px] tracking-[5.25px] text-center">{team.name}</p>
                        <p className="text-xl sm:text-2xl text-white text-center">{team.designation}</p>
                        <div className='mt-4 flex items-center justify-center md:space-x-6 space-x-4'>
                            <span><Image src={"/images/Call.png"} alt='call-icon' width={35} height={35} /></span>
                            <p className="text-lg sm:text-xl md:text-2xl text-white md:tracking-[5.25px] tracking-[1.25px]">{team.phone}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
</div> */}

      <div
        id="Our Team"
        className="max-w-screen-xl px-4 mx-auto md:px-8 py-12 md:pt-28"
      >
        <div className="pl-12 pr-6 relative">
          <h1 className="font-bunk text-4xl md:text-6xl text-white w-full my-4 font-bold tracking-wider">
            OUR <span className="text-[#FF0000] animate-pulse">TEAM</span>
          </h1>
          <div className="h-1 w-40 md:w-80 bg-gradient-to-r from-red-600 to-red-800 rounded-full mx-auto md:mx-0 mb-6"></div>
        </div>

        <div className="grid gap-4 md:gap-28 md:grid-cols-2 ">
          {teamData.map((team, index) => (
            <div className="p-8 shadow " key={index}>
              <div className="h-48 mb-2 overflow-hidden shadow-lg md:h-80 box ">
                {/* <img src={team.image} alt="Image" class="object-cover object-center w-full h-full" /> */}
                <Image
                  className="object-cover object-center w-full h-full"
                  src={team.image}
                  alt="photo"
                  width={500}
                  height={500}
                  layout="fixed"
                />
              </div>

              <div className="flex flex-col items-center justify-center w-full">
                <div className="text-xl sm:text-xl md:text-2xl lg:text-2xl text-white font-bold mb-[2px] tracking-[1.25px] md:tracking-[3.25px] text-center overflow-hidden mt-2">
                  {team.name}
                </div>
                <p className="text-lg sm:text-lg text-white text-center md:mb-4">
                  {team.designation}
                </p>
                <div className="mt-4 flex items-center justify-between md:space-x-2 space-x-2 ">
                  <span>
                    <Image
                      src={"/images/Call.png"}
                      alt="call-icon"
                      width={25}
                      height={25}
                    />
                  </span>
                  <a
                    href={`tel:+91 ${team.phone}`}
                    className="text-md sm:text-lg md:text-xl text-white md:tracking-[1.75px] tracking-[1.25px]"
                  >
                    {team.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Teams;
