import "./App.css";

import { Route, Routes } from "react-router-dom";

import Header from "./Pages/Header/Header";
import Login from './Pages/Login/Login'
import Footer from './Pages/Footer/Footer'
import Body from "./Pages/Body/index";
import Search from "./Pages/Search/Search";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Login></Login>
      <Routes>
        <Route path="/*" element={<Body />} />
        <Route path="/search/:pathName" element={<Search />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
