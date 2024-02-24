import logo from '../src/assets/img/icon.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import {Experiences} from "./components/Experiences.js";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Education } from './components/Education.js';
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Experiences/>
      <Projects />
      <Skills />
      <Education/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
