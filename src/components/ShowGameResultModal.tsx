type ShowGameResultModalPropsType = {
  incorrectLetters: number;
  maxIncorrectLetters: 6;
  nextLevel: () => void;
};
export default function ShowGameResultModal({
  incorrectLetters,
  maxIncorrectLetters,
  nextLevel,
}: ShowGameResultModalPropsType) {
  return (
    <dialog
      id="showGameResultModal"
      className="modal modal-bottom sm:modal-middle"
      onClose={nextLevel}
    >
      <div className="modal-box">
        <h3 className="font-bold text-lg">HANGMAN</h3>
        <p className="py-4">
          {incorrectLetters === maxIncorrectLetters ? "YOU LOSE" : "YOU WIN"}
        </p>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Next</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
