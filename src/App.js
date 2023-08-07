import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route Component={Layout} path="/">
            <Route Component={Home} index path="/" />
            <Route Component={About} path="/about" />
            <Route Component={Contact} path="/contact" />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
