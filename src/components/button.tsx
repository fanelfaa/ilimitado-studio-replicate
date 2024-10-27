import { cx } from "@/utils/cx";
import type { ReactNode } from "react";

export const Button = ({
  children,
  type,
}: { children: ReactNode; type: "primary" | "secondary" }) => {
  return (
    <a
      style={{ boxSizing: "border-box" }}
      className={cx(
        "min-w-[180px] px-7 h-[60px] cursor-pointer rounded-full relative group overflow-hidden isolate [&_*]:transition-transform [&_*]:duration-700 inline-flex items-center justify-center",
        {
          "bg-primary text-background": type === "primary",
          "bg-[#242423] text-foreground hover:text-background":
            type === "secondary",
        },
      )}
    >
      <span
        className={cx(
          "absolute inset-0 rounded-full -translate-x-full group-hover:translate-x-0",
          {
            "bg-[#f6d26f]": type === "primary",
            "bg-foreground": type === "secondary",
          },
        )}
      />
      <span className="absolute top-1/2 -translate-y-1/2 size-3 bg-background rounded-full left-6 scale-0 group-hover:scale-100" />
      <span className="relative font-semibold z-30 inline-flex items-baseline justify-center group-hover:translate-x-3">
        <span className="inline-flex items-center">{children}</span>
      </span>
    </a>
  );
}