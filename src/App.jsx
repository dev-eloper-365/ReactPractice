import "./App.css"
import Navigation from "./components/Navigation"
import HeroSection from "./components/Hero";
import { useEffect } from "react";

const App = () =>{

  useEffect(() => {
    document.title = "Day0";
  }, []);

  return  (
          <div>
            <Navigation />
            <HeroSection />
         </div>
        );
};

export default App