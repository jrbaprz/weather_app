import React from 'react'

const Searchbar = () => {
  return (
    <div className="flex justify-center">
        <input 
            type="text" 
            placeholder="Where to?" 
            className="w-2/3 py-2 px-4 mx-10 mt-10 rounded shadow-xl font-light focus:outline-none focus:shadow-lg focus:shadow-slate-200 duration-100 shadow-gray-100" 
        />
    </div>
  )
}

export default Searchbar