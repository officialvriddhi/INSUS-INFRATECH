import React, { Suspense } from "react"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Loader from "./components/Loader"
import LoadingProvider from "./context/Loading"
import { ImageKitProvider } from '@imagekit/react';



const Navbar = React.lazy(()=>import("./components/Navbar"))
const Footer =  React.lazy(()=>import("./components/Footer"))
const Home = React.lazy(()=>import("./pages/Home")) 
const About = React.lazy(()=>import("./pages/About")) 
const Work = React.lazy(()=>import("./pages/Work")) 
const Services = React.lazy(()=>import("./pages/Services")) 
const Contact = React.lazy(()=>import("./pages/Contact")) 

const NotFound = React.lazy(()=>import("./pages/NotFound"))

const Layout = ()=>{
  return(
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}


const Router = createBrowserRouter([
  {
    path:'/',
    element:<>
                <Navbar/>
                <Home/>
                <About/>
                <Work/>
                <Services/>
                <Contact/>
                <Footer/>
            </>

  },
  {
    path:'/',
    element:<Layout/>,
    children:[
      // {
      //   path:'/',
      //   element:<Home/>
      // },
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
      <ImageKitProvider urlEndpoint="https://ik.imagekit.io/officialvriddhi/insus-infratech">
        <Suspense fallback={<Loader/>}>
          <RouterProvider router={Router} />
        </Suspense>
      </ImageKitProvider>
    </LoadingProvider>
  )
}

export default App
