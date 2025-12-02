"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const heroBottle = "/images/bottle-3.png";
const tchergaBottle = "/images/bottle-2.png";
const menadaBottle =
  "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?auto=format&fit=crop&w=600&q=80";

// Palette
// #FFFFFF — Цагаан (Background)
// #F5F5F5 — Soft grey (Section BG)
// #D4AF37 — Gold (Accent)
// #1A1A1A — Deep Black (Text)

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
      staggerChildren: 0.16,
    },
  },
};

export const Product = () => {
  return (
    <motion.section
      id="products"
      className="relative mx-auto mt-24 max-w-7xl px-4 pb-24 text-[#1A1A1A] lg:px-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={staggerContainer}
    >
      {/* Section background color */}
      <motion.div className="absolute inset-0 -z-10 " />
      {/* Ultra-subtle background image as extra luxury feel */}
      <motion.div
        className="absolute inset-0 -z-20 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=60')] opacity-[0.025]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.025 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      />

      <motion.header
        className="mb-12 flex pl-9 items-center"
        variants={fadeUp}
        custom={0.1}
      >
        <p className="text-xl tracking-[0.20em] text-[#D4AF37] flex items-end relative">
          <span
            className="rotate-180 pointer-events-none mt-5 absolute -translate-y-2 font-bold text-[0.8rem] uppercase tracking-tight text-[#D4AF37]" style={{ writingMode: "vertical-rl" }}
          >
            Бидний
          </span>
          <span className="ml-4 text-5xl font-bold text-[#1A1A1A]">
          Бүтээгдэхүүнүүд
          </span>
        </p>
        <motion.button
          className="ml-auto rounded-full border border-[#D4AF37] bg-[#FFFFFF] px-6 py-4 text-[0.55rem] uppercase tracking-[0.55em] text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-[#FFFFFF] shadow-sm"
          variants={fadeUp}
          custom={0.21}
          whileHover={{
            scale: 1.06,
            backgroundColor: "#D4AF37",
            color: "#FFFFFF",
            boxShadow: "0 2px 16px #D4AF3744",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.14 }}
        >
          Бүх бүтээгдэхүүнийг харах
        </motion.button>
      </motion.header>

      <div className="grid gap-6 lg:grid-cols-[1.0fr_1.0fr] mt-25 h-[1000px]">
        {/* Left major promoted product */}
        <motion.article
          className="relative overflow-hidden justify-between flex flex-col border border-[#D4AF37] bg-[#FFFFFF] text-[#1A1A1A] shadow-[0_30px_90px_rgba(212,175,55,0.08)]"
          variants={fadeUp}
          custom={0.05}
        >
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_top,#F5F5F5,transparent_70%)] opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 1.5, delay: 0.1 }}
          />
          <div className="relative grid gap-6 p-10 lg:grid-cols-2 ">
            <motion.div
              className="space-y-2 h-[800px] flex flex-col justify-between items-center text-sm uppercase tracking-[0.35em]"
              variants={fadeUp}
              custom={0.10}
            >
              <div className="flex flex-col gap-2">
                <motion.p
                  className="leading-tight text-[#1A1A1A]"
                  variants={fadeUp}
                  custom={0.13}
                >
                  <Image
                    src="/images/dadova-logo.png"
                    alt="Dadova logo"
                    width={1000}
                    height={1000}
                    className="h-[90px] w-[250px] object-cover"
                  />
                </motion.p>
                <motion.span
                  className="text-[0.7rem] text-center text-[#D4AF37] font-bold"
                  variants={fadeUp}
                  custom={0.15}
                >
                  Спирт
                </motion.span>
              </div>
              <motion.div
                className="flex flex-col gap-2 items-center justify-center text-center"
                variants={fadeUp}
                custom={0.18}
              >
                <motion.p
                  className="text-[0.8rem] normal-case leading-relaxed tracking-normal text-[#1A1A1A]"
                  variants={fadeUp}
                  custom={0.20}
                >
                  Санкт Лаурент усан үзэм нь Төв Европын хамгийн өвөрмөц, дүр онцлог хүчтэй улаан дарсны сортын нэг юм.
Манай дарсыг 0.75л савлагаатай Вайсхэрбст (rosé) хэв маягаар боловсруулсан ба бүтэц, жимсний мэдрэмж, нарийн ялгарал хоорондын гайхалтай тэнцвэрийг илтгэнэ.
Хундаганд харахад энэ Санкт Лаурент rosé нь цайвар яргуй-жалам ногоондуу ягаандуу туяатай.
Үнэр нь цэвэр, нарийн бөгөөд бүрэн боловсорсон улаан жимсний өнгө давамгайлна — ялангуяа алимлан бөөрөлзгөнө, интоор, улаан тошлой — түүнчлэн маш зөөлөн халуун ногоо, чулуурхаг эрдсийн нюанс мэдрэгдэнэ.
Амт нь шинэхэн хүчиллэгтэй, тэнцвэртэй бие бүтэцтэй, жимсэн амтны нарийн ширхэглэгтэй.
 Исгэлт, боловсролтыг зэвэрдэггүй ган саванд температурыг нарийн хянаж хийсэн тул сортын өөрийн төрөлхийн дүр төрх, тухайн жилийн ургацын шинэлэг төрхийг бүрэн хадгалсан.

                </motion.p>
                <motion.button
                  className="w-max rounded-full bg-[#D4AF37] px-6 py-2 text-[0.55rem] uppercase tracking-[0.55em] text-[#FFFFFF] hover:bg-[#1A1A1A] hover:text-[#D4AF37] transition font-semibold"
                  whileHover={{
                    scale: 1.07,
                    backgroundColor: "#1A1A1A",
                    color: "#D4AF37",
                    boxShadow: "0 3px 10px #D4AF3777",
                  }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.18 }}
                  variants={fadeUp}
                  custom={0.24}
                >
                  Дэлгэрэнгүй
                </motion.button>
              </motion.div>
            </motion.div>
            <motion.div
              className="relative flex flex-col items-center "
              initial={{ opacity: 0, scale: 0.92, x: 60 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.0, delay: 0.18, ease: "easeOut" }}
            >
              <motion.div
                className="absolute left-20 top-30 h-[500px] w-[500px] opacity-70"
                initial={{ opacity: 0, scale: 0.96, y: 30 }}
                whileInView={{ opacity: 0.7, scale: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.22 }}
              >
                <Image
                  src={heroBottle}
                  alt="hero bottle"
                  width={400}
                  height={700}
                  className="h-full w-auto object-cover"
                  style={{ maxHeight: "410px", }}
                />
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            className="mt-1 flex flex-wrap items-center justify-between bg-[#F5F5F5] px-10 py-6 text-sm uppercase tracking-normal text-[#1A1A1A]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.13 }}
          >
            <div>
            Манай бүх бүтээгдэхүүнийг <span className="font-serif lowercase text-[#D4AF37]"> амтлаарай </span>
            </div>
            <div className="flex gap-2">
              {Array.from({ length: 5 }).map((_, idx) => (
                <motion.span
                  key={`bottle-silhouette-${idx}`}
                  className="h-14 w-4 rounded-t-[12px] bg-[#D4AF37]"
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.21 + idx * 0.08 }}
                />
              ))}
            </div>
          </motion.div>
        </motion.article>

        {/* Two grid products animated in */}
        <div className="grid gap-6">
          <motion.article
            className="relative grid gap-4 border border-[#D4AF37] bg-[#FFFFFF] p-8 text-[#1A1A1A] shadow-[0_25px_70px_rgba(212,175,55,0.10)] sm:grid-cols-[0.5fr_0.5fr] items-center"
            variants={fadeUp}
            custom={0.28}
            whileHover={{ scale: 1.025, boxShadow: "0 6px 24px #D4AF3733" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 180, damping: 18 }}
          >
            <motion.div
              className="item-center flex flex-col items-center"
              variants={fadeUp}
              custom={0.32}
            >
              <motion.p
                className="text-xs uppercase tracking-[0.45em] text-center text-[#D4AF37]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                CHARDONNAY
              </motion.p>
              <motion.h3
                className="mt-2 font-serif text-2xl text-[#1A1A1A] text-center"
                initial={{ opacity: 0, x: -38 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.72, delay: 0.17 }}
              >
                DRY 
              </motion.h3>
              <motion.p
                className="mt-4 text-[0.85rem] text-center leading-relaxed text-[#1A1A1A]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.23 }}
              >
                Онцлог шинж чанартай, цэвэрхэн, elegant Chardonnay.
