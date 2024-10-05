import React, { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router'

import Aos from "aos"
import "aos/dist/aos.css";

const App = () => {

  useEffect(function () {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
     
     
    </div>
  )
}

export default App