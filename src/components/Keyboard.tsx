import { keyboard } from "@/utils/utils";
import KeyboardButton from "@/components/KeyboardButton";

type KeyboardPropsType = {
  handleKeyClick: (key: string) => void;
};
export default function Keyboard(props: KeyboardPropsType) {
  return (
    <div className="flex flex-col h-1/2 gap-2">
      {keyboard.map((keyboardRow, index) => (
        <div className="flex justify-center gap-2" key={index}>
          {keyboardRow.map((key) => (
            <KeyboardButton key={key} keyButton={key} {...props} />
          ))}
        </div>
      ))}
    </div>
  );
}
