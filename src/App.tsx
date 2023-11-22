import HangmenCore from "@/components/HangmenCore";
import HangmenImage from "@/components/HangmenImage";
import { useState } from "react";

function App() {
  const [incorrectLetters, setIncorrectLetters] = useState(0);

  return (
    <>
      <HangmenImage incorrectGuess={incorrectLetters} />
      <HangmenCore
        setIncorrectLetters={setIncorrectLetters}
        incorrectLetters={incorrectLetters}
      />
    </>
  );
}

export default App;
