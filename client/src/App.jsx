import React, { Suspense } from "react"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Loader from "./components/Loader"
import LoadingProvider from "./context/Loading"
import Navbar from "./components/Navbar"



const Home = React.lazy(()=>import("./pages/Home")) 
const About = React.lazy(()=>import("./pages/About")) 
const Work = React.lazy(()=>import("./pages/work")) 
const Services = React.lazy(()=>import("./pages/Services")) 
const Contact = React.lazy(()=>import("./pages/Contact")) 

const NotFound = React.lazy(()=>import("./pages/NotFound"))

const Layout = ()=>{
  return(
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}


const Router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/work',
        element:<Work/>
      },
      {
        path:'/services',
        element:<Services/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
    ]
  },
  {
    path:'*',
    element:<NotFound/>

  }
])

function App() {
  return (
    <LoadingProvider>
      <Suspense fallback={<Loader/>}>
        <RouterProvider router={Router} />
      </Suspense>
    </LoadingProvider>
  )
}

export default App
