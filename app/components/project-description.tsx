import Markdown from "react-markdown";
import { montserratBold } from "../lib/fonts";
import { ParticlesMask } from "./particles-mask";

export function ProjectDescription({description}: {description?: string}) {
  return (
    <ParticlesMask>
      <div className="w-full p-4 rounded-3xl bg-gray-900/60">
        <Markdown
          components={{
            h2: ({children}) => <h2 className={`text-lg mb-2 ${montserratBold.className}`}>{children}</h2>,
            p: ({children}) => <p className="text-sm mb-2">{children}</p>,
            ul: ({children}) => <ul className="text-sm mb-2">{children}</ul>,
            li: ({children}) => (
              <div className="flex flex-row gap-2">
                <p>•</p>
                <p>{children}</p>
              </div>
            )
          }}
        >
          {description}
        </Markdown>
      </div>
    </ParticlesMask>
  );
}