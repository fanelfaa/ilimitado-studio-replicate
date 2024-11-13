"use client";

import {
  type MotionValue,
  motion,
  useAnimation,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useId, useRef } from "react";

export function ReviewSection() {
  const id = useId();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    layoutEffect: false,
    offset: ["start end", "end start"],
  });

  const leftY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const rightY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <section ref={sectionRef}>
      <div className="container max-w-screen-xl px-[45px] py-[120px]">
        <div className="grid grid-cols-12">
          <div className="col-span-10 col-start-2">
            <h2 className="font-semibold text-[64px] leading-[66px] text-center [&_span]:text-[#4b4e4b]">
              <small className="leading-[1.4]">
                We're trusted by business owners throughout
                <span>
                  Northern Ireland
                  <sup>
                    <span className="iconify ion--rainy-outline" />
                  </sup>
                </span>
                , the <span>Republic of Ireland</span> and
                <span>Great Britain</span>.
              </small>
            </h2>
          </div>
        </div>
      </div>
      <div className="relative isolate bg-white min-h-[90vh] overflow-hidden py-[120px]">
        <div className="container max-w-screen-xl px-[45px] py-[120px] absolute z-10 top-1/2 left-0 right-0 -translate-y-1/2">
          <div className="grid grid-cols-12">
            <motion.div className="col-span-6 px-4" style={{ y: leftY }}>
              {Array.from(Array(4).keys()).map((it) => (
                <Card key={`card-${id}-${it}`} />
              ))}
            </motion.div>
            <motion.div className="col-span-6 px-4" style={{ y: rightY }}>
              {Array.from(Array(4).keys()).map((it) => (
                <Card key={`card-${id}-${it}`} />
              ))}
            </motion.div>
          </div>
        </div>
        <Image
          alt="Z"
          src="https://ilimitado.studio/assets/images/webp/what-people-say_body_background-image.webp"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "120%",
            top: "-10%",
            left: 0,
            objectFit: "cover",
            objectPosition: "center",
            position: "absolute",
          }}
        />
      </div>
      <div className="py-[120px] relative">
        <div className="container max-w-screen-xl px-[45px]">
          <div className="grid grid-cols-12">
            <div className="col-span-5 px-[15px]">
              <h2 className="text-[64px] leading-[74px] text-foreground font-semibold">
                <small style={{ fontSize: "80%" }}>
                  We're partners for the long-haul.
                </small>
              </h2>
            </div>
            <div className="col-span-6 col-start-7 px-[15px] pt-[72px]">
              <p className="text-2xl">
                We make it our mission to not only deliver inspiring digital
                products for our clients, but also to remain on-hand to support
                them on their online journeys.
              </p>
              <p className="mt-8 text-base">
                We've aimed high and delivered higher — our happy clients are
                testament to that.
              </p>
            </div>
          </div>
          <LinkGoogle sectionProgress={scrollYProgress} />
        </div>
      </div>
    </section>
  );
}

function Card() {
  return (
    <div
      style={{ padding: "45px 30px 45px 30px" }}
      className="rounded-[30px] bg-background mb-[30px]"
    >
      <span className="ilimitado-studio_flex-sm ilimitado-studio_flex-hs-sm ilimitado-studio_flex-vc-sm review_rating mb-4">
        <span className="iconify ion--star text-base text-[#f5cb5c]" />
        <span className="iconify ion--star text-base text-[#f5cb5c]" />
        <span className="iconify ion--star text-base text-[#f5cb5c]" />
        <span className="iconify ion--star text-base text-[#f5cb5c]" />
        <span className="iconify ion--star text-base text-[#f5cb5c]" />
      </span>
      <p className="text-sm mb-4 leading-7">
        “We have been working on our website for the last two months with
        Matthew — he has been a pleasure to work with. Matthew has been so
        attentive to detail, is so punctual, and is very professional in all
        aspects of his job. I look forward to working with him in the future,
        and would highly recommend him as a website designer.”
      </p>
      <p className="text-xs leading-6">Brian Mahon</p>
      <p className="text-xs leading-6 text-[#4b4e4b]">Regenesis NI</p>
    </div>
  );
}

function LinkGoogle({
  sectionProgress,
}: { sectionProgress: MotionValue<number> }) {
  const controls = useAnimation();
  const bgX = useMotionValue(0);
  const bgY = useMotionValue(0);
  const springBgX = useSpring(bgX, { stiffness: 200, mass: 1 });
  const springBgY = useSpring(bgY, { stiffness: 200, mass: 1 });
  const textX = useMotionValue(0);
  const textY = useMotionValue(0);
  const springTextX = useSpring(textX, { stiffness: 100, mass: 0.6 });
  const springTextY = useSpring(textY, { stiffness: 100, mass: 0.6 });

  const x = useTransform(sectionProgress, [0.3, 1], ["-250%", "250%"]);
  return (
    <motion.a
      className="absolute size-[120px] isolate group overflow-visible"
      style={{
        top: "-60px",
        left: "50%",
        x,
      }}
    >
      <motion.span
        className="absolute inset-0 grid place-content-center z-10"
        style={{
          x: springTextX,
          y: springTextY,
        }}
      >
        <span className="iconify ion--logo-google text-[32px] text-background" />
      </motion.span>
      <motion.span
        className="absolute inset-0 rounded-full bg-primary overflow-clip"
        style={{
          x: springBgX,
          y: springBgY,
        }}
      >
        <motion.span
          className="absolute inset-0 rounded-full bg-[#f6d26f] translate-y-full"
          animate={controls}
          variants={{
            hoverEnter: {
              y: "0%",
              transition: {
                duration: 0.3,
                mass: 0.2,
                damping: 0,
              },
            },
            hoverLeave: {
              y: "-100%",
              transition: {
                duration: 0.5,
              },
            },
            initial: {
              y: "100%",
              transition: {
                duration: 0,
              },
            },
          }}
        />
      </motion.span>
      <span
        className="inset-0 absolute z-10"
        onMouseMove={(e) => {
          const elRect = e.currentTarget.getBoundingClientRect();
          const center = { x: elRect.x + 60, y: elRect.y + 60 };
          const distance = {
            x: e.clientX - center.x,
            y: e.clientY - center.y,
          };
          bgX.set(distance.x - distance.x * 0.5);
          bgY.set(distance.y - distance.y * 0.5);
          textX.set(distance.x - 12);
          textY.set(distance.y - 12);
        }}
        onMouseLeave={() => {
          bgX.set(0);
          bgY.set(0);
          textX.set(0);
          textY.set(0);
          controls.start("hoverLeave").then(() => {
            controls.start("initial");
          });
        }}
        onMouseEnter={() => {
          controls.start("hoverEnter");
        }}
      />
    </motion.a>
  );
}
