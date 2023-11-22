import { useState } from "react";

type KeyboardButtonPropsType = {
  handleKeyClick: (key: string) => void;
  keyButton: string;
};
export default function KeyboardButton({
  handleKeyClick,
  keyButton,
}: KeyboardButtonPropsType) {
  const [disabled, setDisabled] = useState(false);
  const handleKeyButtonClick = () => {
    handleKeyClick(keyButton);
    setDisabled(true);
  };
  return (
    <button
      className="btn btn-outline btn-neutral"
      onClick={handleKeyButtonClick}
      disabled={disabled}
    >
      {keyButton}
    </button>
  );
}
