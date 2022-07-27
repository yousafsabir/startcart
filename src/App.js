import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Catagory from "./pages/Catagory";
import Trending from "./pages/Trending";
import Login from "./pages/Login";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/catagory" element={<Catagory />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}

export default App;
