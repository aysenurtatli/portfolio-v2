"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    const res = await fetch("/api/admin-login", {
      method: "POST",
      body: JSON.stringify({ password }),
    });

    const data = await res.json();

    if (data.ok) {
      router.push("/add-project");
    } else if (data.message) {
      setMessage(data.message);
    }
  }

  return (
    <div className="max-w-[1170px] mx-auto min-h-screen md:min-h-[calc(100vh-82.5px-65px)] px-6 py-[40px]">
      <form
        onSubmit={handleLogin}
        className=" mx-auto items-center justify-center max-w-[500px] text-white bg-white/5 p-6 rounded-md backdrop-blur-sm border border-white/20"
      >
        <h1 className="text-2xl mb-4">Admin Login</h1>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-transparent backdrop-blur-sm font-mono border border-white/20 p-[1rem] w-full rounded-md text-zinc-300 hover:border-indigo-200 duration-300 focus:outline-none focus:border-indigo-200 placeholder:text-zinc-300"
        />
        {message && <p className="text-red-500 mt-2">{message}</p>}

        <button
          type="submit"
          className="flex items-center justify-center w-full p-3 text-white text-[18px] backdrop-blur-sm border border-white/20 cursor-pointer my-3 rounded-md font-mono hover:-translate-y-1 hover:shadow-2xl duration-200 hover:border-indigo-200"
        >
          Login
        </button>
      </form>
    </div>
  );
}
