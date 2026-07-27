import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Map State
  const [center, setCenter] = useState([20.35356941099252, 85.81933915604168]);
  const [zoomTo, setZoomTo] = useState(null);

  function setCenterReceive(coords) {
    setCenter(coords);
  }

  function setZoomCenterReceive(coords) {
    setZoomTo(coords);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        center,
        setCenterReceive,
        zoomTo,
        setZoomCenterReceive,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);