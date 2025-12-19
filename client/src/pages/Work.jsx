import React from 'react'
import Stack from '../components/HomeCarousel.jsx'
import { Image } from '@imagekit/react';


const Work = () => {

  const [stopScroll, setStopScroll] = React.useState(false);
  const cardData = [
    {
      title: "Indore",
      image: "https://ik.imagekit.io/officialvriddhi/insus-infratech/Indore.jpeg",
      url: "htt[s://google.com",
    },
    {
      title: "Jaipur",
      image: "https://ik.imagekit.io/officialvriddhi/insus-infratech/Jaipur.jpeg?updatedAt=1766076377135",
      url: "/home",

    },
    {
      title: "Ayodhya",
      image: "https://ik.imagekit.io/officialvriddhi/insus-infratech/Ayodhya.jpeg",
      url: "/home",

    },
    {
      title: "Lucknow",
      image: "https://ik.imagekit.io/officialvriddhi/insus-infratech/Lucknow.jpeg",
      url: "/home",

    },
    {
      title: "Patna",
      image: "https://ik.imagekit.io/officialvriddhi/insus-infratech/Patna.jpeg",
      url: "/home",

    },
  ];
  return (
    <main>
      <section className='mt-32 mb-20'>
        <div className='m-100'>
          <h1 className='text-7xl font-semibold text-center '>Structure That Define Standard</h1>
          <p className='text-center'>Projects that we have previously worked on</p>
        </div>
      </section>
      <style>{`
                .marquee-inner {
                    animation: marqueeScroll linear infinite;
                }

                @keyframes marqueeScroll {
                    0% {
                        transform: translateX(0%);
                    }

                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>

      <section className="overflow-hidden w-full relative max-w-screen-2xl mx-auto" onMouseEnter={() => setStopScroll(true)} onMouseLeave={() => setStopScroll(false)}>
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
        <div className="marquee-inner flex w-fit" style={{ animationPlayState: stopScroll ? "paused" : "running", animationDuration: cardData.length * 2500 + "ms" }}>
          <div className="flex">
            {[...cardData, ...cardData].map((card, index, url) => (
              <div key={index} className="w-60 mx-4 h-[20rem] relative group hover:scale-90 transition-all duration-300 ">
                <a href={url}><img src={card.image} alt="card" className="w-full h-full object-cover rounded-xl" /></a>
                <div className="flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/20">
                  <p className="text-white text-lg font-semibold text-center">{card.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
      </section>


    </main>
  )
}

export default Work