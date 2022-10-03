import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import CommandLine from "./pages/CommandLine";
import LoadScreen from "./pages/LoadScreen";
function App() {
  const [commandLine, setCommandLine] = useState(true);
  const [loader, setLoader] = useState(false);
  const [homePage, setHomePage] = useState(false);
  localStorage.setItem("fullscreen", false);
  console.log("fulscreen set to" + localStorage.getItem("fullscreen"));

  useEffect(() => {
    setTimeout(() => {
      setCommandLine(false);
      setHomePage(false);
      setLoader(true);
    }, 7000);
    setTimeout(() => {
      setLoader(false);
      setHomePage(true);
    }, 12000);
  }, []);
  return (
    <>
      {commandLine && <CommandLine />}
      {loader && <LoadScreen />}
      {homePage && <HomePage />}
    </>
  );
}

export default App;
