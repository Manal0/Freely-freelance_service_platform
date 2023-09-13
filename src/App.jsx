import React from "react"
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import "./app.scss";
// import Gigs from "./pages/gigs/Gigs";
// import Gig from "./pages/gig/Gig";
// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";
// import Add from "./pages/add/Add";
// import Orders from "./pages/orders/Orders";
// import Messages from "./pages/messages/Messages";
// import Message from "./pages/message/Message";
// import MyGigs from "./pages/myGigs/MyGigs";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import GigCard from "./components/gigCard/GigCard";
import Gigs from "./pages/gigs/Gigs";
import MyGigs from "./pages/myGigs/MyGigs";
import Gig from "./pages/gig/Gig";
import Message from "./pages/message/Message";
import Messages from "./pages/messages/Messages";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar/>
        <Outlet/>
        <Footer/>
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
          path: "/gig",
          element: <Gigs />,
        },
        {
          path: "/mygigsadd",
          element: <MyGigs />,
        },
        {
          path: "/gig1",
          element: <Gig />,
        },
        {
          path: "/message",
          element: <Message />,
        },
        {
          path: "/messages",
          element: <Messages />,
        }
      ]
    },
  ]);


  return (
    <div>
    <RouterProvider router={router} />
     
    </div>
  )
}

export default App
