
import { useState } from "react";
import Intro from "./components/Intro"
import MainApp from "./MainApp";
import { useLenis } from "./hooks/useLenis";
import "./index.css";

function App() {
  useLenis();

    const [showIntro, setShowIntro] = useState(true);


  return (
    <>
      {showIntro ? (
        <Intro onFinish={() => setShowIntro(false)} />
      ) : (
        <MainApp />
      )}
    </>
  );
}

export default App;
