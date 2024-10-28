import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import Login from "./components/login/Login";
import ChangePassword from "./components/changePassword/ChangePassword";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },  
      {
        path: "/changePassword",
        element: <ChangePassword />,
      },    
    ]
  }
]);

export default router;
