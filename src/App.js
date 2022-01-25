import "./App.scss";
// TRANSLATIONS
// import { useTranslation, Trans } from 'react-i18next';

// REACT ROUTER DOM
import { Route, Routes, BrowserRouter } from "react-router-dom";
// PAGES
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Skills } from "./pages/Skills";
import { Proyects } from "./pages/Proyects";
import { Nav } from "./nav/Nav";
// ANIMATIONS
import { AnimatePresence } from "framer-motion";
// ANIMATION CONTEXT
import { AnimationContext } from "./animations/AnimationContext";

function App() {
  return (
    <AnimationContext>
      <BrowserRouter component="div">
        <Nav />
        {/* <AnimatePresence exitBeforeEnter > */}
          <Routes>
            <Route exacth path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/proyects" element={<Proyects />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        {/* </AnimatePresence> */}
      </BrowserRouter>
    </AnimationContext>
  );
}

export default App;
