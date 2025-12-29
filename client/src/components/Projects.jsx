import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import workdata from '../data.js'
import { Image } from "@imagekit/react";


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
                <div className='overflow-hidden  w-96 h-80 rounded-xl'>
                  <img className='rounded-xl  w-96 h-80 border border-black hover:scale-110 transition-transform duration-300' src={project.img} alt={project.title} />
                </div>
                <div>
                  <h3 className='text-4xl font-semibold'>{project.name}</h3>
                  <div className='text-lg w-[500px] mt-5 '>{project.desc}</div>
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