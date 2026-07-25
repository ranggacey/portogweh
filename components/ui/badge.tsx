import * as React from "react";
import { cn } from "@/lib/utils";

function Badge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center border-[2px] border-[#333] bg-black px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#888]",
        className
      )}
      {...props}
    />
  );
}

export { Badge };
