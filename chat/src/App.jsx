import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import "./style.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";

function App() {
  const { girisKullanici } = useContext(AuthContext);

  const YonlendirmeKontrol = ({ children }) => {
    if (!girisKullanici) {
      return <Navigate to="/Login" />;
    }

    return children;
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <YonlendirmeKontrol>
                  <Home />
                </YonlendirmeKontrol>
              }
            />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
