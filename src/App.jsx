import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DilliODilli from "./components/blogs/DilliODilli";
import HowDoSomePeopleConsumeSoLittle from "./components/blogs/HowDoSomePeopleConsumeSoLittle";
import WhatsCallingMeToWrite from "./components/blogs/WhatsCallingMeToWrite";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />

        <Route path="dilli-o-dilli" element={<DilliODilli />} />
        <Route
          path="how-do-some-people-consume-so-little?"
          element={<HowDoSomePeopleConsumeSoLittle />}
        />
        <Route
          path="whats-calling-me-to-write?"
          element={<WhatsCallingMeToWrite />}
        />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
