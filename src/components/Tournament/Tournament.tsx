"use client";
import Image from "next/image";
import React, { useState } from "react";

interface Rule {
  title: string;
  list: string[];
}

interface SportData {
  name: string;
  image: string;
  rules: Rule;
  link?: string;
}

const Tournament = () => {
  const [selectedSport, setSelectedSport] = useState<SportData | null>(null);

  const data: SportData[] = [
    {
      name: "BGMI",
      image: "/tournament-img/BGMI.png",
      rules: {
        title: "GENERAL RULES",
        list: [
          "Players can only participate using amobile phone.",
          "Only the registered ID is allowed for participation; new IDs will not be accepted after registration.",
          "Players cannot change their BGMI name once registered for the tournament.",
          "If authorities request proof from your phone, it must be provided within the given time frame. Failure to do so will result in disqualification from the tournament.",
          "All teams must take a screenshot at the end of each game, showing the kills. The IGL (In-Game Leader) will be responsible for ensuring this task is completed.",
        ],
      },
      link: "https://drive.google.com/file/d/1n5J5Qpcn1afMvwr4PMmyA5D5atvhw93G/view",
    },
    {
      name: "BASKETBALL",
      image: "/tournament-img/Basketball.png",
      rules: {
        title: "RULES FOR OFFENCE ",
        list: [
          "The tournament will be conducted according to the International Basketball Federation Rules as adopted fromtime to time by the Indian Basketball Federation unless otherwise modified.",
          "Teams shall comprise players and coaches. The number of players representing any college shall not bemore than 12 in the case of bothmen and women. A team member is entitled to play when his name has been entered on the score sheet before the start of the game and as long as he has neither been disqualified nor committed five (5) fouls.",
          "During matches if the score is the same after the end of the scheduled time, Basketball Federation Rules will be applied, i.e.the game shall continue with asmany extra periods of 5minutes as is necessary to break the tie.",
          "If a teamis unable to field five players till 15 minutes after the scheduled starting time of the game or if the teamrefuses to play thematch then the match is awarded to the opponentteam.",
          "Each teamshall report atthematch venue 30minutes before the scheduled start of their match.",
          "Every team member should carry a proper college ID. These shall be presented to the event coordinator before the scheduled start of the match.",
        ],
      },
      link: "https://drive.google.com/file/d/1JAB_rTAjQ7hMQNdUuPo20fQaCPdZfQoo/view",
    },
    {
      name: "CHESS",
      image: "/tournament-img/Chess.png",
      rules: {
        title: "GENERAL RULES",
        list: [
          "Chess competition will be played per the “FIDE Laws of Chess”",
          "Tournament rules will be used with the Laws of Chess.",
          "It is a team event, and the team needs 5 players.",
          "A minimum of 4 players are a must for a team.",
          "A maximum of 5 players are allowed in a team, of which 1 player will be a substitute.",
          "In a particular round, 4 players of a team can play.",
          "There will be no separate tournament for girls; instead, only a single tournament open to all.",
          "All team players must belong to the same institute.",
          "The role of a team captain is basically an administrative one during play.",
          "Time Control: Each player will get 60 minutes plus 30 30-second increments for every move from move number one.",
          "IMPORTANT NOTE:Rules & schedules are subject to change in the spirit of the game & the festival. The final decision in all matters rests with the Vriddhi team.",
        ],
      },
      link: "https://drive.google.com/file/d/1ztjeFXe2i86aTvOg0ROjgXVfWsFVdiRn/view",
    },
    {
      name: "TABLE TENNIS",
      image: "/tournament-img/table-tennis.png",
      rules: {
        title: "RULES FOR RACKET",
        list: [
          "The racket may be of any size, shape, or weight but the blade shall be flat and rigid.",
          "A side of the blade used for striking the ball shall be covered with either ordinary pimpled rubber, with pimples outwards having a total thickness including adhesive of not more than 2.0mm, or sandwich rubber, with pimples inwards or outwards, having a total thickness including adhesive of not more than 4.0mm.",
          "The covering material shall extend up to but not beyond the limits of the blade. The blade, any layer within the blade and any layer of covering material or adhesive on a side used for striking the ball shall be continuous and of even thickness.",
          "Before the start of a match and whenever he or she changes his or her racket during a match a player shall show his or her opponent and the umpire the racket he or she is about to use and shall allow them to examine it.",
        ],
      },
      link: "https://drive.google.com/file/d/1uwD20pKOPZz0EeoKbVp7HVZwZrTm30T3/view",
    },
    {
      name: "CRICKET",
      image: "/tournament-img/Cricket.png",
      rules: {
        title: "GENERAL RULES",
        list: [
          "Includes the new rule of a new batsman taking the strike after a batsman has been caught.",
          "Also includes the new rule for a free hit in any kind of no-ball.",
          "All matches will be played with a white leather ball.",
          "The umpire’s decision will be final.",
          "There will be no DRS.",
          "The league matches will be 15 overs in which there will be a 4-over powerplay (In the powerplay, a maximum of two players can be outside the 30-yard circle.), and one bowler can bowl a maximum of 3 overs.",
          "In the final match, 20 overs will be played in which there will be a 6- over powerplay (In the powerplay, a maximum of two players can be outside the 30 yards circle.), and one bowler will be allowed to bowl a maximum of 4 overs.",
          "A maximum of 5 players can stay outside the 30-yard circle during non-powerplay overs.",
          "Maximum of 5 players on the leg side of the batter.",
          "The time limit for each inning is 65 minutes for league matches and 85 minutes for the final game. (There are 10 minutes of drinks break in between the innings).",
        ],
      },
      link: "https://drive.google.com/file/d/1g1hA8QMr465Z1PT6xmVOSOKSmcRRBtv1/view",
    },
    {
      name: "FOOTBALL",
      image: "/tournament-img/Football.png",
      rules: {
        title: "GENERAL RULES",
        list: [
          "Every football game begins with a toss. The two team captains meet in the middle of the pitch with the match referee.",
          "The captain of the winning team (toss winner chooses which goalpost to pursue in the first half).",
          "The venue will be DTS ground with standard dimensions.",
          "Each team consists of 11 players (1 goalkeeper and 10 outfield players), Squad strength- 15(11 playing and 4 substitute).",
          "Substitutions can be made at any time of the match with each team being able to make a maximum of 4 substitutions per side.",
          "In the event of all substitutes being made and a player having to leave the field for injury, the team will be forced to play without a replacement for that player.",
          "Duration of league match – 50 minutes, 2 halves each of 25 minutes.",
          "Duration of final match – 60 minutes, 2 halves each of 30 minutes.",
          "Duration of break after 1st half- 5 minutes.",
          "If the game needs to head to extra time as a result of both teams being level in a match, then 20 minutes will be added in the form of two 10-minute halves after the allotted 50 minutes.",
          "OFFSIDE RULE- Offside can be called when an attacking player is in front of the last defender when the pass is played through to them.",
          "Coach cum player rule is applicable in the whole tournament.",
        ],
      },
      link: "https://drive.google.com/file/d/1LYKx5FashmZi8F6h5PzkEN2dpBCLnn1z/view?usp=sharing",
    },
    {
      name: "YOGA",
      image: "/tournament-img/Yoga.png",
      rules: {
        title: "GENERAL RULES",
        list: [
          "Surya Namaskar ( For Men and Women in Twelve counts/mantras)",
          "Asanas (For Men andWomen): Karna Pidasana, Purna Dhanurasana, Paschimottanasana, Sarvangasana",
          "Shat Karmas/Shuddhi Kriyas (For Girls only): Jal Neti or Sutra Neti/Rubber Neti, Shit KaramKapalbhati(Jal Kapalbhati)",
          "Shat Karmas/Shuddhi Kriyas (For Boys only): Shit KaramKapalbhati(Jal Kapalbhati), Vastra Dhauti(muslin cloth 6 to 7m. length and 8 c.m. in width)",
        ],
      },
      link: "https://drive.google.com/file/d/1o0Kz63oT5szHUbRjk85Wv6munD2nuxzg/view",
    },
    {
      name: "BADMINTON",
      image: "/tournament-img/Badminton.png",
      rules: {
        title: "GENERAL RULES",
        list: [
          "Each team should have 6 (5+1S) members.",
          "Each player can play a maximum of one single and one double.",
          "A match consists of the best of 3 rounds, each consisting of 15 points.",
          "The side winning a round will serve first in the next round.",
          "A player should never touch the net with his racquet or body while playing.",
          "A badminton serve must be hit underarm and below the server's waist height with the racquet shaft pointing downwards.",
          "If the server wins a rally, the server scores a point and then serves again from the alternate service court.",
        ],
      },
      link: "https://drive.google.com/file/d/1eAwzYCTXhjiiwoiMBaFOWpYjHmJKR3rn/view?usp=sharing",
    },
    {
      name: "KHO KHO",
      image: "/tournament-img/Kho-Kho.png",
      rules: {
        title: "GENERAL RULES",
        list: [
          "A team consists of 12 players, and 9 players will take the field.",
          "Each game consists of 2 innings, and each inning consists of 2 turns (chasing and defending turns) of 9 minutes duration for both men and women.",
          "There will be a 3-minute break between each turn and a 6-minute break after each inning.",
          "Referee will call both captains for the spin of the coin. The winner chooses running or defending for both innings.",
          "The chasing team scores one point for each runner who is out.",
          "No Chaser shall leave the Chaser Block or change face after the commencement of a turn, or it will be a foul.",
          "At the start of a turn, the first 3 Defenders enter the Field. Next 3 Runners shall enter the Court through their Entry Zone.",
          "A KHO is given from behind a Chaser by touching the Chaser’s body and saying 'KHO' loudly. Chaser cannot get up without receiving a KHO.",
        ],
      },
      link: "https://drive.google.com/file/d/10nNl6tWRNE5MnTM2HChRx0Y14aYCwepi/view",
    },
    {
      name: "VOLLEYBALL",
      image: "/tournament-img/Volleyball.png",
      rules: {
        title: "GENERAL RULES",
        list: [
          "League matches will be evaluated based on the best of 3 sets of 25 points each.",
          "Semi-finals and finals will be evaluated based on the best of 5 sets of 25 points each.",
          "Matches must be played within a one-hour time limit. If the third match doesn't start by 50 minutes past game time, it will be played to 15 points.",
          "The match will conclude 60 minutes after the scheduled start time, regardless of the score.",
          "The interval between sets should not exceed 2 minutes, during which teams should switch sides.",
          "Each team is allowed 2 timeouts per set, each lasting 30 seconds.",
          "Teams must bring their own volleyballs for practice, as no balls will be provided by the institute.",
          "No extra warm-up time will be provided.",
        ],
      },
      link: "https://drive.google.com/file/d/1FovbX9mAiR171whcmS_R1q6pGMw8WvDu/view?usp=sharing ",
    },
  ];

  const handleOpenModal = (sport: SportData) => {
    setSelectedSport(sport);
    const modal = document.getElementById(
      "tournament_modal"
    ) as HTMLDialogElement;
    modal?.showModal();
  };

  const handleCloseModal = () => {
    const modal = document.getElementById(
      "tournament_modal"
    ) as HTMLDialogElement;
    modal?.close();
  };

  return (
    <div
      id="Tournament"
      className="w-full bg-[#0B0A09] flex flex-col items-center px-6 md:px-16 mb-6 relative md:pt-14"
    >
      {/* Header */}
      <h1 className="font-bunken my-2 text-4xl md:text-6xl text-white pb-4 w-full text-center mt-4 font-semibold">
        TOURNAMENT
      </h1>
      <div className="h-1 w-44 md:w-96 bg-gradient-to-r from-red-600 to-red-800 rounded-full mx-auto md:mx-0 mb-6"></div>

      {/* PUBG */}
      <div
        className="md:my-16 my-8 md:w-[19rem] md:h-[19rem] h-[14rem] w-[14rem] flex items-center justify-center rounded-3xl cursor-pointer transform hover:scale-105 duration-300"
        onClick={() => handleOpenModal(data[0])}
      >
        <Image
          src="/tournament-img/BGMI.png"
          alt="BGMI"
          width={300}
          height={300}
          className="w-full h-full"
        />
      </div>

      {/* Other Sports */}
      <div className="flex flex-col md:grid md:grid-cols-3 md:gap-[5rem] gap-[1rem] px-8 items-center relative">
        {data.map((item, index) =>
          index === 0 ? null : (
            <div
              key={index}
              className={`relative mb-8 md:mb-0 md:w-[14rem] md:h-[14rem] flex items-center justify-center rounded-3xl ${
                data.length % 2 !== 0 && index === data.length - 1
                  ? "col-span-1 col-start-2"
                  : ""
              }`}
            >
              <div onClick={() => handleOpenModal(item)}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={300}
                  className="cursor-pointer transform hover:scale-105 duration-300 w-[14rem] h-[14rem]"
                />
              </div>
            </div>
          )
        )}
      </div>

      {/* Unified Modal for all sports */}
      <dialog id="tournament_modal" className="modal font-bunken">
        <div className="modal-box max-w-5xl bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-2xl border border-red-600/20">
          <div className="relative border-b border-red-600/30 pb-4">
            <h2 className="p-5 font-bold text-3xl text-red-500">
              RULES AND REGULATIONS
            </h2>
            <button
              onClick={handleCloseModal}
              className="absolute right-2 top-2 w-8 h-8 flex items-center justify-center bg-red-600 hover:bg-red-700 text-white rounded-full transition-colors duration-200"
            >
              ✕
            </button>
          </div>

          {selectedSport && (
            <div className="mt-6 space-y-6 p-5">
              <h3 className="font-bold text-2xl text-red-500 tracking-wide">
                {selectedSport.rules.title}
              </h3>
              <ul className="list-disc space-y-4 pl-6 pr-2">
                {selectedSport.rules.list.map((rule, index) => (
                  <li
                    key={index}
                    className="text-gray-200 text-base leading-relaxed"
                  >
                    {rule}
                  </li>
                ))}
              </ul>
              <div className="flex justify-end pt-6 border-t border-red-600/30">
                <a
                  href={selectedSport.link}
                  target="_blank"
                  download={`${selectedSport.name}-Rules.pdf`}
                  className="px-6 py-3 bg-red-600 text-white rounded-lg font-semibold 
                           hover:bg-red-700 transform hover:-translate-y-1 transition-all 
                           duration-200 shadow-lg hover:shadow-red-600/50"
                >
                  Read More
                </a>
              </div>
            </div>
          )}
        </div>
      </dialog>
    </div>
  );
};

export default Tournament;
