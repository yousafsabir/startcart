import Home from "./pages/Home";
import Store from "./pages/Store";
import { Routes, Route } from "react-router-dom";
import Catagory from "./pages/Catagory";
import Trending from "./pages/Trending";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/catagory" element={<Catagory />} />
            <Route path="/trending" element={<Trending />} />
        </Routes>
    );
}

export default App;
