import React from 'react'

import Img1 from '../assets/images/logo.svg'

function Navbar() {
  
  return (
    <>     
<nav class="shadow-md border-gray-200 sticky">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between p-1">
      <img src={Img1} class="h-16 mr-3" alt="RTEEMS Logo" />
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-black rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-2 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-16 md:mt-0">
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-black md:p-0">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-black md:p-0">Visualization</a>
        </li>
        <li>
          <p className='text-gray-500 font-light'>Greetings Kornél!</p>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar