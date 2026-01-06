import { useState } from "react";

const ImageSlider = ({ images }) => {
  const [active, setActive] = useState(0);

  return (
    <div className="flex gap-4">
      {/* MAIN IMAGE */}
      <div className="w-96 h-64 overflow-hidden rounded-lg">
        <img
          src={images[active]}
          className="w-full h-full object-cover transition-opacity duration-300"
          alt="project"
        />
      </div>

      {/* THUMBNAILS */}
      <div className="flex flex-col gap-2">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            onMouseEnter={() => setActive(index)}
            className={`w-24 h-16 object-cover rounded cursor-pointer border-2 transition
              ${active === index ? "border-black" : "border-transparent opacity-60 hover:opacity-100"}
            `}
            alt="thumbnail"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
