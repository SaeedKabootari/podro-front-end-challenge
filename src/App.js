import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import SearchIp from "./components/SearchIp/SearchIp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searchIp" element={<SearchIp />} />
      </Routes>
    </>
  );
}

export default App;
