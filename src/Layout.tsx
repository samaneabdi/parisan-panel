import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import { Navigate, Outlet} from "react-router-dom";
import './index.css'
import Topbar from "./components/common/Topbar";
import Footer from "./components/common/Footer";

const Layout = () => {

const token = useSelector((state: RootState) => state.login.token);
if (!token) {  
  return <Navigate to="/login"/>;
}

return (
    <div className="w-full min-h-screen px-1 lg:px-4 py-3 flex flex-col">
          <Topbar />
          <div className="flex-grow my-3">
            <Outlet />
          </div>
          <div className="hidden md:block">
            <Footer />
          </div>
    </div>
  )
}

export default Layout;
