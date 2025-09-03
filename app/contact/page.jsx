import Form from "./components/Form"

const Contact = () => {
    
  return (
    <div className='max-w-[1170px] mx-auto min-h-[calc(100vh-84px-103.5px)]  md:min-h-[calc(100vh-82.5px-65px)] px-6 flex items-center'>
       <div className=' w-[600px] mx-auto'>
        <div className='flex items-center justify-between gap-6 mb-5'>
            <h3 className='text-[20px] md:text-[30px]  text-zinc-300 font-bold  md:text-left max-w-md'>Need a website? <span className="bg-gradient-to-r from-red-200 via-blue-300 to-yellow-200 bg-400 bg-clip-text text-transparent animate-gradient-move">Get in touch!</span></h3>
        </div>
        <Form />
       </div>
    </div>
  )
}

export default Contact