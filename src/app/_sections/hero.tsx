"use client";

import { Button } from "@/components/button";
import { cx } from "@/utils/cx";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const SPEED = 3;

export function HeroSection() {
  const sectionRef = useRef(null);
  const marqueX = useMotionValue(0);
  const scrollYHistory = useRef(0);
  const [isReverse, setIsReverse] = useState<boolean>(true);

  const windowScroll = useScroll({
    layoutEffect: false,
  });

  const sectionScroll = useScroll({
    layoutEffect: false,
    target: sectionRef,
    offset: ["start start", "end start"],
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
    const dt = (d / 1000) * SPEED;

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

  const sectionX = useTransform(
    sectionScroll.scrollYProgress,
    [0, 1],
    ["0%", "-50%"],
  );

  return (
    <section className="overflow-hidden pt-[330px]">
      <div className="container px-11 grid grid-cols-12">
        <div className="flex flex-col items-center justify-start px-4 col-span-10 col-start-2">
          <h6>Webflow, WordPress, WooCommerce.</h6>
          <h2 className="[&_span]:font-sinisuka text-[64px] text-center mt-8 leading-[74px] font-semibold">
            We build the <span>websites</span> your <span>competitors</span>{" "}
            wish they had.
          </h2>
          <div className="flex justify-center mt-16 gap-x-8">
            <Button type="primary">
              Hire Us{" "}
              <span className="iconify ion--paper-plane size-[1em] ml-2" />
            </Button>
            <Button type="secondary">
              Email Us{" "}
              <span className="iconify ion--chatbubble size-[1em] ml-2" />
            </Button>
          </div>
        </div>
      </div>
      <div className="py-[120px]">
        <motion.div
          className="flex flex-row flex-nowrap"
          style={{ x: sectionX }}
        >
          {Array.from(Array(2).keys()).map((index) => (
            <motion.a
              key={`duplicate-${index}`}
              className="flex will-change-transform has-image"
              style={{ transform: marqueeTransform }}
            >
              {Array.from(Array(8).keys()).map((i) => (
                <div
                  key={`marque-${i}`}
                  className={cx(
                    "mx-4 p-[30px] rounded-[30px] bg-yellow-300 text-background font-semibold text-[48px]",
                    "w-[50vw] h-[62.5vw] sm:w-[calc(100vw/3)] sm:h-[41.6vw] lg:w-[25vw] lg:h-[31.25vw] xl:w-[20vw] xl:h-[25vw] 2xl:w-[16.6vw] 2xl:h-[20.8vw]",
                  )}
                >
                  {i + 1}
                </div>
              ))}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
