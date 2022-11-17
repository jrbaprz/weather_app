import React from 'react'
import './index.css'
import Searchbar from './components/Searchbar'

const api = {
  base: "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=de209fe5c7c43d7c1f838eefcd2d0744"
}

const App = () => {
  return (
    <>
      <Searchbar/>
    </>
  )
}

export default App