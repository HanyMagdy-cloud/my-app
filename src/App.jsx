import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Project from "./Components/Project";
import Skills from "./Components/Skills";
import AboutMe from "./Components/About-Me";
import ContactMe from "./Components/Contact-Me";

function App() {
  return (
    <>
      <Home />
      <Header />
      <Project />
      <Skills />
      <AboutMe />
      <ContactMe />
    </>
  );
}

export default App;
