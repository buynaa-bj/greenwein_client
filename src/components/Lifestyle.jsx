"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

// Premium palette
// #FFFFFF — Цагаан (Background)
// #F5F5F5 — Soft grey (Section BG)
// #D4AF37 — Gold (Accent)
// #1A1A1A — Deep Black (Text)

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: "easeOut" } },
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
};
const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.17,
    },
  },
};

export const Lifestyle = () => {
  return (
    <motion.section
      className="relative mx-auto mt-20 max-w-[1300px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.28 }}
      variants={staggerContainer}
    >
      {/* ===================== TOP : WINE & LIFESTYLE ===================== */}
      <motion.div
        className="relative grid lg:grid-cols-3 gap-0 h-[600px] border-2 border-[#D4AF37] "
        variants={fadeUp}
      >
        {/* Left Image */}
        <motion.div
          className="relative h-[500px] lg:h-auto bg-white bg-cover bg-center "
          variants={fadeUp}
        >
          <motion.div
            className="absolute flex items-start justify-start -right-80 -bottom-21 translate-x-[2px] translate-y-[40px] z-[10]"
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.95, ease: "easeOut", delay: 0.20 }}
          >
            <Image
              src="/images/wine-hands.png"
              alt="Wine glass"
              width={600}
              height={500}
              className="h-180 w-auto drop-shadow-[0_35px_65px_rgba(0,0,0,0.12)]"
            />
          </motion.div>
        </motion.div>

        {/* Right Text */}
        <motion.div
          className="col-span-2 flex flex-col justify-center p-12 space-y-8 bg-white"
          variants={fadeUp}
        >
          <motion.h1
            className="text-[64px] sm:text-[86px] leading-none font-serif font-bold tracking-wide"
            variants={fadeUp}
          >
            <span className="text-[#D4AF37]">Wine</span>{" "}
            <span className="text-[#1A1A1A]">& Lifestyle</span>
          </motion.h1>

          <motion.div className="grid grid-cols-3 gap-10" variants={fadeUp}>
            <motion.p></motion.p>
            <motion.p className="text-[#1A1A1A] text-xs leading-relaxed max-w-sm opacity-80" variants={fadeUp}>
            Эрт дээр үеэс дарсыг бидний соёлын нэг хэсэг, сайхан амьдралын бэлгэдэл гэж үздэг байсан. Дарсны үүрэг олон зууны турш хувьсан өөрчлөгдөж, ундааг хоол хүнс, баяр ёслол, эрүүл амьдралын хэв маягийн нэмэлт хэрэгсэл болгосон.
            </motion.p>

            <motion.p className="text-[#1A1A1A] text-xs leading-relaxed max-w-sm opacity-80" variants={fadeUp}>
            Усан үзмийн тариалалт болон дарс хийх урлаг хөгжсөн. Гэсэн хэдий ч,
энэ бүх зууны турш нэг чухал тал өөрчлөгдөөгүй хэвээр байна:
дарсыг хоол хүнс, орон нутгийн уламжлал,
нийгмийн баяр ёслолтой холбосон.
            </motion.p>
          </motion.div>

          <motion.div className="pt-4 flex justify-end" variants={fadeUp}>
            <motion.a
              href="#"
              className="inline-flex items-center text-[#D4AF37] text-xs uppercase tracking-widest font-semibold hover:text-[#1A1A1A] transition-colors duration-150"
              whileHover={{
                scale: 1.08,
                color: "#D4AF37",
                letterSpacing: "0.18em",
                backgroundColor: "#F5F5F5",
                transition: { duration: 0.18 },
              }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.13 }}
            >
              <span className="mr-3 block h-[1px] w-20 bg-[#D4AF37]"></span>
              Дэлгэрэнгүй
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ===================== BOTTOM : OUR RECIPES SECTION ===================== */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-4 overflow-hidden"
        variants={fadeUp}
      >
        <motion.div
          className="relative h-[350px] bg-center flex items-end p-6 "
          variants={fadeUp}
        ></motion.div>
        {/* LEFT LARGE BLOCK – OUR RECIPES */}
        <motion.div
          className="relative bg-[#F5F5F5] h-[250px] flex flex-col justify-center items-center p-12 border-r border-[#D4AF37]"
          variants={fadeUp}
        >
          {/* background faint graphic could go here */}
          <motion.div
            className="absolute inset-0 opacity-[0.07] bg-cover bg-center"
            variants={fadeIn}
          />
          <motion.div className="relative z-10 text-center" variants={fadeUp}>
            <motion.h2 className="text-3xl font-serif text-[#D4AF37]" variants={fadeUp}>Манай жорууд</motion.h2>
            <motion.button
              className="mt-6 px-6 py-2 rounded-full bg-[#D4AF37] text-[#1A1A1A] text-xs uppercase tracking-widest shadow-lg font-semibold hover:bg-[#FFFFFF] hover:text-[#D4AF37] border border-[#D4AF37] transition-all duration-150"
              whileHover={{
                scale: 1.07,
                backgroundColor: "#FFFFFF",
                color: "#D4AF37",
                boxShadow: "0 3px 18px #D4AF3740",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15 }}
            >
              Дэлгэрэнгүй
            </motion.button>
          </motion.div>
        </motion.div>

        {/* MIDDLE – IMAGE 1 */}
        <motion.div
          className="relative h-[350px] bg-cover bg-center border-r border-[#D4AF37] flex justify-center items-center p-6"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1527169402691-feff5539e52c?q=80&w=1500')",
          }}
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.22, ease: "easeOut" }}
        >
          <motion.div className="absolute inset-0 bg-[#FFFFFF]/60" variants={fadeIn} />
          <motion.h3
            className="relative z-10 text-2xl font-serif text-[#D4AF37] drop-shadow-lg"
            variants={fadeUp}
          >
            Өргөст хэмхний коктейль
          </motion.h3>
        </motion.div>

        {/* RIGHT – IMAGE 2 */}
        <motion.div
          className="relative h-[350px] bg-cover bg-center flex justify-center items-center p-6"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1527169402691-feff5539e52c?q=80&w=1500')",
          }}
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.95, delay: 0.28, ease: "easeOut" }}
        >
          <motion.div className="absolute inset-0 bg-[#F5F5F5]/70" variants={fadeIn} />
          <motion.h3
            className="relative z-10 text-2xl font-serif text-[#D4AF37] drop-shadow-lg max-w-[180px]"
            variants={fadeUp}
          >
            Тарвас болон бөөрөлзгөнөтэй Сангриа
          </motion.h3>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
