import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "flex min-h-[100px] w-full border-[3px] border-[#333] bg-black px-4 py-3 text-sm text-[#e0e0e0] placeholder:text-[#444] focus-visible:outline-none focus-visible:border-[#666] resize-none",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
