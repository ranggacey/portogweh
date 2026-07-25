import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-11 w-full border-[3px] border-[#333] bg-black px-4 py-2 text-sm text-[#e0e0e0] placeholder:text-[#444] focus-visible:outline-none focus-visible:border-[#666]",
        className
      )}
      {...props}
    />
  );
}

export { Input };
