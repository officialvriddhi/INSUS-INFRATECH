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
      <div className="max-w-5xl w-full p-6">
        <h1 className="text-4xl font-bold">{citydata.name}</h1>
        <p className="mb-6">{citydata.desc}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {citydata.projects.map((p, i) => (
            <div key={i} className="h-48 rounded-xl overflow-hidden">
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Projects