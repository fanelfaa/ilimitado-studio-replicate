"use client";

import { useMarque } from "@/components/marque";
import {
  type MotionValue,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function WhatWeveDoneSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    layoutEffect: false,
    offset: ["start end", "end start"],
  });

  const { transform: marqueeTransform } = useMarque({ speed: 1 });
  return (
    <section className="py-[120px] relative" ref={ref}>
      <div className="py-[120px] absolute z-0 top-1/2 max-w-full overflow-hidden">
        <motion.div className="flex flex-row flex-nowrap">
          {Array.from(Array(2).keys()).map((index) => (
            <motion.div
              key={`duplicate-${index}`}
              className="flex will-change-transform text-[240px] leading-none font-sinisuka text-nowrap"
              style={{ transform: marqueeTransform, color: "rgb(36, 36, 35)" }}
            >
              {Array.from(Array(4).keys()).map((i) => (
                <span key={i}>We Build Good Thing&nbsp;</span>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="container px-11 py-[120px] grid grid-cols-12">
        <div className="flex flex-col items-center justify-start px-4 col-span-10 col-start-2">
          <h2>Our Projects</h2>
          <h3 className="font-sinisuka text-[64px] text-center mt-8 leading-[74px] font-semibold">
            What We've Done
          </h3>
          <p className="text-2xl max-w-[768px] mt-12 text-center">
            We're experts in Webflow, WordPress and WooCommerce — so regardless
            if you want a simple brochure, an ever-extensible back-end, or to
            sell a shed load of cookies on the daily, we got you!
          </p>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-[45px] grid grid-cols-2 gap-[30px] [&_a:nth-of-type(even)]:top-[120px]">
        <ProjectItem progress={scrollYProgress} range={[0, 0.7]} />
        <ProjectItem progress={scrollYProgress} range={[0, 0.7]} />
        <ProjectItem progress={scrollYProgress} range={[0.3, 1]} />
        <ProjectItem progress={scrollYProgress} range={[0.3, 1]} />
      </div>
    </section>
  );
}

const ProjectItem = ({
  progress,
  range = [0, 1],
}: { progress: MotionValue<number>; range?: [number, number] }) => {
  const cardY = useTransform(progress, range, ["-8%", "8%"]);
  const imageY = useTransform(progress, range, ["-16%", "16%"]);

  return (
    <motion.a
      className="relative group has-image mb-[120px]"
      style={{ y: cardY }}
    >
      <div className="overflow-hidden rounded-[30px] pt-[100%] bg-red-100 relative">
        <div className="absolute z-[1] size-[120px] rounded-full grid place-content-center bg-[#674399] top-[15px] right-[15px]">
          <Image
            src="https://ilimitado.studio/assets/images/svg/woocommerce.svg"
            width={40}
            height={40}
            alt="WooCommerce"
          />
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute w-full"
            style={{ height: "120%", top: "-10%", left: 0, y: imageY }}
          >
            <Image
              src="https://ilimitado.studio/assets/images/webp/ooh-and-aah_featured_thumbnail.webp"
              alt="Ooh & Aah; Featured Image"
              fill
              style={{ objectFit: "cover" }}
            />
          </motion.div>
        </div>
      </div>
      <div className="pt-12">
        <div className="content">
          <h6 className="mb-2 text-[#4b4e4b]">eCommerce, WooCommerce.</h6>
          <h3 className="text-4xl text-foreground font-semibold">
            Ooh &amp; Aah
          </h3>
          <span
            className="relative text_transform text-base mt-8 text-[#4b4e4b] overflow-clip"
            data-replace="View Project"
          >
            <span className="group-hover:-translate-y-full transition-transform duration-500">
              View Project
            </span>
            <span
              className="iconify ion--arrow-forward ml-1 text-foreground"
              style={{
                transform: "rotate(-45deg)",
              }}
            />
            <span
              aria-hidden
              className="absolute top-full left-0 text-foreground group-hover:-translate-y-full transition-transform duration-300"
            >
              View Project
            </span>
          </span>
        </div>
      </div>
    </motion.a>
  );
};
