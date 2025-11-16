"use client";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";

export default function FileUploader({ onUpload }) {
  const [loading, setLoading] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload-image", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.ok && onUpload) {
        onUpload(data.url);
        setUploaded(true);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-between gap-2">
      <input type="file" className="text-white" onChange={handleFileChange} />
      {loading ? (
        <span className="w-[20px] h-[20px] border-2 border-white border-b-transparent rounded-full inline-block animate-spin"></span>
      ) : uploaded ? (
        <span className="text-green-300">
          <FaCheck />
        </span>
      ) : null}
    </div>
  );
}
