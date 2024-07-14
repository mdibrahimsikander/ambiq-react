import "./App.css";
import React, { useEffect, useState } from "react";
import Splash from "../src/components/Splash"
import MainAppContent from "../src/components/MainComponent"


function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the time as per your requirement

    return () => clearTimeout(timer);
  }, []);


  return (
    <div>
      {loading ? <Splash/> : <MainAppContent/>}
    </div>
  );
}

export default App;
