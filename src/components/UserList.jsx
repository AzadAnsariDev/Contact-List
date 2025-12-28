import React from 'react'
import CallingCard from './CallingCard'
import { useState } from 'react'

const Userlist = ({allUsers, setAllUsers}) => {

let removeUser = (idx)=>{
  
  let copyallusers = [...allUsers]
  copyallusers.splice(idx,1)
  setAllUsers(copyallusers);
}

const [showCall, setShowCall] = useState(false)

  const [activeUser, setActiveUser] = useState(null)

  return (
    <div className='h-28 w-full bg-amber-700 rounded-md '>
      {allUsers.map((user, index) => (
        <div key={index} className="h-28 w-full text-2xl mb-11 text-white bg-amber-700 rounded-md flex justify-around px-4 items-center">
          <p className='bg-amber-100 text-black px-4 py-2 rounded'><b>Name:</b> {user.name}</p>
          <p className='bg-amber-100 text-black px-4 py-2 rounded'><b>Email:</b> {user.email}</p>
          <p className='bg-amber-100 text-black px-4 py-2 rounded'><b>Phone:</b> {user.phone}</p>
          <p><img onClick={
            ()=>{
            setShowCall(true) 
            setActiveUser(user)
          }} 
            className='h-10 min-w-10' src="/public/call.png" alt="" /></p>
            <button onClick={()=>{
              removeUser(index)
            }
            }
             className='h-14 w-fit px-4 py-2 rounded bg-red-500'>Remove</button>
        </div>
      ))}
      {showCall && <CallingCard  activeUser={activeUser} onEndCall ={()=> setShowCall(false)}/>}
    </div>
  )
}

export default Userlist