import Image from "next/image";
import AboutUsPhoto from "../aboutus/AboutUsPhoto.png";

export default function AboutUs() {
  return (
    <div
      id="About Us"
      className="md:min-h-screen flex items-center justify-center px-4 mb-8 md:mb-0"
    >
      <div className="block md:flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-12 p-8 rounded-2xl">
        {/* Logo Section */}
        <div className="hidden md:block flex-shrink-0 mb-6 md:mb-0 md:mr-10 transform transition-all duration-500 hover:scale-105">
          <div className="relative">
            <Image
              className="w-full h-full object-cover"
              src={AboutUsPhoto}
              alt="About Us"
              width={192}
              height={192}
              priority
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="text-white text-center md:text-left max-w-2xl">
          <div className="mb-8">
            <h1 className="font-bunken text-4xl md:text-6xl font-extrabold mb-4">
              ABOUT <span className="text-red-600 animate-pulse">US</span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-red-600 to-red-800 rounded-full mx-auto md:mx-0 mb-6"></div>
          </div>
          <p className="text-xl md:text-2xl leading-relaxed text-gray-200 font-light font-sans">
            <span className="font-semibold text-2xl md:text-3xl text-white">
              Vriddhi
            </span>{" "}
            is East India&apos;s biggest sports festival. A sports gala of
            sorts, several sports enthusiasts grace the platform to{" "}
            <span className="text-red-500 font-medium">prove their mettle</span>{" "}
            with the motto to{" "}
            <span className="text-red-500 font-medium">
              ignite the sportsman in you
            </span>{" "}
            and educate you about the spirit of the game. It is a vibrant
            celebration of
            <span className="font-medium">
              {" "}
              sportsmanship, unity, and the pursuit of excellence
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
