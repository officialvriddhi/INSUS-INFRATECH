import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import workdata from '../data.js'
import ImageSlider from "./ImageSlider";


const Projects = () => {
  const { city } = useParams();
  const [citydata, setCityData] = useState(null);

  useEffect(() => {
    const data = workdata.find(
      item => item.name.toLowerCase() === city.toLowerCase()
    );
    setCityData(data);
  }, [city]);

  if (!citydata) return null;

  return (
    <div className="min-h-screen w-full flex justify-center">
      <div className="max-w-7xl w-full p-6">
        <h1 className="text-7xl font-bold text-center mt-10 mb-10 text-pink-800">{citydata.name}</h1>
        <p className="mb-6 text-center text-2xl opacity-50">{citydata.desc}</p>

        <div className="flex flex-col gap-10 overflow-x-auto">
          {citydata.projects.map((project, i) => (
            <div key={i}>
              <div className=' border w-6 text-center border-black rounded-3xl my-2'>{i + 1}</div>
              <div className='flex flex-row gap-20  '>
                <div>
                  <ImageSlider images={project.img} />
                </div>

                <div>
                  <h3 className="text-4xl font-semibold">{project.name}</h3>
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