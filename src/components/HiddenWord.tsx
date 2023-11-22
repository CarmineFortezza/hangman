type HiddenWordPropsType = {
  hiddenWord: string[];
};
export default function HiddenWord({ hiddenWord }: HiddenWordPropsType) {
  return (
    <div className="flex flex-row gap-2">
      {hiddenWord.length > 0 &&
        hiddenWord.map((char, index) => (
          <span key={index} className="text-2xl font-mono font-bold">
            {char}
          </span>
        ))}
    </div>
  );
}
