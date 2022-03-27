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
import { Projects } from "./pages/Projects";
// COMPONENTS
import { Nav } from "./nav/Nav";
import { Footer } from "./components/Footer";
// ANIMATIONS
import { AnimatePresence } from "framer-motion";
// ANIMATION CONTEXT
import AnimationContextProvider from "./animations/AnimationContext";


function App() {
  return (
    <div className="app">
      <AnimationContextProvider>
        <BrowserRouter>
          <Nav />
          <AnimatePresence exitBeforeEnter initial={false} >
            <Routes>
              <Route exacth path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </BrowserRouter>
      </AnimationContextProvider>
    </div>
  );
}

export default App;
