
import Intro from "./components/Intro"
import Navbar from "./components/Navbar";
import MainApp from "./MainApp";
import { useLenis } from "./hooks/useLenis";
import "./index.css";

function App() {
  useLenis();

   


  return (
    <>
      <Navbar />
      <Intro />
      <MainApp />
    </>
  );
}

export default App;
