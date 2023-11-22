export function replaceMiddleLetters(word: string) {
  if (word.length <= 2) {
    return [...word];
  } else {
    return [...(word.charAt(0) + "_".repeat(word.length - 2) + word.slice(-1))];
  }
}

export const keyboard = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];
