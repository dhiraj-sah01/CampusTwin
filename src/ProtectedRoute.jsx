import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

import LoadingAnimation from './Components/LoadingAnimation/LoadingAnimation'
import Footer from "./Components/footer/footer";
import Navbar from "./Components/navbar/navbar";

import './Components/css/Main'


export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return 
    <div className="main1">
      <Navbar/>
      <div className="main2">
        <LoadingAnimation/>
      </div>
      <Footer/>
    </div>;
  }

  return user ? children : <Navigate to="/signin" replace />;
}