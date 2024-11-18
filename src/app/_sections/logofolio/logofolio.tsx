"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function LogofolioSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    layoutEffect: false,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      className="py-[120px] overflow-hidden min-h-screen px-[45px]"
      ref={sectionRef}
    >
      <motion.div
        className="flex flex-nowrap max-w-none w-full relative"
        style={{ flexFlow: "nowrap", left: "-14vw", x: x1 }}
      >
        <Card />
        <Card />
        <Card />
        <Card />
      </motion.div>
      <div className="h-[30px]" />
      <motion.div
        className="flex flex-nowrap max-w-none w-full relative"
        style={{ flexFlow: "nowrap", left: "-14vw", x: x2 }}
      >
        <Card />
        <Card />
        <Card />
        <Card />
      </motion.div>
    </section>
  );
}

function Card() {
  return (
    <div className="px-[15px] w-1/3" style={{ flex: "0 0 auto" }}>
      <div
        className="rounded-[30px] bg-[#47a8bd] relative"
        style={{ padding: "100% 0 0 0" }}
      >
        <Image
          src="https://ilimitado.studio/assets/images/webp/logofolio_logo-five.webp"
          alt="Logo"
          width={0}
          height={0}
          sizes="100vw"
          className="h-1/3 w-auto absolute absolute-center"
        />
      </div>
    </div>
  );
}
