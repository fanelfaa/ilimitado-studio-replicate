"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";

export function ProjectSpotlightSection() {
  const id = useId();
  const sectionRef = useRef(null);
  const itemWrapperRef = useRef<HTMLDivElement>(null);
  const [itemWrapperWidth, setItemWrapperWidth] = useState(0);

  useEffect(() => {
    function updateWidth() {
      if (itemWrapperRef.current) {
        const w = itemWrapperRef.current.getBoundingClientRect().width;
        setItemWrapperWidth(w);
      }
    }
    updateWidth();

    document.addEventListener("resize", updateWidth);
    return () => {
      document.removeEventListener("resize", updateWidth);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    layoutEffect: false,
    offset: ["start start", "end end"],
  });

  const innerWidth = typeof window !== "undefined" ? window.innerWidth : 0;

  const itemWrapperX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -(itemWrapperWidth - innerWidth)],
  );

  return (
    <section
      className="bg-background relative"
      style={{
        height: `${800}vh`,
      }}
      ref={sectionRef}
    >
      <div className="h-screen bg-background overflow-hidden sticky top-0">
        <motion.div
          className="flex items-center h-full w-fit"
          style={{
            x: itemWrapperX,
            padding:
              "120px calc((100vw - 1200px)/ 2 + 2.8125rem) 120px calc((100vw - 1200px)/ 2 + 2.8125rem)",
          }}
          ref={itemWrapperRef}
        >
          <div
            className="text-foreground w-[60vw] my-auto"
            style={{ paddingInlineEnd: "6vw", maxWidth: 777 }}
          >
            <h2 className="font-semibold text-[64px]">Project Spotlight</h2>
            <p className="text-2xl mt-8 ml-8">
              Kali Beauty is a boutique studio based in Portadown, Northern
              Ireland, offering a wide variety of nail (acrylic, gel and BIAB),
              eyebrow, eyelash and waxing treatments.
            </p>
            <a
              className="relative text_transform text-base mt-8 ml-8 text-[#4b4e4b] overflow-clip group"
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
            </a>
          </div>
          {Array.from(Array(7).keys()).map((it) => (
            <Card key={`${id}project-card-${it}`} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Card() {
  return (
    <div
      className="text-foreground w-[60vw] relative"
      style={{ maxWidth: 777, marginInline: "6vw" }}
    >
      <div className="rounded-[30px] w-full h-full bg-pink-400 relative overflow-hidden">
        <Image
          sizes="100vw"
          src="https://ilimitado.studio/assets/images/webp/kali-beauty_project-spotlight_loyalty-cards-v2_thumbnail.webp"
          alt="A"
          width={0}
          height={0}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <a
        className="absolute bottom-[30px] right-[-30px] size-[120px] rounded-full grid place-content-center bg-black/0"
        style={{
          backdropFilter: "blur(15px)",
        }}
      >
        <span className="iconify ion--search-outline text-[32px]" />
      </a>
    </div>
  );
}
