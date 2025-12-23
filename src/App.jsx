import React from "react";
import bg from "./assets/images/bg.mp4";

function App() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      
      <video
        src={bg}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
      />

      <div className="relative z-10">
          
      </div>

    </div>
  );
}

export default App;
