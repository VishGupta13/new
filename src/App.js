import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import { Routes } from 'react-router-dom';
import Header from "./Components/Header";
import ContactUs from "./Components/ContactUs";
import Home from "./Components/Home";
import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <div >
      <BrowserRouter>
        <Header></Header>

        <Routes>
          <Route element={<Login />} path="/login" />
          <Route element={<Header />} path="/header" />
          <Route element={<ContactUs />} path="/contactus" />
          <Route element={<Home />} path="/home" />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
