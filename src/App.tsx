import React from "react";
import "./App.css";
import Header from "./components/header";
import { Outlet, Route, Routes } from "react-router-dom";
import About from "./screens/about";
import Services from "./screens/services";
import Shop from "./screens/shop";
import MainContainer from "./components/mainContainer";
import BodyContainer from "./components/bodyContainer";
import Footer from "./components/footer";

function MainUI() {
  return (
    <MainContainer>
      <Header />
      <BodyContainer>
        <Outlet />
      </BodyContainer>
      <Footer />
    </MainContainer>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainUI />}>
          <Route index path="/" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="shop" element={<Shop />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
