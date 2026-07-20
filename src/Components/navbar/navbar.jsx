// Importing react components
import React, {useState, useRef}  from "react";

//Importing css files
import './navbar.css'

//Importing Assets
import logo from "../../Assets/logo.png";

//Importing functions
import SignIn_btn_clicked from "../../functions/signIn_btn_clicked"

const Navbar =  () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Reference directly targeting the native HTML5 <dialog> element
  const dialogRef = useRef(null); 

  // Safely displays the native modal view
  const openModal = (event) => {
    event.preventDefault(); // Stifles default link jumping/reloading behavior
    dialogRef.current?.showModal();
  };

  // Safely terminates the modal view
  const closeModal = () => {
    dialogRef.current?.close();
  };

  return (
    <div className="navbar-main">
      <header className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <img src={logo} alt="Logo" className="logo-image" />
            <a href="/">
              College<span>Twin</span>
            </a>
          </div>

          <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
            <a href="#about" onClick={openModal} className="nav-link">
              About
            </a>
            <dialog ref={dialogRef} className="native-modal">
              <h2>Information</h2>
              <p>This React popup was opened safely via an anchor link!</p>
              <button onClick={closeModal} className="close-btn">
                Close Window
              </button>
            </dialog>
            <a href="#features" className="nav-link">
              Features
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
            <button  onClick={SignIn_btn_clicked} className="navbar-signIn-btn">
              Get Started
            </button>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
