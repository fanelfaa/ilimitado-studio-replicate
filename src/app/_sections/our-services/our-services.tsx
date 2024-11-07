"use client";

import { Button } from "@/components/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Swiper, type SwiperClass, SwiperSlide } from "swiper/react";

import "swiper/css";

export function OurServicesSection() {
  const sectionRef = useRef(null);

  const swiperLeftRef = useRef<SwiperClass | null>(null);
  const swiperRightRef = useRef<SwiperClass | null>(null);

  const sectionScroll = useScroll({
    layoutEffect: false,
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  function onBack() {
    swiperLeftRef.current?.slidePrev();
    swiperRightRef.current?.slidePrev();
  }
  function onNext() {
    swiperLeftRef.current?.slideNext();
    swiperRightRef.current?.slideNext();
  }

  const sectionX = useTransform(
    sectionScroll.scrollYProgress,
    [0, 1],
    ["25%", "-25%"],
  );

  return (
    <section ref={sectionRef}>
      <div className="container px-11 py-[120px] grid grid-cols-12">
        <div className="flex flex-col items-center justify-start px-4 col-span-10 col-start-2">
          <h2>Our Services</h2>
          <h3 className="font-sinisuka text-[64px] text-center mt-8 leading-[74px] font-semibold">
            What We Do
          </h3>
          <p className="text-2xl max-w-[768px] mt-12 text-center">
            We design, develop and deliver brands and websites that build
            awareness and drive results — small, medium or large, we believe
            your business should pack a punch.
          </p>
        </div>
      </div>
      <div className="overflow-hidden mb-[120px]">
        <motion.div className="max-w-full" style={{ x: sectionX }}>
          <div className="grid grid-cols-12 gap-x-[30px]">
            <div
              className="col-span-4 xl:col-span-3 xl:col-start-3 col-start-2 relative"
              style={{
                clipPath: "polygon(-777% 0,100% 0,100% 777%,-777% 777%)",
              }}
            >
              <Swiper
                className="h-[calc(100%-30px)] !overflow-visible"
                wrapperClass="w-fit h-full flex box-content"
                spaceBetween={30}
                onSwiper={(s) => {
                  swiperLeftRef.current = s;
                }}
                loop
                loopAdditionalSlides={2}
                initialSlide={6}
                speed={600}
              >
                {Array.from(Array(8).keys()).map((it) => (
                  <SwiperSlide
                    key={it}
                    className="mb-[30px] h-auto bg-[#242423] rounded-[30px] shrink-0"
                    virtualIndex={it}
                  >
                    <div className="p-[60px] h-[calc(100%-120px)]">
                      <div className="w-full text-[#fefefe] text-sm [&_p]:mb-4 [&_p]:leading-[28px]">
                        <h3 className="relative overflow-hidden text-ellipsis max-w-full text-[32px] leading-[42px] font-semibold mb-12">
                          Hosting &amp;
                          <br />
                          Maintenance {it}
                        </h3>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="absolute h-full w-[30px] bg-background right-0 top-0" />
            </div>
            <div
              className="col-span-6 xl:col-span-5 relative"
              style={{ clipPath: "polygon(0 0,777% 0,777% 100%,0 100%)" }}
            >
              <Swiper
                className="!overflow-visible"
                wrapperClass="w-fit h-full flex box-content"
                spaceBetween={30}
                onSwiper={(s) => {
                  swiperRightRef.current = s;
                }}
                loop
                loopAdditionalSlides={2}
                initialSlide={7}
                speed={600}
              >
                {Array.from(Array(16).keys()).map((it) => (
                  <SwiperSlide
                    key={it}
                    className="mb-[30px] h-auto bg-[#242423] rounded-[30px] shrink-0"
                  >
                    <div className="p-[60px] h-[calc(100%-120px)]">
                      <div className="w-full text-[#fefefe] text-sm [&_p]:mb-4 [&_p]:leading-[28px]">
                        <h3 className="relative overflow-hidden text-ellipsis max-w-full text-[32px] leading-[42px] font-semibold mb-12">
                          Hosting &amp;
                          <br />
                          Maintenance {it}
                        </h3>
                        <p>
                          We offer unparalleled hosting at unrivalled prices.
                        </p>
                        <p>
                          All of our websites are hosted on lightning-fast,
                          ultra-secure servers offering LiteSpeed, RAID-10, WAF,
                          anti-DDoS protection, LVE containers, backups and SSL
                          as standard — rest assured, we'll keep your website
                          sitting pretty. With globally connected tier-3
                          datacentres the world over, we can host your website
                          where we know it'll serve your customers best,
                          ensuring super-quick load times, minimal latency and
                          unmatched reliability. Should anything go wrong, we
                          promise to be on hand to give you the support you
                          need.
                        </p>
                        <p>
                          We bundle maintenance with all of our hosting to allow
                          us the freedom to implement security patches, update
                          plugins, themes and PHP versions, and resolve bugs as
                          soon as they arise — we like our websites
                          problem-free, and to be available round the clock.
                        </p>
                        <p>
                          Want to migrate from another provider? No problem,
                          we'll take care of it — and you won't have to pay a
                          penny.
                        </p>
                        <p>Hosting &amp; Maintenance starts from £250pa.</p>
                        <p>
                          *Only applicable to WordPress, WooCommerce and Static
                          Websites.
                        </p>
                      </div>
                      <div className="mt-[120px] -mb-[90px] flex">
                        <Button type="primary" className="ml-auto">
                          Enquire
                          <span className="iconify ion--paper-plane size-[1em] ml-2" />
                        </Button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <button
                onClick={onNext}
                className="absolute z-10 bottom-[68px] left-[60px] size-[60px] rounded-full overflow-hidden cursor-pointer grid place-items-center"
              >
                <span className="iconify ion--arrow-back size-[1em] text-[#fefefe]" />
              </button>
              <button
                onClick={onBack}
                className="absolute z-10 bottom-0 left-[60px] size-[60px] rounded-full overflow-hidden cursor-pointer grid place-items-center bg-primary"
              >
                <span className="iconify ion--arrow-forward size-[1em] text-[#0a0a0a]" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="container max-w-screen-xl pb-[120px]">
        <h2 className="font-semibold text-[56px] leading-[66px] text-center [&_span]:text-[#4b4e4b]">
          <small>
            A decade in the industry, a century of clients — we've seen and done
            it all. Let us guide you from{" "}
            <span>
              web zero
              <sup>
                <span className="iconify ion--skull-outline" />
              </sup>
            </span>{" "}
            to{" "}
            <span>
              web hero
              <sup>
                <span className="iconify ion--rocket-outline" />
              </sup>
            </span>
            .
          </small>
        </h2>
      </div>
    </section>
  );
}
