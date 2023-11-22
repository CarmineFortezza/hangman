export const getIndexes = (word: string[], key: string) => {
  const indexes: number[] = [];
  word.forEach((char, index) => {
    if (char === key) {
      indexes.push(index);
    }
  });
  return indexes;
};

export const setIndexesKey = (
  word: string[],
  indexes: number[],
  key: string,
) => {
  const newArray = [...word];
  indexes.forEach((idx) => {
    newArray[idx] = key;
  });
  return newArray;
};
