import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./template-parts/partials/Header";
import Footer from "./template-parts/partials/Footer";

// сторінки лежать у template-parts/pages
import About from "./template-parts/pages/About";
import Courses from "./template-parts/pages/Courses";
import Events from "./template-parts/pages/Events";
import Blog from "./template-parts/pages/Blog";
import Contacts from "./template-parts/pages/Contacts";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<About />} /> {/* головна сторінка */}
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
