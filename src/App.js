import { useState } from "react";
import HomePage from "./pages/HomePage";
import CommandLine from "./components/CommandLine";
function App() {
  const [commandLine, setCommandLine] = useState(true);
  //   const [loader, setLoader] = useState(false);
  const [homePage, setHomePage] = useState(false);
  return (
    <>
      {commandLine && <CommandLine />}
      {homePage && <HomePage />}
    </>
  );
}

export default App;
