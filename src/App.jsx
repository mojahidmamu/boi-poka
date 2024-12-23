import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./Component/Footer/Footer";
import NavBar from "./Component/NavBar/NavBar";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <NavBar></NavBar>

      <Outlet></Outlet>
      <Footer>9</Footer>
    </>
  );
}

export default App;
