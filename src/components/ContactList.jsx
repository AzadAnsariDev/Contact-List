import React from 'react'
import Userlist from './Userlist'

const ContactList = ({allUsers, setAllUsers}) => {
  return (
    <div className='h-full w-[80%] bg-slate-700 p-8 rounded '>
        {allUsers.length > 0 ? <Userlist allUsers = {allUsers} setAllUsers={setAllUsers}/> : <h1 className='text-4xl text-red-400 flex  justify-center font-[100]'>List is Empty</h1>}
    </div>
  )
}

export default ContactList