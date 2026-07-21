//Importing react components
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

//Importing css files
import "./App.css";

//Importing Pages
import Login from "./pages/loginpage/loginPage";
import Home from "./pages/homePage/HomePage";
import About from "./pages/aboutPage/AboutPage";
import Features from "./pages/featuresPage/FeaturesPage";
import Contact from "./pages/contactPage/ContactPage";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="/signin" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/features" element={<Features />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
