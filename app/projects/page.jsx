'use client'
import React, { useState, useEffect } from 'react';
import Project from './components/Project';
import { projects } from './data/projectsData';

const Projects = () => {
  const [loading, setLoading] = useState(true);
  const { webDesign, frontendMentor, productDesign, graphicDesign } = projects;

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="max-w-[1170px] mx-auto px-6 py-[40px]">
      <h2 className="text-zinc-300 text-[30px] font-bold mb-6">Projects</h2>

      {loading ? (
        <div className="min-h-[500px] flex justify-center items-center">
          <div className="flex flex-col items-center gap-4">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-purple-400"></div>
            <p className="text-zinc-400 animate-pulse">Loading Projects...</p>
          </div>
        </div>
      ) : (
        <div className="animate-fade-in space-y-10">
          <Project title="Web Projects" lists={webDesign} />
          <Project title="Frontend Mentor Projects" lists={frontendMentor} />
          <Project title="Graphic Projects" lists={graphicDesign} />
          <Project title="Product Design Projects" lists={productDesign} />
        </div>
      )}
    </section>
  );
};

export default Projects;
