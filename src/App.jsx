import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Nav from './components/header/Nav'
import Home from './components/Home';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
function App() {
  const [search, setSearch] = useState("Tom and Jerry");
  const [openSideBar, setOpenSideBar] = useState(false);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Nav onSearch={setSearch} onToggle={() => setOpenSideBar(!openSideBar)}/>
              <Home search={search} openSideBar={openSideBar} setOpenSideBar={setOpenSideBar}/>
            </>
          }
        />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/signin' element={<SignIn/>} />
      </Routes>
    </>
  )
}

export default App;
