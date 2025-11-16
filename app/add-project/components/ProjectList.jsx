"use client";
import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      const res = await fetch("/api/projects");
      const data = await res.json();
      setProjects(data.data);
    }
    fetchProjects();
  }, []);

  console.log(projects.data);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this project?")) return;

    try {
      const res = await fetch("/api/delete-project", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      if (data.ok) {
        setProjects(projects.filter((p) => p._id !== id)); // state güncelle
      } else {
        alert("Delete failed: " + data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    <div className="text-white">
      {projects?.map((project) => (
        <div
          key={project._id}
          className="mb-6 border-b border-white/20 pb-4 relative"
        >
          <div className="flex items-center gap-4">
            <img
              src={project.image}
              alt={project.title}
              style={{ width: "100px" }}
            />
            <div>
              <h2>Title: {project.title}</h2>
              <h2>Category: {project.category}</h2>

              <p>
                <a
                  href={project.link}
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.link}
                </a>
              </p>
            </div>
          </div>
          <button
            onClick={() => handleDelete(project._id)}
            className="absolute top-0 right-0"
          >
            <IoMdClose size={24} className="text-white" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
