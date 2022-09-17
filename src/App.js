import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import TodoApp from './components-todo/TodoApp'
import OpenCV from './components/OpenCV'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />

      {/* todo app */}
      <TodoApp />

      <OpenCV/>
      <Footer />
    </div>
  );
}

export default App;
