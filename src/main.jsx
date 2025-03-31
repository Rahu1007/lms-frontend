import './index.css' 
//Library imports 
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-hot-toast';
// import { StrictMode } from 'react'
import { Toaster } from 'react-hot-toast';
import { createRoot } from 'react-dom/client'
//css imports
import App from './App.jsx'
import { Provider } from 'react-redux';
import store from './Redux/Slices/Store.js';



createRoot(document.getElementById('root')).render(

<Provider store={store}>
  <BrowserRouter>  
  <p>lms</p>
    <App />
    <Toaster>
      {/* Add your toaster component here */}
    </Toaster>
  </BrowserRouter>
  </Provider>
);
