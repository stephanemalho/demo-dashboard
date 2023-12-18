import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "focus:ring-ring inline-flex h-[15px] items-center justify-center text-center rounded-full border  text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 max-2xl:h-[15px] max-2xl:text-[7px] ",
  {
    variants: {
      variant: {
        default:
          "border-green-500 bg-green-100 text-green-800 hover:bg-green-200 tracking-widest",
        secondary:
          "border-blue-500 bg-blue-100 tracking-widest text-blue-800 hover:bg-blue-200",
        destructive:
          "border-red-500 bg-red-100 tracking-widest text-red-800 hover:bg-red-200",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
