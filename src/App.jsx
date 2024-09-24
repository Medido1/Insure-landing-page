import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640)
    };
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <>
      <Header isMobile={isMobile}/>
      <Main />
      <Footer />
    </>
  )

}

export default App
