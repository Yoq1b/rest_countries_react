import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Africa from "./pages/Africa";
import America from "./pages/America";
import Asia from "./pages/Asia";
import Europe from "./pages/Europe";
import Oceania from "./pages/Oceania";
import Nav from "./component/Nav";
import { useSelector } from "react-redux";
import { createContext, useState } from "react";

export const InputContext = createContext();

export const App = () => {
  const darkMode = useSelector((state) => state.mode.darkMode);
  const [name , setName] = useState("")

  return (
    <InputContext.Provider value={{ name, setName }}>
      <div
        className={
          darkMode
            ? "bg-[#f8f9f9] min-h-[1500px]"
            : "bg-[#272f3a] min-h-[1500px]"
        }
      >
        <Router>
          <Nav />
          <Home />
          <div>
            <Routes>
              <Route path="/africa" element={<Africa />} />
              <Route path="/america" element={<America />} />
              <Route path="/asia" element={<Asia />} />
              <Route path="/europe" element={<Europe />} />
              <Route path="/oceania" element={<Oceania />} />
            </Routes>
          </div>
        </Router>
      </div>
    </InputContext.Provider>
  );
};

export default App;
