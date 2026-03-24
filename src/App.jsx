import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Nav from './components/header/Nav'
import Home from './components/Home';
function App() {
  const [search, setSearch] = useState("Tom and Jerry");
  return (
    <>
      <Nav onSearch={setSearch}/>
      <Home search={search}/>
    </>

  )
}

export default App
