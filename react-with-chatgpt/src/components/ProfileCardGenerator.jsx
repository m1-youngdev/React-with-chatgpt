import React from 'react'
import { useState } from 'react'
import ProfileForm from './ProfileForm'
import ProfileCard from './ProfileCard'


function ProfileCardGenerator() {
    const [name, setName] = useState("")
    const [bio, setBio] = useState("")
    const [image, setImage] = useState("")

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Profile Card Generator</h1>
        <ProfileForm 
        setName= {setName}
        setBio= {setBio}
        setImage= {setImage}
        />
        
        <div className='flex justify-center gap-[20px]'>
          <ProfileCard
        name= {name}
        bio= {bio}
        image= {image}
        />
        </div>
        
    </div>
  )
}

export default ProfileCardGenerator