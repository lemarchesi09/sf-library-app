import "./app.css";
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from "./components/Dashboard";
import { Details } from "./components/Details";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Create } from "./components/Create";
import { Welcome } from "./components/Welcome";
import CreateBook from "./components/CreateBook";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/welcome" element={<Welcome />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        {/*Agregar enrutado dinamico con uso de id*/}
        <Route path="/details" element={<Details />}/>
        <Route path="/create" element={<Create />}/>

        {/*****************/}
        <Route path="/createbook" element={<CreateBook />}/> {/* <------BORRAR!! */}
        {/*****************/}
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
