import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Details } from "./components/Details/Details";
import { Home } from "./pages/Home/Home";
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";
import { Create } from "./components/Create";
import { Welcome } from "./pages/Welcome/Welcome";
import CreateBook from "./components/CreateBook/CreateBook";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/*Agregar enrutado dinamico con uso de id*/}
        <Route path="/details" element={<Details />} />
        <Route path="/create" element={<Create />} />
        {/*****************/}
        <Route path="/createbook" element={<CreateBook />} /> {/* <------BORRAR!! */}
        {/*****************/}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
