import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import FooterImg from "./Footerassets/Footer.png";
import Running from "./Footerassets/Running .png";
import Vector from "./Footerassets/Vector (2).png";
import Link from "next/link";

const Footer = () => {
  const items = [
    { id: 1, name: "About Us", ref: "About Us" },
    { id: 2, name: "Tournament", ref: "Tournament" },
    { id: 3, name: "Contact Us", ref: "Contact Us" },
    { id: 4, name: "Register", ref: "" },
  ];
  return (
    <footer className="w-full bg-[#0B0A09] text-white pt-12 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-[#FF0000] to-transparent top-0 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-[#FF0000]/5 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse"></div>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-4 relative z-10">
        {/* Contact Info */}
        <div className="transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-[#FF0000] font-bold text-xl mb-4 relative font-Urbanist">
            Contact Info
            <div className="h-0.5 w-48 bg-gradient-to-r from-[#FF0000] to-transparent"></div>
          </h3>
          <div className="space-y-4">
            <a href="tel:+91 7717741487" className="group my-5">
              <p className="font-semibold group-hover:text-[#FF0000] transition-colors">
                Pranav Prakash Ranjan
              </p>
              <p className="text-gray-400 group-hover:text-white transition-colors md:mb-4">
                +91 8936854623
              </p>
            </a>
            <a href="tel:+91 8936854623" className="group">
              <p className="font-semibold group-hover:text-[#FF0000] transition-colors">
                Samrat Harshvardhana
              </p>
              <p className="text-gray-400 group-hover:text-white transition-colors">
                +91 7717741487
              </p>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-[#FF0000] font-bold text-xl mb-4 relative font-Urbanist">
            Quick Links
            <div className="h-0.5 w-48 bg-gradient-to-r from-[#FF0000] to-transparent mt-2"></div>
          </h3>
          <ul className="space-y-3">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.ref}`}
                  className="text-gray-300 hover:text-[#FF0000] transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF0000] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Us */}
        <div className="transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-[#FF0000] font-bold text-xl mb-4 relative font-Urbanist">
            Connect With Us
            <div className="h-0.5 w-48 bg-gradient-to-r from-[#FF0000] to-transparent mt-2"></div>
          </h3>
          <ul className="space-y-4">
            {[
              {
                icon: FaLinkedin,
                name: "LinkedIn",
                url: "https://www.linkedin.com/company/vriddhi-nit-rourkela/",
              },
              {
                icon: FaInstagram,
                name: "Instagram",
                url: "https://www.instagram.com/vriddhi.nitrkl/",
              },
              {
                icon: FaWhatsapp,
                name: "Whatsapp",
                url: "https://whatsapp.com/channel/0029Vaog1kW5K3zPvUCcjr3a ",
              },
            ].map((social) => (
              <li key={social.name}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center group"
                >
                  <div className="p-2 rounded-lg bg-[#FF0000]/10 group-hover:bg-[#FF0000]/20 transition-all">
                    <social.icon className="text-xl text-[#FF0000]" />
                  </div>
                  <span className="ml-3 font-semibold group-hover:text-[#FF0000] transition-colors">
                    {social.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Logos */}
        {/* <div className="border-t border-gray-700 mt-8 pt-4 text-center"> */}
        <div className="mr-4">
          <div className="flex">
            <Image
              src={Running}
              alt="Running Logo"
              width={500}
              height={200}
              className="h-12"
            />
            <Image
              src={Vector}
              alt="Sports Logo"
              className=" mt-5"
              width={50}
              height={50}
            />
          </div>

          <Image
            src={FooterImg}
            alt="Background pattern"
            width={250}
            height={100}
            className="w-full h-40 z-20"
            priority
          />
        </div>
      </div>
      <div className="text-center pt-5 font-Urbanist text-lg">
        Powered by Team Webwiz💜
      </div>
    </footer>
  );
};

export default Footer;
