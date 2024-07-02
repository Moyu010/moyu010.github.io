'use client';

import React, { useEffect, useState } from 'react';
import { getProject, Project } from '../api/getProject';
import Link from 'next/link';

const ProjectComponent = () => {
  const [projects, setProjects] = useState<Project[]>();

  useEffect(() => {
    const fetchProject = async () => {
      setProjects(await getProject());
    };

    fetchProject();
  }, []);

  return (
    <div className='space-y-4'>
      {projects && projects.map((project, index) => (
        <div key={index} className='pill'>
          <div className='flex flex-col md:flex-row space-x-4 '>
            <div className='mt-2 mb-2 w-96 h-48'>
              <img className='object-fill' src={`{/project/${project.id}_cover.png}`} alt={`${project.title}`} />
            </div>
            <div className='flex flex-col'>
              <h1 className='text-2xl font-bold pt-2 pb-2'>{project.title}</h1>
              <div>
                <p>
                  {project.summary}
                </p>
              </div>
              <div className='flex flex-row space-x-3'>
                {project.tech_stack.map((tech, idx) => (
                  <span key={idx} className='tech-tag'>{tech}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectComponent;