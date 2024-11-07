'use client'

import { Button } from "@/components/button";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";


const Img = motion.create(Image)

export function WhoWeAreSection(){
  const sectionRef = useRef(null);


  const sectionScroll = useScroll({
    layoutEffect: false,
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yImage = useTransform(sectionScroll.scrollYProgress, [0, 1], ['-16%', '16%'])
  const yIconDribble = useTransform(sectionScroll.scrollYProgress, [0.5, 1], ['96%', '-96%'])
  const yIconSasss = useTransform(sectionScroll.scrollYProgress, [0.2, 0.7], ['-48%', '48%'])
  const yIconFigma = useTransform(sectionScroll.scrollYProgress, [0, 0.5], ['24%', '-24%'])
    return (
      <section className="pt-[120px] min-h-screen" ref={sectionRef}>
        <div className="grid grid-cols-12">
          <div className="col-span-4">
            <div
              className="overflow-hidden min-h-full relative"
              style={{ padding: "125% 0 0 0" }}
            >
              <motion.div
                className="absolute z-10 size-[120px] rounded-full bg-background flex items-center justify-center"
                style={{ top: "7%", left: "14%", y: yIconFigma }}
              >
                <span className="iconify ion--logo-figma text-foreground size-8" />
              </motion.div>
              <motion.div
                className="absolute z-10 size-[120px] rounded-full bg-background flex items-center justify-center"
                style={{ top: "35%", left: "35%", y: yIconSasss }}
              >
                <span className="iconify ion--logo-sass text-foreground size-8" />
              </motion.div>
              <motion.div
                className="absolute z-10 size-[120px] rounded-full bg-background flex items-center justify-center"
                style={{ top: "77%", left: "70%", y: yIconDribble }}
              >
                <span className="iconify ion--logo-dribbble text-foreground size-8" />
              </motion.div>
              <Img
                src="https://ilimitado.studio/assets/images/webp/who-we-are_image.webp"
                fill
                alt="Ilimitado Studio"
                className="w-full !h-[125%]"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  y: yImage,
                }}
              />
            </div>
          </div>
          <div
            className="col-span-6 col-start-6"
            style={{ padding: "120px 2.8125rem 120px .9375rem" }}
          >
            <h2 className="font-semibold text-[64px] leading-[66px] [&_span]:text-[#4b4e4b]">
              <small className="leading-[1.4]">
                We're a{" "}
                <span>
                  super-chilled
                  <sup>
                    <span className="iconify ion--snow-outline" />
                  </sup>
                </span>{" "}
                web design &amp; development collective based in{" "}
                <span>
                  Northern Ireland
                  <sup>
                    <span className="iconify ion--rainy-outline" />
                  </sup>
                </span>
                .
              </small>
            </h2>
            <div className="w-[75%]">
              <p className="mt-12 text-2xl">
                We provide bespoke <sup>1</sup>Webflow, <sup>2</sup>WordPress,{" "}
                <sup>3</sup>WooCommerce, <sup>4</sup>Static &amp; <sup>5</sup>
                Shopify solutions.
              </p>
              <p className="mt-8 text-base">
                highly motivated, enthusiastic, design-driven, dedicated to
                maintaining up-to-date industry knowledge, committed to
                continual development — we're always on top of the ever-evolving
                trends in our industry
              </p>
              <div className="flex gap-x-[30px] mt-12">
                <div className="auto cell ilimitado-studio_flex-sm ilimitado-studio_flex-hs-sm ilimitado-studio_flex-vc-sm">
                  <Button type="primary">
                    Hire Us
                    <span className="iconify ion--paper-plane ml-3" />
                  </Button>
                </div>
                <div className="auto cell ilimitado-studio_flex-sm ilimitado-studio_flex-hs-sm ilimitado-studio_flex-vc-sm">
                  <Button type="secondary">
                    Email Us
                    <span className="iconify ion--chatbubbles ml-3" />
                  </Button>
                </div>
              </div>
              <div className="h-6" />
            </div>
          </div>
        </div>
      </section>
    );
}