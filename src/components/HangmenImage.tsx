type HangmenImagePropsType = {
  incorrectGuess: number;
};
export default function HangmenImage({
  incorrectGuess,
}: HangmenImagePropsType) {
  return (
    <div className="flex h-full w-1/3">
      <img
        src={`src/assets/${5 + incorrectGuess}.png`}
        alt="Hangman Img"
        className="rounded-lg"
        width="100%"
        height="100%"
      />
    </div>
  );
}
