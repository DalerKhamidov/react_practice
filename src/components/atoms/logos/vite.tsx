import qmedallion from "/src/android-chrome-512x512.png";
import { useState, useEffect } from "react";

const Vite = (): JSX.Element => {
  const [currentRotation, setCurrentRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRotation((prevRotation) => prevRotation + 0.4);
    }, 20); // Rotate by 1 degree every 100ms

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div style={{ width: '200px', height: '100px' }}>
      <img
        className="rotate"
        src={qmedallion}
        style={{ transform: `rotate(${currentRotation}deg)` }}
      />
    </div>
  );
};

export default Vite;
