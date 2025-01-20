import React from "react";
import { galleryData1 } from "../../Data/GalleryData.js";
import Image from "next/image";
const Gallery = () => {
  return (
    <>
      <div
        id="Gallery"
        className="flex justify-center items-center h-14 md:h-24 text-[#D9D9D9] text-4xl md:text-6xl font-bold font-bunken w-3/4"
      >
        GALLERY
      </div>
      <div className="h-1 w-24 md:w-40 bg-gradient-to-r from-red-600 to-red-800 rounded-full mx-0 mb-12"></div>

      <div className="h-[450px] overflow-y-scroll w-3/4">
        <div className='className="columns-1 md:columns-2 lg:columns-3 gap-3 space-y-3'>
          {galleryData1.map((item, index) => (
            <div key={index}>
              <Image
                className="w-full rounded-lg"
                src={item.image}
                alt={item.alt}
                width={500}
                height={500}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
