import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-2xl border-2 border-[#2a2a2a] text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F8CFF] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#4F8CFF] px-6 py-3 text-white shadow-[6px_6px_0px_#1f3a72] hover:-translate-y-1 hover:shadow-[8px_8px_0px_#1f3a72]",
        secondary:
          "bg-[#161616] px-6 py-3 text-white shadow-[6px_6px_0px_#0d0d0d] hover:-translate-y-1 hover:shadow-[8px_8px_0px_#0d0d0d]",
        ghost: "bg-transparent px-4 py-2 text-zinc-300 hover:text-white",
      },
      size: {
        default: "h-11",
        sm: "h-9 rounded-xl px-4",
        lg: "h-12 rounded-2xl px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
