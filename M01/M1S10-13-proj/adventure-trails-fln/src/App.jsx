import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { TrilhasContextProvider } from "./context/TrilhasContext";

function App() {
  return (
    <TrilhasContextProvider>
      <div
        className="appDiv"
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          minHeight: "100vh",
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </div>
    </TrilhasContextProvider>
  );
}

export default App;
