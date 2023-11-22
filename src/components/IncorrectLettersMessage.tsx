type IncorrectLettersMessagePropsType = {
  incorrectLetters: number;
  maxIncorrectLetters: number;
};
export default function IncorrectLettersMessage({
  incorrectLetters,
  maxIncorrectLetters,
}: IncorrectLettersMessagePropsType) {
  return (
    <p className="text-center">
      <strong>Lettere sbagliate: </strong>
      {incorrectLetters}/{maxIncorrectLetters}
    </p>
  );
}
