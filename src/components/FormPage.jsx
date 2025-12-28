import React from 'react'
import { useState } from 'react';

const FormPage = ({allUsers, setAllUsers}) => {
  let submithandler = (e)=>{
    e.preventDefault();
    console.log("form submited")

    setName('');
    setEmail('');
    setPhone('');

    setAllUsers([...allUsers, {name, email, phone}])
    console.log(allUsers);
  }

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  return (
    <div className='h-full w-[40%] rounded'>
      <form onSubmit={(e)=>{        
        submithandler(e)
      }} 
        className= 'h-full w-full bg-slate-800 flex flex-col items-center p-4 rounded'>
        <h1 className='text-[2em] text-neutral-400 mb-14'>Helo</h1>
        <input 
        onChange={(e)=>{
          setName(e.target.value);
        }}
        value={name}
        className = "mt-6 w-full max-w-sm outline-none bg-white p-4 pl-6 rounded-md border text-2xl border-gray-300" type="text" placeholder='Enter name' required />
        <input
          onChange={(e)=>{
          setEmail(e.target.value);
        }}
        value={email}
         className = "mt-6 w-full max-w-sm outline-none bg-white p-4 pl-6 rounded-md border text-2xl border-gray-300" type="text" placeholder='Enter email' required/>
        <input 
          onChange={(e)=>{
          setPhone(e.target.value);
        }}
        value={phone}
        pattern="[0-9]{10}"
        maxLength={10}
        className = "mt-6 w-full max-w-sm outline-none bg-white p-4 pl-6 rounded-md border text-2xl border-gray-300" type="text" placeholder='Enter Phone no' required/>
        <button className='mt-14 w-full max-w-[50%] outline-none bg-emerald-500 hover:bg-emerald-400  p-4 pl-6 rounded-md border text-2xl '>Submit</button>
      </form>
    </div>
  )
}

export default FormPage