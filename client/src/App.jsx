import React, { Suspense } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Loader from "./components/Loader";
import LoadingProvider from "./context/Loading";
import { ImageKitProvider } from "@imagekit/react";

const Navbar = React.lazy(() => import("./components/Navbar"));
const Footer = React.lazy(() => import("./components/Footer"));

const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Work = React.lazy(() => import("./pages/Work"));
const Services = React.lazy(() => import("./pages/Services"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Projects = React.lazy(() => import("./components/Projects"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },   // /
      { path: "about", element: <About /> }, // /about
      { path: "work", element: <Work /> },   // /work
      { path: "services", element: <Services /> }, // /services
      { path: "contact", element: <Contact /> },   // /contact
      { path: ":city", element: <Projects /> },    // /delhi, /mumbai
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <LoadingProvider>
      <ImageKitProvider urlEndpoint="https://ik.imagekit.io/officialvriddhi/insus-infratech">
        <Suspense fallback={<Loader />}>
          <RouterProvider router={router} />
        </Suspense>
      </ImageKitProvider>
    </LoadingProvider>
  );
}

export default App;
