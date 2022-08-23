import React, { useEffect } from 'react'
import { login, useAuth, logout } from '../../public/firebase'
import { useRef, useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';

function Redirect({ to }) {
    const router = useRouter();

    useEffect( ()=>{
        console.log("Okay");
        router.push(to);
    }, [to] );

    return null;
}

const ParkingOwnerLogin = () => {

    const [loading, setLoading] = useState(false); 
    const currentUser = useAuth();

    const emailRef = useRef();
    const passwordRef = useRef();

    async function handleLogin(){
        setLoading(true);
        try{
            await login(emailRef.current.value, passwordRef.current.value);
        } catch {
            alert("error");
        }
        setLoading(false);
        
    }
    async function handleLogOut(){
        setLoading(true);
        try{
            await logout();
        } catch {
            alert("error");
        }
        setLoading(false);
        
    }

    if(currentUser != null) {
        <Redirect to="/parkingownersignup" />
    }
    
  return (
    <div>
    <section className="bg-gray-50 dark:bg-gray-900">
<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
  <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
     
      Login as Parking Owner : {currentUser?.email} 
  </a>
  <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
          </h1>
          <form className="space-y-4 md:space-y-6" action="#">
              <div>
                  <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input ref={emailRef} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
              </div>
              <div>
                  <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input ref={passwordRef} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
              </div>
              <div className="flex items-center justify-between">
                  <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                      </div>
                      <div className="ml-3 text-sm">
                        <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                      </div>
                  </div>
                  <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
              </div>
              <button onClick={handleLogin} disabled={ loading || currentUser != null } type="submit" className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Log in</button>
              <button onClick={handleLogOut} disabled={ loading || !currentUser } className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Log Out</button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet? <Link href="/parkingowersignup"><a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a></Link>
              </p>
          </form>
      </div>
  </div>
</div>
</section>
</div>
  )
}

export default ParkingOwnerLogin;

