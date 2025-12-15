import React, { Suspense } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const Home = React.lazy(()=>import("./pages/Home")) 
const About = React.lazy(()=>import("./pages/About")) 
const Work = React.lazy(()=>import("./pages/work")) 




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
    element:<h1>not found</h1>

  }
])

function App() {
  return (
    <Suspense fallback={<h1>Loading ..</h1>}>
      <RouterProvider router={Router} />
    </Suspense>
  )
}

export default App
