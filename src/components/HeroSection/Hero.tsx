"use client";
import Image from "next/image";
import Navbar from "../Navbar/navbar";
import { useState } from "react";
import RegistrationForm from "../form";
const Hero = () => {
  const [formopen, setformopen] = useState(false);
  const toggleForm = () => {
    setformopen(!formopen);
  };
  return (
    <>
      <section className="bg-[#0B0A09] xl:h-[46rem] h-[36rem] flex flex-col overflow-x-hidden overflow-y-hidden relative top-0">
        <Navbar />
        {/* Hero Section */}
        <div className="hidden md:flex md:justify-evenly">
          <div className="rightside flex flex-col gap-16 xl:w-[27%] 2xl:w-[30%] w-[25%] h-[80%] items-start 2xl:items-end justify-center relative -mr-16">
            <Image
              src={`https://res.cloudinary.com/dgtdkqfsx/image/upload/v1734436803/2025_zc4rpp.png`}
              alt="Hero Image"
              width={200}
              height={200}
              className="xl:w-[300px] xl:h-[100px]"
            />
            <h1 className="text-white text-3xl font-bold font-bunk tracking-tight md:text-[6rem] xl:text-[10rem]">
              VRI
            </h1>
          </div>
          <Image
            src={`https://res.cloudinary.com/dgtdkqfsx/image/upload/v1734423142/vDOUax0qReCTveZAgoALhw_1_1_zwdqzw.png`}
            alt="Robot Image"
            width={500}
            height={500}
            className="xl:-mt-7 xl:-ml-48 2xl:-ml-32 md:-ml-24 xl:w-[700px] xl:h-[700px] hidden md:block"
          />
          <div className="leftside flex flex-col gap-8 xl:gap-20 w-[27%] 2xl:w-[40%] h-[100%] items-center justify-center relative mt-7 md:-ml-32 xl:-ml-56 2xl:-ml-72">
            <Image
              src={`https://res.cloudinary.com/dgtdkqfsx/image/upload/v1734436803/24th_-_26th_jan_iy1lsc.png`}
              alt="Hero Image"
              width={300}
              height={300}
            />
            <h1 className="text-white text-3xl font-bold font-bunk tracking-tight md:text-[6rem] xl:text-[10rem]">
              DDHI
            </h1>
            <button
              // onClick={toggleForm}
              className="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-orange-600 rounded-md group"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-orange-600 rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute bottom-0 left-0 h-full -ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-auto h-full opacity-100 object-stretch"
                  viewBox="0 0 487 487"
                >
                  <path
                    fillOpacity=".1"
                    fillRule="nonzero"
                    fill="#FFF"
                    d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                  ></path>
                </svg>
              </span>
              <span className="absolute top-0 right-0 w-12 h-full -mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="object-cover w-full h-full"
                  viewBox="0 0 487 487"
                >
                  <path
                    fillOpacity=".1"
                    fillRule="nonzero"
                    fill="#FFF"
                    d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                  ></path>
                </svg>
              </span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"></span>
              <span className="relative text-base font-mono tracking-wide font-semibold">
                REGISTER SOON!
              </span>
            </button>
          </div>
        </div>
        {/*for phone screen*/}
        <Image
          src={`https://res.cloudinary.com/dgtdkqfsx/image/upload/v1734423142/vDOUax0qReCTveZAgoALhw_1_1_zwdqzw.png`}
          alt="Robot Image"
          width={800}
          height={800}
          className="md:hidden relative z-0 opacity-40 flex justify-center items-center "
        />
        <div
          className="flex relative z-20 flex-col gap-5 md:hidden space-x-8 h-full items-center
      justify-center text-sm uppercase font-semibold -mt-96 "
        >
          <div className="Images flex justify-evenly">
            <Image
              src={`https://res.cloudinary.com/dgtdkqfsx/image/upload/v1734436803/2025_zc4rpp.png`}
              alt="Hero Image"
              width={100}
              height={100}
              className="w-1/3"
            />
            <Image
              src={`https://res.cloudinary.com/dgtdkqfsx/image/upload/v1734436803/24th_-_26th_jan_iy1lsc.png`}
              alt="Robot Image"
              width={200}
              height={200}
              className="w-1/2 mt-3"
            />
          </div>
          <p className="text-5xl text-white font-bunk mx-auto">VRIDDHI</p>
          <button
            // onClick={toggleForm}
            className="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-orange-600 rounded-md group"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-orange-600 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="absolute bottom-0 left-0 h-full -ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-auto h-full opacity-100 object-stretch"
                viewBox="0 0 487 487"
              >
                <path
                  fillOpacity=".1"
                  fillRule="nonzero"
                  fill="#FFF"
                  d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                ></path>
              </svg>
            </span>
            <span className="absolute top-0 right-0 w-12 h-full -mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="object-cover w-full h-full"
                viewBox="0 0 487 487"
              >
                <path
                  fillOpacity=".1"
                  fillRule="nonzero"
                  fill="#FFF"
                  d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                ></path>
              </svg>
            </span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"></span>
            <span className="relative text-base font-mono tracking-wide font-semibold">
              REGISTER SOON!
            </span>
          </button>
        </div>
      </section>
      {/* Overlay Form */}
      {formopen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto
        no-scrollbar bg-black bg-opacity-50 p-4 sm:p-6"
        >
          <div className="min-h-screen py-6 flex items-center justify-center w-full">
            <RegistrationForm formope={formopen} setformope={setformopen} />
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
