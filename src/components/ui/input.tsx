import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, any>(
  ({ className, type, icon, ...props }, ref) => {
    return (
      <div className="relative">
        {icon && <img className="absolute top-1/2 -translate-y-1/2 left-3" src={icon} />}

        <input
          type={type}
          className={cn(
            `flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-[0.6rem] md:text-xs lg:text-sm placeholder:text-[0.6rem] md:placeholder:text-xs lg:placeholder:text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 ${icon && 'pl-9'}`,
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
