import React from 'react';

function Homeauto() {
  const controlLed = async (endpoint) => {
    try {
      const fetchUrl = `http://192.168.160.72/${endpoint}`;
      const response = await fetch(fetchUrl);
      const data = await response.text();
      console.log(data);
    } catch (error) {
      console.error("Error controlling:", error);
    }
  };

  const handleLogout = () => {
    window.location.href = './login';  
  }

  return (
    <div className="flex flex-col gap-10 w-screen h-full justify-center items-center">
        <div className='text-3xl text-slate-700 mb-20 md:text-6xl '>
          <div className='flex flex-row pt-5 gap-20 justify-center items-center'>
            <h1 className='flex justify-end items-end underline text-xl text-emerald-700 md:text-5xl'> Home Automation</h1>
            <button onClick={handleLogout} className=' bg-zinc-700 hover:bg-emerald-700 text-white h-10 pl-5 pr-5 rounded-lg text-sm md:text-xl'>
              Logout
            </button>
            </div>
        </div>
        <div className='flex flex-col gap-10 h-full justify-center items-center p-10 border-zinc-300 bg-slate-200 rounded-lg  md:w-[50%]'>
           <h1 className='text-lg text-slate-700 mb-[15px] md:text-3xl'>Light Control</h1>
      <div className='text-5 text-white flex flex-row gap-10 w-full justify-center items-center'>
        <button className='p-2 bg-zinc-700 hover:bg-emerald-700 rounded-lg' onClick={() => controlLed('ledon1')}>Turn On LED 1</button>
        <button className='p-2 bg-zinc-700 hover:bg-emerald-700 rounded-lg' onClick={() => controlLed('ledoff1')}>Turn Off LED 1</button>
      </div>
      <div className='text-5 text-white flex flex-row gap-10 w-full justify-center items-center'>
        <button className='p-2 bg-zinc-700 hover:bg-emerald-700 rounded-lg' onClick={() => controlLed('ledon2')}>Turn On LED 2</button>
        <button className='p-2 bg-zinc-700 hover:bg-emerald-700 rounded-lg' onClick={() => controlLed('ledoff2')}>Turn Off LED 2</button>
      </div>
        </div>
       <div className='flex flex-col gap-10 h-full justify-center items-center p-10 border-zinc-300 bg-slate-200 rounded-lg  md:w-[50%]'>
         <h1 className='text-slate-800 text-3xl'>Fan Control</h1>
      <div className='text-5 text-white flex flex-row gap-10 w-full justify-center items-center'>
        <button className='pl-5 pr-5 pt-2 pb-2 bg-zinc-700 hover:bg-emerald-700 rounded-lg' onClick={() => controlLed('fanon')}>Turn On Fan</button>
        <button className='pl-5 pr-5 pt-2 pb-2 bg-zinc-700 hover:bg-emerald-700 rounded-lg' onClick={() => controlLed('fanoff')}>Turn Off Fan</button>
      </div>
       </div>
     
    </div>
  );
}

export default Homeauto;