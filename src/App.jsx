import './App.css'
import { Route, Routes } from 'react-router-dom';

// import HomeLayout from './Layouts/HomeLayout.jsx';

import HomePage from './Pages/HomePage.jsx';
import Login from './Pages/Login.jsx';
import AboutUs from './Pages/AboutUs.jsx';
import Signup from './Pages/Signup.jsx';
function App() {
  

  return (
  <> 
<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/login" element={<Login />} />
<Route path="/about" element={<AboutUs />} />
<Route path="/signup" element={<Signup />} />

</Routes>

  </>
  )
}

export default App