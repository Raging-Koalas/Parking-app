import React from "react";

const Weather = () => {
  return (
    <div className="px-4 mx-auto max-w-[1400px] rounded-md  flex justify-between items-center bg-blue-50 py-2 mt-5">
      <div className="flex gap-3">
        <img className="w-10 " src="/Assets/sunny.svg" alt="" />
        <div className="flex flex-col -space-y-1">
          <p>33°C</p>
          <p>Sunny</p>
        </div>
        <div className="flex justify-center items-center gap-2">
            <img className="w-5" src="/Assets/location.svg" alt="" />
            <p>United International University</p>
        </div>

        


      </div>
      <form class="flex items-center">   
    <label for="voice-search" class="sr-only">Search</label>
    <div class="relative w-full">
    
        <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Location" required=""/>
        <button type="button" class="flex absolute inset-y-0 right-0 items-center pr-3">
           <img className="w-4" src="/Assets/location.svg" alt="" />
        </button>
    </div>
    <button type="submit" class="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-[#4506cb] rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg aria-hidden="true" class="mr-2 -ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Search
    </button>
</form>
      <div className="flex gap-10">
        <div>
          <p>33°C</p>
          <img className="w-5" src="/Assets/sunny.svg" alt="" />
          <p>6 PM</p>
        </div>
        <div>
          <p>33°C</p>
          <img className="w-5" src="/Assets/sunny.svg" alt="" />
          <p>6 PM</p>
        </div>
        <div>
          <p>33°C</p>
          <img className="w-5" src="/Assets/sunny.svg" alt="" />
          <p>6 PM</p>
        </div>
        <div>
          <p>33°C</p>
          <img className="w-5" src="/Assets/sunny.svg" alt="" />
          <p>6 PM</p>
        </div>
        <div>
          <p>33°C</p>
          <img className="w-5" src="/Assets/sunny.svg" alt="" />
          <p>6 PM</p>
        </div>
        <div>
          <p>33°C</p>
          <img className="w-5" src="/Assets/sunny.svg" alt="" />
          <p>6 PM</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
