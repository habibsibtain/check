import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";

const ContactSection = () => {
  return (
    <section
      id="Contact Us"
      className="w-full bg-[#0B0A09] text-white py-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-96 h-96 bg-[#FF0000] rounded-full blur-3xl -top-48 -left-48"></div>
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl -bottom-48 -right-48"></div>
      </div>

      <div className="text-center md:text-left md:pl-12 md:pr-6 relative">
        <h1 className="font-bunken text-4xl md:text-6xl text-white w-full my-4 font-bold tracking-wider">
          CONTACT <span className="text-[#FF0000] animate-pulse">US</span>
        </h1>
        <div className="h-1 w-40 md:w-80 bg-gradient-to-r from-red-600 to-red-800 rounded-full mx-auto md:mx-0 mb-6"></div>
      </div>

      <div className="container md:max-w-7xl mx-auto grid md:grid-cols-2 md:items-center px-4 gap-12 relative z-10">
        {/* Left Side: Map */}
        <div className="relative w-full md:px-7 md:py-7">
          <div className="relative p-1 rounded-lg">
            <iframe
              src="https://www.google.com/maps?q=National+Institute+of+Technology+Rourkela&output=embed"
              className="w-full h-64 md:h-80 rounded-md"
              loading="lazy"
              title="NIT Rourkela Location"
            ></iframe>
          </div>
        </div>

        {/* Right Side: Contact Details */}
        <div className="flex flex-col space-y-8 md:ml-16">
          <div className="group hover:bg-[#FF0000]/10 p-4 rounded-lg transition-all duration-300 cursor-pointer">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-[#FF0000]/20 rounded-lg group-hover:bg-[#FF0000]/30 transition-all">
                <MapPinIcon className="h-6 w-6 text-[#FF0000]" />
              </div>
              <a
                href="https://www.google.com/maps?ll=22.250454,84.905076&z=14&t=m&hl=en-US&gl=US&mapclient=embed&q=National+Institute+of+Technology+Sector+1+Rourkela,+Odisha"
                className="group-hover:text-[#FF0000] transition-colors"
              >
                National Institute of Technology, <br />
                Sector 1, Rourkela, Odisha 769008
              </a>
            </div>
          </div>

          <div className="group hover:bg-[#FF0000]/10 p-4 rounded-lg transition-all duration-300 cursor-pointer">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-[#FF0000]/20 rounded-lg group-hover:bg-[#FF0000]/30 transition-all">
                <EnvelopeIcon className="h-6 w-6 text-[#FF0000]" />
              </div>
              <a
                href="mailto:nitrkl.vriddhi@gmail.com"
                className="group-hover:text-[#FF0000] transition-colors"
              >
                nitrkl.vriddhi@gmail.com
              </a>
            </div>
          </div>

          <div className="group hover:bg-[#FF0000]/10 p-4 rounded-lg transition-all duration-300 cursor-pointer">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-[#FF0000]/20 rounded-lg group-hover:bg-[#FF0000]/30 transition-all">
                <PhoneIcon className="h-6 w-6 text-[#FF0000]" />
              </div>
              <a
                href="tel:+91 8936854623"
                className="group-hover:text-[#FF0000] transition-colors"
              >
                Pranav Prakash Ranjan: 8936854623
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
