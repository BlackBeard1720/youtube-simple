// App.jsx
import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Nav from './components/header/Nav'
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import MainContent from './components/mainContent/MainContent';
import FavoritesPage from './components/mainContent/FavoritesPage'; // Import trang yêu thích

function App() {
  const [search, setSearch] = useState("Ba tan vlog");
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <Routes>
      <Route path="/" element={
        <>
          <Nav onSearch={setSearch} onToggle={() => setOpenSideBar(!openSideBar)}/>
          <MainContent search={search} />
        </>
      } />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/signin' element={<SignIn/>} />
    </Routes>
  )
}
export default App;