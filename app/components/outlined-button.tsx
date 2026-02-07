type ButtonProps = {
  text: string,
  large?: boolean,
  leftIcon?: any,
  rightIcon?: any
};

export function OutlinedButton({text, large, leftIcon, rightIcon}: ButtonProps) {
  return (
    <button className={`px-3 ${large && "w-full"} h-10 rounded-2xl border-2 border-white hover:bg-gray-500/30 active:bg-gray-500/30 transition-colors flex flex-row gap-2 items-center justify-center cursor-pointer`}>
      {leftIcon}
      <p className="text-lg text-center uppercase">{text}</p>
      {rightIcon}
    </button>
  );
}