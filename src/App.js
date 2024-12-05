import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import MyNavBar from "./components/MyNavBar";
import Home from "./pages/Home";
import DetailsBook from "./pages/DetailsBook";

function App() {
  return (
    <div className="App">
      <header>
        <MyNavBar></MyNavBar>
      </header>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/book/:id" element={<DetailsBook></DetailsBook>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
