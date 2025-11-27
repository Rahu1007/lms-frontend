import './App.css'
import { Route, Routes } from 'react-router-dom';

import HomePage from './Pages/HomePage.jsx';
import Login from './Pages/Login.jsx';
import AboutUs from './Pages/AboutUs.jsx';
import Signup from './Pages/Signup.jsx';
import AllCourses from './Pages/AllCourses.jsx';
import NotFound from './Pages/NotFound.jsx';
import Profile from "./Pages/User/Profile.jsx";
import RequireAuth from './Components/RequireAuth.jsx';
import Denied from './Pages/Denied.jsx';
import ContactUs from './Pages/ContactUs.jsx';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/courses" element={<AllCourses />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/denied" element={<Denied />} />

        <Route element={<RequireAuth allowedRoles={['ADMIN', 'USER']} />}>
          <Route path="/user/profile" element={<Profile />} />
        </Route>

        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </>
  )
}

export default App