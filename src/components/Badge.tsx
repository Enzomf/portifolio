import type React from "react";

export default function Badge({ children}: { children: React.ReactNode}) {
  return (
    <div
      className="px-4 py-2 transition bg-foreground rounded-md text-[12px] md:text-base flex gap-2 items-center text-white font-bold"
    >
      { children }
    </div>

  )
}

