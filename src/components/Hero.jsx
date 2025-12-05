"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion as fmMotion, AnimatePresence as FMAnimatePresence } from "framer-motion";

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [active, setActive] = useState({
    title: "The new face of Menada",
    info: "A revolution in design. Tradition in quality. Bold bottles and modern blends.",
  });
  const data = [
    {
      image: "/images/bottle.png",
      title: "Denominazione",
      info: "Prosecco DOC Spumante Rosé — Glera болон Pinot Nero усан үзмээр үйлдвэрлэдэг, Veneto бүсийн Prosecco DOC талбайгаас sourced хөөстэй дарс.",
    },
    {
      image: "/images/bottle-1.png",
      title: "Sankt Laurent",
      info: "Манай Рислинг нь шинэлэг, жимслэг амтыг төгс тэнцвэрлэсэн дарс. Шүүслэг тоор, цитрус, зөөлөн эрдэслэг өнгө аяс давамгайлж, амт нь сэрүүн хөнгөн тул дахин амсууштай. Зуны үдэш, гэнэтийн зоог болон сайхан өдрүүдэд төгс зохицно.",
    },
    {
      image: "/images/bottle-2.png",
      title: "CHARDONNAY DRY",
      info: "Онцлог шинж чанартай, цэвэрхэн, elegant Chardonnay.Энэ дарс нэг хундаган дотор гүн + дэгжин байдлыг зэрэг мэдрүүлнэ.Лийр, шар алимны зөөлөн үнэр нь цэвэр эрдэслэг мэдрэмжтэй гайхалтай таардаг.",
    },
    {
      image: "/images/bottle-3.png",
      title: "RIESLING FEINHERB",
      info: "Манай Рислинг нь шинэлэг байдал ба жимслэг амтыг төгс тэнцвэржүүлсэн байдаг.",
    },
  ];
  return (
    <section className="relative mx-auto h-[1300px] sm:h-[1400px] md:h-[1000px] lg:h-[900px] max-w-7xl border border-[#D4AF37] bg-[#F5F5F5] px-2 sm:px-8 py-10 sm:py-16 shadow-[0_45px_120px_rgba(0,0,0,0.10)]">
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1600&blend=0B3D2E&sat=-100&blend-mode=multiply')",
          backgroundSize: "cover",
        }}
        aria-hidden
      />

      <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_1fr_1fr] grid-cols-1 md:grid-cols-3">
        {/* Left content */}
        <fmMotion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="flex flex-col gap-6 text-[#1A1A1A] col-span-1"
        >
          <p className="text-3xl sm:text-4xl font-serif md:text-5xl text-[#1A1A1A]">
            <span className="text-5xl sm:text-7xl md:text-8xl uppercase text-[#1A1A1A] font-bold">Green wein</span>
            <br />
            <span className="text-base sm:text-xl text-[#1A1A1A]">урам зориг авсан</span>{" "}
            <span className="text-3xl sm:text-5xl md:text-7xl font-semibold italic text-[#D4AF37]">
            танаас
            </span>
          </p>
          <div className="space-y-4 text-xs text-[#1A1A1A]">
            <p className="uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#1A1A1A]">
              Green тавтай морилно уу Бид 100 жилийн түүхтэй уламжлалыг шинэлэг арга барилтай хослуулан өндөр чанартай дарс үйлдвэрлэхийг эрмэлздэг.
            </p>
          </div>
          <div className="flex flex-row gap-2 sm:gap-3 items-center">
            <div className="h-[2px] w-12 sm:w-20 bg-[#D4AF37]" />
            <span className="text-xs uppercase text-[#1A1A1A]">
            Манай бүтээгдэхүүний <br/> багцыг үзнэ үү
            </span>
          </div>
        </fmMotion.div>

        {/* Grapes */}
        <fmMotion.div
          className="transition-transform duration-700 ease-out will-change-transform hidden md:block"
          style={{
            transform: `translateY(${scrollY * -0.1}px)`,
          }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="absolute mx-auto top-[-48vh] flex w-[35vw] -left-49 justify-center ">
            <Image
              src="/images/graoe-2.png"
              alt="Menada grapes"
              width={2000}
              height={2940}
              className="h-auto w-full drop-shadow-[0_40px_80px_rgba(212,175,55,0.12)]"
              priority
            />
          </div>
        </fmMotion.div>
        {/* Grapes for mobile */}
        <fmMotion.div
          className="transition-transform duration-700 ease-out will-change-transform block md:hidden mb-6"
          style={{
            transform: `translateY(${scrollY * -0.08}px)`,
          }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="relative mx-auto flex w-[70vw] sm:h-[30vm] justify-center ">
            <Image
              src="/images/grape.png"
              alt="Menada grapes"
              width={800}
              height={1200}
              className="h-auto w-full drop-shadow-[0_25px_60px_rgba(212,175,55,0.13)]"
              priority
            />
          </div>
        </fmMotion.div>

        {/* Right content */}
        <fmMotion.div
          className="flex flex-col gap-4 sm:gap-5 p-2 sm:p-6 text-[#1A1A1A] mt-10 sm:mt-50 col-span-1"
          initial={{ opacity: 0, x: 120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
        >
          <p className="text-2xl sm:text-4xl text-[#1A1A1A] font-bold">Greenwein-ийн шинэ царай</p>
          <div className="flex flex-row gap-2 sm:gap-4 w-full sm:w-[60%]">
            {data.map((item, idx) => (
              <fmMotion.div
                key={idx}
                onMouseEnter={() =>
                  setActive({ title: item.title, info: item.info })
                }
                onMouseLeave={() =>
                  setActive({
                    title: "Greenwein-ийн шинэ царай",
                    info: "Дизайны хувьсгал. Чанарын уламжлал. Зоригтой шилнүүд болон орчин үеийн холимог.",
                  })
                }
                className="cursor-pointer overflow-hidden"
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 4px 24px #D4AF3777",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={400}
                  className="w-14 sm:w-20 h-32 sm:h-40 object-cover transition-transform duration-300 rounded-xl border border-[#D4AF37] bg-white"
                  style={{
                    boxShadow: "0 8px 24px 0 #D4AF371A",
                    backgroundColor: "#FFFFFF",
                  }}
                />
              </fmMotion.div>
            ))}
          </div>
          <FMAnimatePresence mode="wait">
            <fmMotion.div
              key={active.title}
              className="flex flex-col gap-2 sm:gap-4 w-full sm:w-[80%] h-max sm:h-[90%]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <p
                className="text-lg sm:text-2xl md:text-3xl font-serif h-16 sm:h-20 flex items-center"
                style={{
                  color: "#1A1A1A",
                  borderLeft: "5px solid #D4AF37",
                  paddingLeft: 12,
                }}
              >
                {active.title}
              </p>
              <p className="text-xs sm:text-sm leading-relaxed min-h-[36px] text-[#1A1A1A]">
                {active.info}
              </p>
              <fmMotion.button
                whileTap={{ scale: 0.96 }}
                whileHover={{
                  backgroundColor: "#D4AF37",
                  color: "#1A1A1A",
                  scale: 1.04,
                }}
                transition={{ duration: 0.15 }}
                className="w-max rounded-full border border-[#D4AF37] bg-white px-4 sm:px-6 py-2 text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[#1A1A1A] font-semibold shadow-2xl mt-2 transition-colors hover:bg-[#D4AF37] hover:text-white"
              >
                Дэлгэрэнгүй
              </fmMotion.button>
            </fmMotion.div>
          </FMAnimatePresence>
        </fmMotion.div>
      </div>
    </section>
  );
};
