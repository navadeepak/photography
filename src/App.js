import "./App.css";
import HomePage from "./page/HomePage";
import Contact from "./component/Contact";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div>
        <HomePage />
        <Contact />
      </div>
    </div>
  );
}

export default App;
