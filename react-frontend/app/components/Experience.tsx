'use client';

import React, { useEffect, useState } from 'react';
import { getExperience, Experience } from '../api/getExperience';

const ExperienceComponent = () => {
  const [experiences, setExperiences] = useState<Experience[]>();

  useEffect(() => {
    const fetchExperience = async () => {
      const experienceData = await getExperience();
      setExperiences(experienceData as Experience[]);
    };

    fetchExperience();
  }, []);

  return (
    <div className="space-y-4">
      {experiences && experiences.map((exp, index) => (
        <div key={index} className="pill">
          <div className="flex space-x-4">
            <img src={exp.logo} alt={`${exp.company} logo`} className="w-16 h-16" />
            <div>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{exp.title} at {exp.company}</h5>
              <p className="font-normal text-gray-700">
                {exp.startDate ? exp.startDate.toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Start date not available'} - 
                {exp.endDate ? exp.endDate.toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Present'}
              </p>
            </div>
          </div>
          <ul className="list-disc pl-5 mt-4 ml-6">
            {exp.keyPoints.map((point, idx) => (
              <li key={idx} className="text-gray-700">{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ExperienceComponent;