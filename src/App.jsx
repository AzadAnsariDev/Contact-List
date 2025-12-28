import React from 'react'
import FormPage from './components/FormPage.jsx'
import ContactList from './components/ContactList.jsx'
import { useState } from 'react'

const App = () => {

  const [allUsers, setAllUsers] = useState([])
  return (
    <div className='h-full w-full bg-gray-500 p-8 flex justify-center gap-12 relative'>
      <FormPage allUsers={allUsers} setAllUsers={setAllUsers}/>
      <ContactList allUsers = {allUsers} setAllUsers={setAllUsers}/>
    </div>
  )
}

export default App