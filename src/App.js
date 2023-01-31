import React from 'react';
import './App.css';
import ReactDOM from "react-dom/client";
import Login from './Pages/login.js'
import Buyer from './Pages/buyer.js'
import Seller from './Pages/seller.js'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/buyer",
    element: <Buyer />,
  },
  {
    path: "/seller",
    element: <Seller />,
  },
  
]);


function App() {
  return (
    <React.StrictMode>
     <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
