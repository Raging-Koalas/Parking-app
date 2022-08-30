import React from 'react'
import { useAuth, logout, updateName } from '../public/firebase'
import { useState } from 'react';
import { useRouter } from 'next/router'

const Dashboard1 = () => {

  const currentUser = useAuth();
  const [loading, setLoading] = useState(false);
  const router = useRouter()

  async function handleLogOut() {
    setLoading(true);
    try {
        await logout();
        router.push("/parkingownerlogin_page");
    } catch {
        alert("error");
    }
    setLoading(false);
  }
  if(currentUser===null){
    router.push("/parkingownerlogin_page");
  }

  return (
    <div className="container h-screen max-w-full">
      <div className="m-auto my-28 w-96 max-w-lg items-center justify-center overflow-hidden rounded-2xl bg-slate-200 shadow-xl">
        <div className="h-24 bg-white"></div>
        <div className="-mt-20 flex justify-center">
          <img className="h-32 rounded-full" src="https://media.istockphoto.com/vectors/male-profile-flat-blue-simple-icon-with-long-shadow-vector-id522855255?k=20&m=522855255&s=612x612&w=0&h=fLLvwEbgOmSzk1_jQ0MgDATEVcVOh_kqEe0rqi7aM5A=" />
        </div>
        <div className="mt-5 mb-1 px-3 text-center text-lg">{currentUser?.displayName}</div>
        <div className="mb-5 px-3 text-center text-sky-500">Email: {currentUser?.email}</div>
        <blockquote>
          <p className="mx-2 mb-5 text-center text-base">Due to some updates on firebase you can't import firebase like this  (import firebase from  'firebase/app') anymore,
            rather use this ( import firebase from  'firebase/compat/app' ).
            Same for auth ( import 'firebase/compat/auth' )</p>
        </blockquote>

        <div className="flex justify-center">
          <button onClick={handleLogOut} disabled={loading || !currentUser} className="mb-7 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard1