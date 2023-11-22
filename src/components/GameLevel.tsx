type GameLevelPropsType = {
  level: number;
};
export default function GameLevel({ level }: GameLevelPropsType) {
  return (
    <div className="flex flex-row flex-grow ml-5 mt-5">
      <p className="font-bold text-5xl">Livello {level + 1} </p>
    </div>
  );
}
