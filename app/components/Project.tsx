'use client';

import React, { useEffect, useState } from 'react';
import { getProject, Project } from '../api/getProject';
import IconLink from './IconLink';

const ProjectComponent = () => {
  const [projects, setProjects] = useState<Project[]>();

  useEffect(() => {
    const fetchProject = async () => {
      setProjects(await getProject());
    };

    fetchProject();
  }, []);

  return (
    <div id='projects' className='page-section'>
      <h2 className='section-title'>
        Projects
      </h2>
      <div className='mt-4'>
        <div className='space-y-4'>
          {projects && projects.map((project, index) => (
            <div key={index} className='project-card'>
              <div className='flex flex-col md:flex-row space-x-4 '>
                <img className='mt-2 mb-2 lg:w-1/3 rounded-xl object-fit' src={`${project.cover}`} alt={`${project.title}`} />
                <div className='flex flex-col lg:w-2/3'>
                  <div className='flex flex-row'>
                    <h1 className='text-2xl font-bold pt-2 pb-2 flex flex-grow'>{project.title}</h1>
                    <div className='flex flex-row space-x-4 pr-4 pl-4'>
                      {project.link.demo && (
                        <IconLink destUrl={project.link.demo} iconName='demo.svg' altText='Demo' />
                      )}
                      {project.link.github && (
                        <IconLink destUrl={project.link.github} iconName='github.svg' altText='View Source' />
                      )}
                      {project.link.report && (
                        <IconLink destUrl={project.link.report} iconName='report.svg' altText='Report' />
                      )}
                    </div>
                  </div>

                  <div className='flex-grow'>
                    <p>
                      {project.summary}
                    </p>
                  </div>
                  <div className='flex flex-row pt-6'>
                    <div className='flex flex-row space-x-3 flex-grow flex-wrap'>
                      {project.tech_stack.map((tech, idx) => (
                        <div key={idx} className='tech-tag'>{tech}</div>
                      ))}
                    </div>
                    <div>
                      <p className='text-sm text-gray-500 mt-1'>{project.date.toLocaleString('en-AU', { year: 'numeric', month: 'short' })}</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default ProjectComponent;