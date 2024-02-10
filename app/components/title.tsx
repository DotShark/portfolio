import { montserratBold } from "../lib/fonts";

export function Title({text}: {text: string}) {
  return (
    <div className="w-full flex flex-row items-center justify-center gap-3">
      <div className="grow h-1 bg-blue-300 rounded-full bg-gradient-to-r from-indigo-300 to-sky-300"></div>
      <h1 className={`text-2xl uppercase text-center ${montserratBold.className} bg-gradient-to-r from-sky-300 via-indigo-300 to-sky-300 text-transparent bg-clip-text`}>{text}</h1>
      <div className="grow h-1 bg-blue-300 rounded-full bg-gradient-to-r from-sky-300 to-indigo-300"></div>
    </div>
  );
}