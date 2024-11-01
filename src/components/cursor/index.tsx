"use client";

import { useEffect, useState } from "react";
import "./style.css";
import { cx } from "@/utils/cx";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const [isMouseLeave, setIsMouseLeave] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [targetHasImage, setTargetHasImage] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    function onMouseMove(e: MouseEvent) {
      mouseX.set(e.x);
      mouseY.set(e.y);

      const target = e.target as HTMLElement;

      if (!!target.closest("a") || target.tagName === "A") {
        setIsPointer(true);
        const el = target.closest("a") || target;
        setTargetHasImage(el.classList.contains("has-image"));
      } else if (!!target.closest("button") || target.tagName === "BUTTON") {
        setIsPointer(true);
      } else {
        setIsPointer(false);
        setTargetHasImage(false);
      }
    }

    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, [mouseX.set, mouseY.set]);

  useEffect(() => {
    function onMouseLeave() {
      setIsMouseLeave(true);
    }
    function onMouseEnter() {
      setIsMouseLeave(false);
    }

    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, []);

  const x = useSpring(mouseX, { mass: 0.2 });
  const y = useSpring(mouseY, { mass: 0.2 });

  return (
    <motion.div
      className={cx([
        "cursor",
        {
          "-hidden": isMouseLeave,
          "-pointer": isPointer,
          "-target-image": targetHasImage,
        },
      ])}
      style={{ x, y }}
    >
      <span className="text">View</span>
    </motion.div>
  );
}
