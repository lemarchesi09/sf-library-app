import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Details } from "./components/Details/Details";
import { Home } from "./pages/Home/Home";
import { Welcome } from "./pages/Welcome/Welcome";
import CreateBook from "./components/CreateBook/CreateBook";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Footer } from "./components/Footer/Footer";
import "./index.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/*Agregar enrutado dinamico con uso de id*/}
        <Route path="/details/:index" element={<Details />} />
        <Route path="/createbook" element={<CreateBook />} />
        <Route path="/update/:index" element={<CreateBook />} />
        <Route path="*" element={<Welcome />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
