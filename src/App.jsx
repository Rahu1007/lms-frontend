import './App.css'
import { Route, Routes } from 'react-router-dom';

// import HomeLayout from './Layouts/HomeLayout.jsx';

import HomePage from './Pages/HomePage.jsx';
import Login from './Pages/Login.jsx';
function App() {
  

  return (
  <> 
<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/login" element={<Login />} />
</Routes>

  </>
  )
}

export default App
