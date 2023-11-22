import { useEffect, useState } from "react";
import { replaceMiddleLetters } from "@/utils/utils";
import GameLevel from "@/components/GameLevel";
import HiddenWord from "@/components/HiddenWord";
import IncorrectLettersMessage from "@/components/IncorrectLettersMessage";
import Keyboard from "@/components/Keyboard";
import WordHint from "@/components/WordHint";
import words from "@/api/data.json";
import ShowGameResultModal from "./ShowGameResultModal";
import { WordStateType } from "@/models/WrodState.type";
import ThemeController from "@/components/ThemeController";
import { getIndexes, setIndexesKey } from "@/utils/HangmenCoreFunctions";

type HangmenCorePropsType = {
  setIncorrectLetters: React.Dispatch<React.SetStateAction<number>>;
  incorrectLetters: number;
};
export default function HangmenCore({
  setIncorrectLetters,
  incorrectLetters,
}: HangmenCorePropsType) {
  // Variables
  const maxLevel = 9;
  const maxIncorrectLetters = 6;
  const [data, setData] = useState<WordStateType>({
    hint: "",
    originalWord: [],
    hiddenWord: [],
  });
  const [level, setLevel] = useState(0);

  // Functions
  const loadData = (index: number) => {
    const word = words.data[index];
    const original_word = word.word;
    const hidden_word = replaceMiddleLetters(original_word);
    setData({
      hint: word.hint,
      originalWord: [...original_word],
      hiddenWord: hidden_word,
    });
  };

  const nextLevel = () => {
    if (level < maxLevel) {
      setLevel((prev) => prev + 1);
      loadData(level + 1);
      setIncorrectLetters(0);
      return;
    }
    setLevel(0);
    loadData(0);
    setIncorrectLetters(0);
  };

  useEffect(() => {
    loadData(level);
  }, []);

  const showGameResult = () => {
    (
      document.getElementById("showGameResultModal") as HTMLDialogElement
    ).showModal();
  };

  const handleKeyClick = (key: string) => {
    const indexes = getIndexes(data.originalWord, key);
    if (indexes.length > 0) {
      const newArray = setIndexesKey(data.hiddenWord, indexes, key);
      setData((prev) => ({ ...prev, hiddenWord: newArray }));
      if (newArray.join("") === data.originalWord.join("")) {
        showGameResult();
      }
      return;
    }
    setIncorrectLetters((prev) => prev + 1);
    if (incorrectLetters + 1 === maxIncorrectLetters) {
      showGameResult();
    }
  };

  return (
    <div className="flex flex-col w-2/3">
      <div className="flex">
        <GameLevel level={level} />
        <ThemeController />
      </div>
      <div className="flex flex-col h-1/2 justify-center items-center gap-5">
        <HiddenWord hiddenWord={data.hiddenWord} />
        <WordHint hint={data.hint} />
        <IncorrectLettersMessage
          incorrectLetters={incorrectLetters}
          maxIncorrectLetters={maxIncorrectLetters}
        />
      </div>
      <Keyboard handleKeyClick={handleKeyClick} key={level} />
      <ShowGameResultModal
        incorrectLetters={incorrectLetters}
        maxIncorrectLetters={maxIncorrectLetters}
        nextLevel={nextLevel}
      />
    </div>
  );
}
