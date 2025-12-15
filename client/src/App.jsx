import React, { Suspense } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Loader from "./components/Loader"
import LoadingProvider from "./context/Loading"


const Home = React.lazy(()=>import("./pages/Home")) 
const About = React.lazy(()=>import("./pages/About")) 
const Work = React.lazy(()=>import("./pages/work")) 
const NotFound = React.lazy(()=>import("./pages/NotFound"))




const Router = createBrowserRouter([
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
