"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  [key: string]: any;
}

const Marquee = React.forwardRef<HTMLDivElement, MarqueeProps>(
  (
    {
      className,
      reverse = false,
      pauseOnHover = false,
      children,
      vertical = false,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          "group flex overflow-hidden p-2 [--gap:1rem] [--duration:40s] gap-[--gap]",
          {
            "flex-row": !vertical,
            "flex-col": vertical,
          },
          className
        )}
      >
        <div
          className={cn("flex shrink-0 items-center gap-[--gap]", {
            "group-hover:[animation-play-state:paused]": pauseOnHover,
            "animate-marquee-horizontal": !vertical,
            "[animation-direction:reverse]": reverse,
          })}
        >
          {children}
        </div>
        <div
          aria-hidden="true"
          className={cn("flex shrink-0 items-center gap-[--gap]", {
            "group-hover:[animation-play-state:paused]": pauseOnHover,
            "animate-marquee-horizontal": !vertical,
            "[animation-direction:reverse]": reverse,
          })}
        >
          {children}
        </div>
      </div>
    );
  }
);

Marquee.displayName = "Marquee";

export default Marquee;
