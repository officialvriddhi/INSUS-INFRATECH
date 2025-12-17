import React from 'react'
import Stack from '../components/HomeCarousel.jsx'
import { Image } from '@imagekit/react';
const Work = () => {

  const images = [
  "/IMG5.PNG",
  "/IMG4.PNG",
  "//IMG21.HEIC",
  "/IMG8.JPG",
];
  return (

              <div className='w-[33%] h-[35rem] mt-10'>
                    <Stack
                        randomRotation={true}
                        sensitivity={1000}
                        autoplay={true}
                        autoplayDelay={1800}
                        pauseOnHover={true}
                        sendToBackOnClick={true}
                        className="shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
                        cards={images.map((src, i) => (
                        <Image
                            key={i} 
                            src={src}
                            alt="Hero"
                            style={{ width: '100%', height: '100%', objectFit: 'cover'}} 
                            loading="lazy"
                        />
                        ))}
                    />
                </div>
  )
}

export default Work