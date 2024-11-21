import {
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useScroll,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Options = { speed?: number };

export function useMarque(options?: Options) {
  const opt = { speed: 3, ...options };
  const marqueX = useMotionValue(0);
  const scrollYHistory = useRef(0);
  const [isReverse, setIsReverse] = useState<boolean>(true);

  const windowScroll = useScroll({
    layoutEffect: false,
  });

  useEffect(() => {
    windowScroll.scrollY.on("change", (v) => {
      if (scrollYHistory.current < v) {
        setIsReverse(false);
      } else {
        setIsReverse(true);
      }
      scrollYHistory.current = v;
    });
  }, [windowScroll.scrollY]);

  useAnimationFrame((_, d) => {
    const dt = (d / 1000) * opt.speed;

    if (isReverse) {
      const next = marqueX.get() + dt;
      if (next > 0) {
        marqueX.set(next - 100);
      } else {
        marqueX.set(next);
      }
    } else {
      const next = marqueX.get() - dt;
      if (next < -100) {
        marqueX.set(next + 100);
      } else {
        marqueX.set(next);
      }
    }
  });

  const marqueeTransform = useMotionTemplate`translateX(${marqueX}%)`;

  return {
    transform: marqueeTransform,
  };
}
