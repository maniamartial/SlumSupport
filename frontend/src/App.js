import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Aboutus from "./pages/Aboutus";
import Post from "./pages/Post";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="contain">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/post" element={<Post />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
