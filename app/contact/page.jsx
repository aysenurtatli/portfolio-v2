'use client'
import React, { useState } from 'react'
import Input from '../components/Input'

const Contact = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !message || !firstName || !lastName) {
            alert('Please fill all Inputs')
            return;
        }

        const formData = {
            email, message, firstName, lastName,
        };

        fetch("https://formspree.io/f/mldgnkpn", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })

            .then((response) => {
                if (response.ok) {
                    alert('Your Message Send Successfully')
                    setMessage("")
                    setEmail("")
                    setFirstName("")
                    setLastName("")
                } else if (!email){
                    alert("Please enter a valid email address");
                    setEmail("")
                }
                else if (!message){
                    alert("Please enter a message")
                }
            })

            .catch((error) => {
                console.error(error);
                alert("Connection Error")
            })
    }

  return (
    <div className='max-w-[1170px] mx-auto min-h-[calc(100vh-84px-103.5px)]  md:min-h-[calc(100vh-82.5px-65px)] px-6 flex items-center'>
       <div className='max-w-[768px] mx-auto'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-6 mb-5'>
        <h3 className='text-[20px] md:text-[30px]  text-zinc-300 font-bold text-center md:text-left max-w-md'>Would you like to create a website ? <span className="bg-gradient-to-r from-red-500 via-blue-500 to-red-500 bg-400 bg-clip-text text-transparent animate-gradient-move">Let’s Talk with me !</span></h3>
        <div className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-full bg-black flex items-center justify-center overflow-hidden flex-shrink-0">
                <img src="/contact.png" alt="Profile" className="w-full h-full object-contain" />
            </div>
        </div>
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/>
                <Input type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}/>
            </div>
            <div className='my-4'>
                <Input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <textarea placeholder="Message"  className='bg-zinc-900 p-[1rem] w-full rounded-md resize-y max-h-[200px] text-zinc-400 focus:outline-none' onChange={(e) => setMessage(e.target.value)}></textarea>
            <button className="flex items-center justify-center min-w-[140px] max-w-full p-[1px] text-white text-[18px] hover:shadow-[0_5px_10px_rgba(39,97,245,0.4)] bg-gradient-to-r from-pink-700 via-pink-500 to-blue-500 transition-all duration-300 active:scale-90 cursor-pointer my-2 rounded-md" type='submit'>
                <span className="w-full h-full p-[0.8rem] rounded-md bg-zinc-900 transition-colors duration-300">
                    Send
                </span>
            </button>
        </form>
       </div>
    </div>
  )
}

export default Contact