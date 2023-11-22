type WordHintPropsType = {
  hint: string;
};
export default function WordHint({ hint }: WordHintPropsType) {
  return (
    <p className="text-center">
      <strong>Suggerimento: </strong>
      {hint}
    </p>
  );
}
