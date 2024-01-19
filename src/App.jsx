import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import { useRef, useState } from "react";
import { Html, PresentationControls, Stage } from "@react-three/drei";
import Configurator from "./components/Configurator";
import { CustomizationProvider } from "./context/Customization";

function App() {
  // const [matt, setMatt] = useState("frabic");

  return (
    <CustomizationProvider>
      <div className="App">
        <Canvas>
          <color attach="background" args={["#101010"]} />
          <Experience />
        </Canvas>
        <Configurator />
      </div>
    </CustomizationProvider>
  );
}

export default App;