Энэ дарс нэг хундаган дотор гүн + дэгжин байдлыг зэрэг мэдрүүлнэ.
 Лийр, шар алимны зөөлөн үнэр нь цэвэр эрдэслэг мэдрэмжтэй гайхалтай таардаг.
 Аромат нь хүчтэй, гэхдээ хэт хүнд биш.
Тансаг, нарийн мэдрэмжтэй дарсыг үнэлдэг хүмүүст яг тохирно.
 Оройн хоол, өдрийн төгсгөлд амрах үе, эсвэл “өнөөдөр зүгээр нэг сайн Chardonnay уумаар байна” гэж санагдсан ямар ч мөчид таарна.
              </motion.p>
              <motion.button
                className="w-max rounded-full mt-2 bg-[#D4AF37] px-6 py-2 text-[0.55rem] uppercase tracking-[0.55em] text-[#FFFFFF] hover:bg-[#1A1A1A] hover:text-[#D4AF37] transition font-semibold"
                whileHover={{
                  scale: 1.07,
                  backgroundColor: "#1A1A1A",
                  color: "#D4AF37",
                  boxShadow: "0 3px 10px #D4AF3744",
                }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.16 }}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Дэлгэрэнгүй
              </motion.button>
            </motion.div>
            <motion.div
              className="relative flex items-center justify-center"
              initial={{ opacity: 0, x: 42 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, delay: 0.22 }}
            >
              <motion.div
                className="absolute inset-2 rounded-full border border-[#D4AF37] opacity-60"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.6 }}
                transition={{ duration: 0.7, delay: 0.25 }}
              />
              <Image
                src="/images/bottle-2.png"
                alt="alt"
                width={160}
                height={240}
                className="relative h-48 w-auto object-contain drop-shadow-[0_30px_40px_rgba(212,175,55,0.10)]"
              />
            </motion.div>
          </motion.article>
          <motion.article
            className="relative grid gap-4 border border-[#D4AF37]  bg-[#FFFFFF] p-8 text-[#1A1A1A] shadow-[0_25px_70px_rgba(212,175,55,0.10)] sm:grid-cols-[0.5fr_0.5fr] h-[600px]"
            variants={fadeUp}
            custom={0.36}
            whileHover={{ scale: 1.022, boxShadow: "0 7px 30px #D4AF3733" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 185, damping: 17 }}
          >
            <motion.div
              className="relative flex items-center justify-center"
              initial={{ opacity: 0, x: -42 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.29 }}
            >
              <motion.div
                className="absolute inset-2 rounded-full border border-[#D4AF37] opacity-60"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.6 }}
                transition={{ duration: 0.7, delay: 0.32 }}
              />
              <Image
                src="/images/bottle-1.png"
                alt="alt"
                width={160}
                height={240}
                className="relative h-96 w-auto object-contain drop-shadow-[0_30px_40px_rgba(212,175,55,0.10)]"
              />
            </motion.div>
            <motion.div
              className="flex flex-col items-center"
              variants={fadeUp}
              custom={0.37}
            >
              <motion.p
                className="text-xs uppercase tracking-[0.45em] text-center text-[#D4AF37]"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.54, delay: 0.36 }}
              >
                RIESLING 
              </motion.p>
              <motion.h3
                className="mt-2 font-serif text-2xl text-[#1A1A1A] text-center"
                initial={{ opacity: 0, x: 36 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.69, delay: 0.37 }}
              >
                FEINHERB
              </motion.h3>
              <motion.p
                className="mt-4 text-[0.85rem] leading-relaxed text-center text-[#1A1A1A]"
                initial={{ opacity: 0, y: 21 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.74, delay: 0.4 }}
              >
               Манай Рислинг нь шинэлэг байдал ба жимслэг амтыг төгс тэнцвэржүүлсэн байдаг.
Шүүслэг тоор, цитрус жимсний өнгө аястай бөгөөд бага зэрэг эрдэс амттай.
Амт нь сэрүүн, хөнгөн бөгөөд дахин нэг балгах хүсэл төрүүлнэ.
Зуны зөөлөн орой, гэнэтийн оройн зоог, эсвэл зүгээр л сайхан өдрүүдэд —энэ Рислинг хамгийн төгс хамтрагч болно.

              </motion.p>
              <motion.button
                className="w-max rounded-full mt-2 bg-[#D4AF37] px-6 py-2 text-[0.55rem] uppercase tracking-[0.55em] text-[#FFFFFF] hover:bg-[#1A1A1A] hover:text-[#D4AF37] transition font-semibold"
                whileHover={{
                  scale: 1.07,
                  backgroundColor: "#1A1A1A",
                  color: "#D4AF37",
                  boxShadow: "0 3px 10px #D4AF3744",
                }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.16 }}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Дэлгэрэнгүй
              </motion.button>
            </motion.div>
          </motion.article>
        </div>
      </div>
    </motion.section>
  );
};
