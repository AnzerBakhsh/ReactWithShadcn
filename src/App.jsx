import React from 'react'
import { Button } from './components/ui/button'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from "@/components/theme-provider"
import AppLayout from './Layouts/app-layout'
import Landingpage from './pages/Landingpage'
import Onboarding from './pages/Onboarding'
import Postjob from './pages/post-job'

import Jobpage from './pages/Job'
import Login from './pages/Login' 

const route = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Landingpage />,
      },
      {
        path: "/Onboarding",
        element: <Onboarding />,
      },
    
      {
        path: "/job/",
        element: <Jobpage />,
      },
      {
        path: "/post-job",
        element: <Postjob />,
      },
      {
        path: "/login", 
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={route} />
      </ThemeProvider>
    </>
  );
}

export default App;
