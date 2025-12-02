"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export const Region = () => {
  const grapeVarietals = ["Cabernet Sauvignon", "Merlot", "Rubin", "Mavrud"];

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.89, ease: "easeOut" } }
  };
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.7, ease: "easeOut" } }
  };
  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.16,
      },
    },
  };

  return (
    <motion.section
      id="region"
      className="relative mx-auto mt-10 max-w-7xl min-h-[770px] px-4 lg:px-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
      variants={staggerContainer}
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 -z-30 "
        variants={fadeIn}
      />
      <motion.div
        className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1439127989242-c3749a012eac?auto=format&fit=crop&w=1400&q=60')] opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
        {/* LEFT - ABOUT REGION PANEL */}
        <motion.article
          className="relative col-span-1 h-[450px] overflow-hidden border w-[630px] border-[#D4AF37] bg-white px-10 py-12 shadow-[0_25px_70px_rgba(212,175,55,0.08)]"
          variants={fadeUp}
        >
          <motion.div
            className="pointer-events-none absolute inset-0 opacity-25"
            variants={fadeIn}
          >
            <motion.div
              className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505739775417-85d84b0b8a2d?auto=format&fit=crop&w=800&q=70')] bg-cover bg-center mix-blend-soft-light"
              variants={fadeIn}
            />
          </motion.div>

          <motion.p
            className="rotate-180 text-[3.6rem] font-serif uppercase flex flex-col tracking-[0.2em] text-[#D4AF37] absolute left-5 top-1/2 -translate-y-1/2 "style={{ writingMode: "vertical-rl" }}
            variants={fadeUp}
          >
            <span className="text-xs tracking-[0.2em] text-[#1A1A1A] opacity-70">
            Тухай
            </span>
            бүснутаг
          </motion.p>

          <motion.div className="ml-70 space-y-4 mt-4" variants={fadeUp}>
            <motion.p className="text-xs tracking-[0.2em] text-[#1A1A1A] w-60 leading-relaxed" variants={fadeUp}>
            Стара Загора бүс нутгийн уур амьсгал, хөрсний олон янз байдал нь усан үзмийн тариалалт, дарс үйлдвэрлэлийн асар их боломжийг олгодог. <br />
              <br />
              Манай дарсны үйлдвэр нь гайхалтай газарзүй, цаг агаарын нөхцөл байдлаас ашиг тус хүртдэг бөгөөд энэ нь бидэнд олон улсын усан үзэм
            </motion.p>
            <motion.button
              className="inline-flex items-center gap-4 text-[0.6rem] uppercase tracking-[0.45em] text-[#D4AF37] hover:bg-[#D4AF37]/10 hover:shadow-md transition"
              whileHover={{
                scale: 1.08,
              }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.13 }}
            >
              <span className="h-px w-16 bg-[#D4AF37]" />
              Дэлгэрэнгүй
            </motion.button>
          </motion.div>
        </motion.article>

        {/* CENTER — BIG MENADA CARD (OVERLAP) */}
        <motion.article
          className="absolute left-[550px] top-[370px] -translate-x-[40%] w-[640px] h-[420px] border border-[#D4AF37] bg-[#F5F5F5] shadow-[0_35px_90px_rgba(212,175,55,0.15)] z-20 rounded-sm"
          variants={fadeUp}
        >
          <motion.div
            className="absolute inset-0 opacity-80 bg-[url('https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F5F5F5]/60 to-[#F5F5F5]/80"
            variants={fadeIn}
          />

          <motion.div className="relative grid grid-cols-[1fr_auto] p-10" variants={fadeUp}>
            <motion.div className="space-y-3" variants={fadeUp}>
              <motion.p className="text-xs uppercase tracking-[0.45em] text-[#D4AF37]" variants={fadeUp}>
              Чанартай дарс
              </motion.p>
              <motion.h3 className="font-serif text-5xl tracking-[0.25em] text-[#1A1A1A] drop-shadow-[0_10px_20px_rgba(212,175,55,0.13)]" variants={fadeUp}>
                Greenwein
              </motion.h3>
              <motion.p className="text-sm font-bold text-[#1A1A1A] opacity-80" variants={fadeUp}>
              Тракийн хөндийгөөс
              </motion.p>
            </motion.div>

            <motion.div
              className="absolute flex items-end justify-center left-[130px] -bottom-60 translate-x-[120px] translate-y-[40px]"
              initial={{ opacity: 0, y: 70, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.1, ease: "easeOut", delay: 0.35 }}
            >
              <Image
                src="/images/glass.png"
                alt="Wine glass"
                width={260}
                height={360}
                className="h-80 w-auto drop-shadow-[0_35px_65px_rgba(212,175,55,0.11)]"
              />
            </motion.div>
          </motion.div>
        </motion.article>

        {/* RIGHT - GRAPE VARIETALS */}
        <motion.aside
          className="relative col-start-3 mt-10 h-[480px] overflow-hidden border ml-15 border-[#D4AF37]/60 bg-[#FFFFFF] text-[#1A1A1A] shadow-[0_25px_70px_rgba(212,175,55,0.13)]"
          variants={fadeUp}
        >
          <motion.div
            className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=70')] bg-cover bg-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 1.1, delay: 0.24 }}
          />
          <motion.div className="relative p-10 mt-12" variants={fadeUp}>
            <motion.p className="text-2xl font-serif font-bold text-[#D4AF37] leading-tight" variants={fadeUp}>
            Усан үзэм <br /> сортууд:
            </motion.p>
            <motion.ul className="mt-8 space-y-2 text-sm" variants={fadeUp}>
              {grapeVarietals.map((v, idx) => (
                <motion.li
                  key={v}
                  className="pb-2 flex justify-between"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.57, delay: 0.08 * idx }}
                >
                  <span className="text-[#1A1A1A]">{v}</span>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div className="mt-10 h-px w-12 bg-[#D4AF37]" variants={fadeUp} />
          </motion.div>
        </motion.aside>
      </div>
    </motion.section>
  );
};
