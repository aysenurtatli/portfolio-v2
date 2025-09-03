"use client"
import React from 'react'
import { useState } from 'react';
import Input from './Input';

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !message || !firstName || !lastName) {
            setError("Please Fill all Inputs")
            setTimeout(() => setError(""), 3000)
            return;
        }

        const formData = {
            email, message, firstName, lastName,
        };
        try {
            const response = await fetch("https://formspree.io/f/mldgnkpn", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSuccess("Your message was sent successfully!");
                setError("");
                setFirstName("");
                setLastName("");
                setEmail("");
                setMessage("");
                setTimeout(() => setSuccess(""), 3000);
            } else {
                setError("Something went wrong. Please try again.");
                setSuccess("");
                setTimeout(() => setError(""), 3000);
            }
            } catch (err) {
            console.error(err);
            setError("Connection error. Please try again.");
            setSuccess("");
            setTimeout(() => setError(""), 3000);
            }
        };

  return (
    <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input type="text" value={firstName} placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/>
                <Input type="text" value={lastName} placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}/>
            </div>
            <div className='my-4'>
                <Input type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <textarea 
                placeholder="Message"
                value={message}
                className='bg-transparent backdrop-blur-sm border border-white/20 font-mono p-[1rem] w-full rounded-md resize-y max-h-[200px] text-zinc-300 focus:outline-none focus:border-indigo-200 hover:border-indigo-200 duration-300 placeholder:text-zinc-300'
                onChange={(e) => setMessage(e.target.value)}>
            </textarea>
            {success &&
                <p className='text-lime-400'>{success}</p>
             }
             {error && 
                <p className='text-red-400'>{error}</p>
             }
            <button className="flex items-center justify-center min-w-[140px] max-w-full p-3 text-white text-[18px] backdrop-blur-sm border border-white/20 cursor-pointer my-2 rounded-md font-mono hover:-translate-y-1 hover:shadow-2xl duration-200 hover:border-indigo-200" type='submit'>
               Send
            </button>
    </form>
  )
}

export default Form