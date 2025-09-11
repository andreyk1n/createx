// src/App.jsx
import React from "react";
import Header from "./template-parts/partials/Header";
import Hero from "./template-parts/components/Hero";
import List from "./template-parts/components/List";
import Courses from "./template-parts/components/Courses";
import Footer from "./template-parts/partials/Footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <List />
      <Courses />
      <Footer />
    </div>
  );
}

export default App;
