"use client";
import React from "react";
import { motion } from "framer-motion";

// Two sample images for blur background
const aboutBgImgLeft =
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"; // vineyard
const aboutBgImgRight =
  "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"; // grapes

const fadeUp = {
  hidden: { opacity: 0, y: 44 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      delay,
      ease: "easeOut",
    },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const About = () => {
  return (
    <motion.section
      id="story"
      className="relative mx-auto max-w-7xl mt-24 px-4 py-2 grid gap-2 lg:grid-cols-[1fr_1fr] lg:px-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      {/* Section soft grey background */}
      <motion.div
        className="absolute inset-0 -z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.14 }}
      />

      {/* Blurred background images between the two columns */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 z-0 w-[34rem] h-[22rem] -translate-x-1/2 -translate-y-1/2 flex justify-between gap-6">
        {/* Left blurred image */}
        <div
          className="w-1/2 h-full rounded-3xl overflow-hidden"
          style={{
            boxShadow: "0 0 48px 4px #d4af3740, 0 0 0 1.5px #d4af3720",
            filter: "blur(18px) contrast(1.11) opacity(0.27)",
            backgroundImage: `url(${aboutBgImgLeft})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Right blurred image */}
        <div
          className="w-1/2 h-full rounded-3xl overflow-hidden"
          style={{
            boxShadow: "0 0 48px 4px #d4af3740, 0 0 0 1.5px #d4af3720",
            filter: "blur(18px) contrast(1.11) opacity(0.23)",
            backgroundImage: `url(${aboutBgImgRight})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* Left - About Menada */}
      <motion.div
        className="relative h-96 pl-16 p-10 flex flex-col justify-center z-10 bg-white  border border-[#D4AF37]"
        variants={fadeUp}
        custom={0.1}
      >
        <motion.p
          className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-medium"
          variants={fadeUp}
          custom={0.15}
        >
          бидний тухай
        </motion.p>

        <motion.h3
          className="font-serif text-4xl font-semibold text-[#1A1A1A]"
          variants={fadeUp}
          custom={0.2}
        >
          Greenwien 
        </motion.h3>

        <motion.p
          className="mt-10 text-base text-[#1A1A1A] opacity-80 max-w-md"
          variants={fadeUp}
          custom={0.26}
        >
          1901 онд байгуулагдсан Домен Менада нь Өмнөд Болгарын төв хэсэгт, Тракийн хөндий гэгддэг бүс нутагт байрладаг. Дарсны үйлдвэр нь 426 га гаруй усан үзмийн талбайтай бөгөөд тус улсын өндөр чанартай дарс, спиртийн тэргүүлэгч үйлдвэрлэгчдийн нэг юм.
        </motion.p>
        <motion.div className="mt-8 flex items-center gap-8" variants={fadeUp} custom={0.3}>
          <motion.div className="h-[2px] w-20 bg-[#D4AF37] flex-shrink-0 rounded-full" variants={fadeUp} custom={0.33} />
          <motion.button
            className="text-xs uppercase tracking-[0.4em] text-[#1A1A1A] font-semibold px-6 py-2 rounded-full border border-[#D4AF37] bg-white hover:bg-[#D4AF37] hover:text-white transition-colors duration-200 shadow"
            whileHover={{
              scale: 1.07,
              backgroundColor: "#D4AF37",
              color: "#FFFFFF",
              transition: { duration: 0.14 },
            }}
            whileTap={{ scale: 0.97 }}
            variants={fadeUp}
            custom={0.38}
          >
            Дэлгэрэнгүй
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Right - History */}
      <motion.div
        className="relative h-96 pl-16 p-10 flex flex-col justify-center z-10 bg-white  border border-[#D4AF37] "
        variants={fadeUp}
        custom={0.18}
      >
        <motion.h3
          className="mt-4 font-serif text-4xl font-semibold text-[#1A1A1A]"
          variants={fadeUp}
          custom={0.24}
        >
          Түүх
        </motion.h3>
        <motion.p
          className="mt-10 text-base text-[#1A1A1A] opacity-80 max-w-md"
          variants={fadeUp}
          custom={0.28}
        >
          Домен Greenwine  дарсны үйлдвэр нь зуун гаруй жилийн турш чанартай дарс үйлдвэрлэж байна. Тус зоорийг 1901 онд Лоза Кооператив нэртэйгээр байгуулжээ. 2002 онд Домен Менада нь Францын Belvedere Group (2015 оны 7-р сард Marie Brizard Wine & Spirits Bulgaria нэртэй болсон) холдинг компанийн нэг хэсэг болжээ.
        </motion.p>
        <motion.div className="mt-8 flex items-center gap-8" variants={fadeUp} custom={0.31}>
          <motion.div className="h-[2px] w-20 bg-[#D4AF37] flex-shrink-0 rounded-full" variants={fadeUp} custom={0.35} />
          <motion.button
            className="text-xs uppercase tracking-[0.4em] text-[#1A1A1A] font-semibold px-6 py-2 rounded-full border border-[#D4AF37] bg-white hover:bg-[#D4AF37] hover:text-black transition-colors duration-200 shadow"
            whileHover={{
              scale: 1.07,
              backgroundColor: "#D4AF37",
              color: "#0a0000",
              transition: { duration: 0.14 },
            }}
            whileTap={{ scale: 0.97 }}
            variants={fadeUp}
            custom={0.39}
          >
            Дэлгэрэнгүй
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
