import React, { useState } from 'react'
import { Search, ChefHat } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = ({ handleSearch }) => {
  const [input, setInput] = useState("")
  const navigate = useNavigate()


  const searchHandler = (e) => {
    e.preventDefault();

    if (input.trim()) {
      handleSearch(input.trim());
      navigate(`search/${input}`);
      setInput("");
    }
  }
  return (
    <div>
      <nav className='sticky top-0 z-50 bg-gray-950/90 backdrop-blur-md shadow-2xl shadow-
      black/50border-b border-blue-900/50'>
        <div className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            <Link to={'/'} className='flex items-center text-2xl font-black text-white 
            hover:text-blue-400 transition duration-300 tracking-widest'>
              <ChefHat className='w-7 h-7 mr-2 text-yellow-200 fill-red-400' />
              <span className='text-blue-400'>Mr.</span>Chef
            </Link>

            <form onSubmit={searchHandler} className='flex-1 max-w-lg mx-4 hidden sm:flex'>
              <input type="text" onChange={(e) => setInput(e.target.value)}
                placeholder='Search Dishes, Ingredients, or Cuisine...'
                className='w-full px-5 py-2 border border-gray-700 bg-gray-900 text-gray-50
              rounded-l-full focus:outline-none focus:ring-blue-600/50 transition placeholder-
              gray-500 shadow-inner shadow-black/50 focus:ring-2
              '/>
              <button type='submit' className='bg-linear-to-r from-blue-600 to-cyan-500 text-
              white p-2.5 rounded-r-full hover:from-blue-700 hover:to-cyan-600 transition
              duration-300 shadow-md shadow-blue-800/50 hover:shadow-md hover:shadow-blue-800'>
                <Search className='w-5 h-5' />
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar