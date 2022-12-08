
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home"
import Contact from "./Routes/Contact"
import Detail from "./Routes/Detail"
import Favs from "./Routes/Favs"
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Favs" element={<Favs />} />
        <Route path="/dentist/:id" element={<Detail />} />
      </Routes>
      <Footer />


    </div>
  );
}

export default App;
