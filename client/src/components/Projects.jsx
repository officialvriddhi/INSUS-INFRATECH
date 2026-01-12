import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import workdata from '../data.js'
import ImageSlider from "./ImageSlider";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

const Projects = () => {
  const { city } = useParams();
  const [citydata, setCityData] = useState(null);

  useEffect(() => {
    const data = workdata.find(
      item => item.slug.toLowerCase() === city.toLowerCase()
    );
    setCityData(data);
  }, [city]);

  useEffect(()=>{
    scrollToTop()
  },[])

  if (!citydata) return null;

  return (
    <div className="min-h-screen w-full flex justify-center">
      <div className="max-w-7xl w-full p-6">
        <h1 className="text-5xl md:text-7xl font-bold text-center mt-5 mb-5 md:mt-10 md:mb-10 text-pink-800">{citydata.name}</h1>
        <p className=" md:mb-6 text-center text-xl md:text-2xl opacity-50">{citydata.desc}</p>

        <div className="flex flex-col gap-10 mt-10 md:mt-20">
          {citydata.projects.map((project, i) => (
            <div key={i}>
              <div className='flex flex-row gap-16 md:gap-20  flex-wrap lg:flex-nowrap justify-center lg:justify-start '>
                <div className=''>
                  <ImageSlider images={project.img} />
                </div>

                <div>
                  <h3 className="text-3xl md:text-4xl font-semibold">{project.name}</h3>
                  {project.overview && (
                    <p className="mt-3 opacity-70">{project.overview}</p>
                  )}

                  {project.keyFeatures && (
                    <ul className="mt-4 list-disc pl-5 space-y-2">
                      {project.keyFeatures.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  )}

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Projects