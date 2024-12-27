import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import Blogs from './pages/Blogs';
import About from './pages/About'
import Contact from "./pages/Contact";
import Services from './pages/Services'
import SingleBlog from './pages/SingleBlog'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/blogs",
        element: <Blogs />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/services",
        element: <Services />
      },
       {
        path: "/blogs/:id",
        element: <SingleBlog />,
        loader: ({params}) => {
          return fetch(`http://localhost:5000/blogs/${params.id}`)
        }
      }
    ],
  },
]);

  
  
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  {/* <App /> */}
  </StrictMode>,
)
