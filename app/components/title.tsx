import { montserratBold } from "../lib/fonts";

export function Title({text}: {text: string}) {
  return (
    <div className="w-full flex flex-row items-center justify-center gap-3">
      <div className="grow h-1 bg-white rounded-full"></div>
      <h1 className={`text-2xl uppercase text-center ${montserratBold.className}`}>{text}</h1>
      <div className="grow h-1 bg-white rounded-full"></div>
    </div>
  );
}