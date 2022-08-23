import React from "react";
import Link from 'next/link'
const Hero = () => {
  return (
    <div className='container mx-auto mt-20'>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="">
          <div className="flex items-center gap-2">
            <hr className='w-10 border-primary' />
            <p className='text-primary text-lg font-semibold dark:text-white'>Parking App</p>
          </div>
          <p className=' text-4xl font-semibold dark:text-white'>Our journey Start From Here</p>
          <p className=' text-sm text-[#666666] max-w-lg dark:text-gray-300'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit </p>
          <div className="flex gap-4 mt-5">
            <Link href="/carownerlogin">
              <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Login as Car Owner</button>
            </Link>
            <Link href="/parkingownerlogin">
              <button type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Login as Parking Owner</button>
            </Link>

          </div>
        </div>
        <img src="/Assets/home.svg" alt="" />
      </div>

    </div>
  );
};

export default Hero;
