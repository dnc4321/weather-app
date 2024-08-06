import React from 'react'

function SearchBar() {
  return (
    
<div className="max-w-md mx-auto">   
    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 rounded-lg bg-slate-100 shadow-2xl" placeholder="Search Location..." required />
        <button type="submit" className="text-gray-700 absolute end-2.5 bottom-2.5 bg-slate-200 hover:bg-blue-800 hover:text-gray-200 font-medium rounded-lg text-sm px-4 py-2 transition duration-300">Search</button>
    </div>
</div>

  )
}

export default SearchBar
