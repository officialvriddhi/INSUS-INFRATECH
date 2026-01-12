import React, { Suspense } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Loader from "./components/Loader";
import LoadingProvider from "./context/Loading";
import { ImageKitProvider } from "@imagekit/react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import SEO from './utils/Seo.jsx'

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
      { path: "services", element: <Services /> }, // /services
      { path: "contact", element: <Contact /> },   // /contact
      { path: "work", element: <Work />},   // /work
      { path: "work/:city", element: <Projects /> },    // /delhi, /mumbai
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <HelmetProvider>
      <LoadingProvider>
        <ImageKitProvider urlEndpoint="https://ik.imagekit.io/officialvriddhi/insus-infratech">
          <Suspense fallback={<Loader />}>
            <RouterProvider router={router} />
                  <SEO
          title="Insus Infratech | Best Building Contractors in India"
          description="Insus Infratech provides residential, commercial and industrial construction services in india with 20+ years experience."

          keywords="construction company in india, building contractor near me , insus infratech , insus , infratech , contruction ,building contractor, house construction, commercial builders , Ramvilash yadav , Biresh Yadav , best construction work in india "
          url="https://insus-infratech.vercel.app/"
          image="https://ik.imagekit.io/officialvriddhi/insus-infratech/logo3.jpeg?updatedAt=1765982258636"

          />
          </Suspense>
        </ImageKitProvider>
      </LoadingProvider>
    </HelmetProvider>
  );
}

export default App;
