import Navbar from "./components/NavBar/navbar.jsx";
import Hero from "./components/Hero/hero.jsx";
import About from "./components/About/about.jsx";
import Skill from "./components/Skill/skills.jsx";
import Project from "./components/Project/project.jsx";
import Contact from "./components/Contact/contact.jsx";
import style from "./App.module.css";

function App() {
  return (
    <div className={style.app}>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
