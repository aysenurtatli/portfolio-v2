"use client";
import { useState } from "react";
import FileUploader from "./FileUploader";

const AddProjectForm = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");
  const [category, setCategory] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch("/api/add-project", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, image, link, category }),
    });
    const data = await res.json();
    if (data.ok) {
      setTitle("");
      setImage("");
      setLink("");
      setCategory("");
      alert("Project added successfully!");
    } else {
      alert(`Error: ${data.message}`);
    }
  }
  return (
    <form className="mb-10" onSubmit={handleSubmit}>
      <h1 className="text-zinc-300 text-2xl mb-4">Add New Project</h1>
      <div className="flex flex-col gap-4">
        <select
          name=""
          id=""
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 rounded-md bg-[#1e1e25] border border-white/æ20 text-zinc-200"
        >
          <option value="">Select Category</option>
          <option value="web">Web</option>
          <option value="frontend-mentor">Frontend Mentor</option>
          <option value="graphic-design">Graphic Design</option>
          <option value="product-design">Product Design</option>
        </select>
        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 rounded-md bg-[#1e1e25] border border-white/20 text-zinc-200"
        />
        <FileUploader onUpload={setImage} />

        <input
          type="text"
          placeholder="Project Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="p-2 rounded-md bg-[#1e1e25] border border-white/20 text-zinc-200"
        />
        <button
          type="submit"
          className="bg-[#1e1e25] text-zinc-200 border border-white/20 font-bold py-2 px-4 rounded-md hover:shadow-2xl hover:-translate-y-1 duration-200"
        >
          Add Project
        </button>
      </div>
    </form>
  );
};

export default AddProjectForm;
