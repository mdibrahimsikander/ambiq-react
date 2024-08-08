import React from 'react';
import * as ReactDOM from "react-dom/client";
import {  createBrowserRouter,  RouterProvider} from "react-router-dom";
import './index.css';
import App from './App';
import Home from './components/Home'
import About from "./components/About";
import KeyFeatures from "./components/KeyFeatures";
import Services from "./components/Services";
import servicesData from './Data/servicesData';
import Faq from "./components/Faq";
import faqData from "./Data/faqData";
import Contact from "./components/Contact";
import Careers from "./components/Careers";
import JobApplicationForm from "./components/JobApplicationForm";
import ErrorPage from './components/Errorpage'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      { 
        path: "/", 
        element: <Home/> 
      },
      {
        path:"/about",
        element:<About />
      },
      {
        path:"/keyfeatures",
        element:<KeyFeatures />,
      },
      {
        path:"/services",
        element:<Services services={servicesData} />,
      },
      {
        path:"/faq",
        element:<Faq faqs={faqData} />,
      },
      {
        path:"/careers",
        element:<Careers />,
      },
      {
        path: "/careers/:jobLink", 
        element: <JobApplicationForm />,
      },
      {
        path:"/contact",
        element:<Contact />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
