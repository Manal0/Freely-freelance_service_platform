import React from "react"
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import "./app.scss";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import GigCard from "./components/gigCard/GigCard";
import Gigs from "./pages/gigs/Gigs";
import MyGigs from "./pages/myGigs/MyGigs";
import Gig from "./pages/gig/Gig";
import Message from "./pages/message/Message";
import Messages from "./pages/messages/Messages";
import Orders from "./pages/orders/Orders";
import Add from "./pages/add/Add";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  QueryClient,
  QueryClientProvider, useQuery,
} from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <div className="app">
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Outlet />
          <Footer />
        </QueryClientProvider>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/mygigs",
          element: <MyGigs />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/orders",
          element: <Orders/>
        },
        {
          path: "/add",
          element: <Add/>
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ]
    },
  ]);


  return (
    <RouterProvider router={router} />
  )
}

export default App
