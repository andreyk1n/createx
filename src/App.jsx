// src/App.jsx
import React from "react";
import Header from "./template-parts/partials/Header";
import Footer from "./template-parts/partials/Footer";

function App() {
  return (
    <div>
      <Header />
      <div style={{ width: "100%", height: "500px", background: 'gray', padding: '150px', }}>empty block</div>
      <Footer />
    </div>
  );
}

export default App;
