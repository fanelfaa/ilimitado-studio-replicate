"use client"

import { cx } from "@/utils/cx";
import { motion ,useAnimationFrame,useMotionTemplate,useMotionValue,useScroll } from "framer-motion";
import { type ReactNode, useEffect, useRef, useState } from "react";


const SPEED = 3;

export default function Home() {
  const translateX = useMotionValue(0)
  const scrollYHistory = useRef(0)
  const [isReverse, setIsReverse] = useState<boolean>(true)

  const {scrollY} = useScroll({
    layoutEffect: false,
  })

  useEffect(()=>{
    scrollY.on('change', (v)=>{
      if(scrollYHistory.current < v){
        setIsReverse(false)
      }else{
        setIsReverse(true)
      }
      scrollYHistory.current = v;
    })
  },[scrollY])

  useAnimationFrame((_, d)=>{
    const dt = (d / 1000) * SPEED;

    if(isReverse){
      const next = translateX.get() + dt;
      if (next > 0) {
        translateX.set(next - 100);
      } else {
        translateX.set(next);
      }
    }else{
      const next = translateX.get() - dt;
      if (next < -100) {
        translateX.set(next + 100);
      } else {
        translateX.set(next);
      }
    }
  })

  const marqueeTransform = useMotionTemplate`translateX(${translateX}%)`
  
  return (
    <main className="pt-[330px]">
      <section className="overflow-hidden">
        <div className="container px-11 grid grid-cols-12">
          <div className="flex flex-col items-center justify-start px-4 col-span-10 col-start-2">
            <h6>Webflow, WordPress, WooCommerce.</h6>
            <h1 className="[&_span]:font-sinisuka text-[64px] text-center mt-8 leading-[74px] font-semibold">
              We build the <span>websites</span> your <span>competitors</span>{" "}
              wish they had.
            </h1>
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
          <div className="flex flex-row flex-nowrap">
            {Array.from(Array(2).keys()).map((index) => (
              <motion.div
                key={`duplicate-${index}`}
                className="flex will-change-transform"
                style={{ transform: marqueeTransform }}
                // initial={{
                //   x: isReverse ? "-100%" : "0%",
                // }}
                // animate={{
                //   x: isReverse ? "0%" : "-100%",
                //   transition: {
                //     duration: 8 * 2,
                //     // biome-ignore lint/style/useNumberNamespace: <explanation>
                //     repeat: Infinity,
                //     ease: "linear",
                //   },
                // }}
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const Button = ({children, type}:{children: ReactNode; type: 'primary' | 'secondary'}) => {
  return (
    <a
      style={{ boxSizing: "border-box" }}
      className={cx(
        "min-w-[180px] px-7 h-[60px] cursor-pointer rounded-full relative group overflow-hidden isolate [&_*]:transition-transform [&_*]:duration-700 inline-flex items-center justify-center",
        {
          "bg-primary text-background": type === "primary",
          "bg-[#242423] text-foreground hover:text-background": type === "secondary",
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