"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: "easeOut",
    },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function AboutPage() {
  const router = useRouter();

  const values = [
    {
      icon: "🍇",
      title: "Чанар",
      description: "Бид зуун жилийн туршлагатай, чанартай дарс үйлдвэрлэж байна.",
    },
    {
      icon: "🌿",
      title: "Байгаль орчин",
      description: "Байгальд ээлтэй, байгалийн аргаар ургасан усан үзмийг ашигладаг.",
    },
    {
      icon: "🏆",
      title: "Уламжлал",
      description: "Болгарын дарсны уламжлалт арга техникийг орчин үеийн технологитой нэгтгэдэг.",
    },
    {
      icon: "❤️",
      title: "Хайр",
      description: "Дарс үйлдвэрлэхэд хайр, анхаарал, хүчин чармайлт хэрэгтэй.",
    },
  ];

  const milestones = [
    { year: "1901", event: "Домен Менада байгуулагдсан" },
    { year: "2002", event: "Belvedere Group-ийн нэг хэсэг болсон" },
    { year: "2015", event: "Marie Brizard Wine & Spirits Bulgaria болсон" },
    { year: "2024", event: "Greenwien брэнд нээлтээ хийсэн" },
  ];

  return (
    <main className="min-h-screen bg-white font-sans text-[#1A1A1A] overflow-x-hidden">
      {/* Hero Section */}
      <motion.section
        className="relative w-full h-[500px] md:h-[600px] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1600')",
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A]/80 via-[#1A1A1A]/60 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center items-center text-center px-4">
          <motion.h1
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 tracking-wider"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            БИДНИЙ ТУХАЙ
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-white/90 max-w-2xl font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Зуун жилийн туршлагатай, чанартай дарс үйлдвэрлэгч
          </motion.p>
        </div>
      </motion.section>

      {/* Story Section */}
      <motion.section
        className="max-w-7xl mx-auto px-4 py-20 md:py-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div variants={fadeUp} custom={0.1}>
            <motion.span
              className="text-xs uppercase tracking-[0.4em] text-[#D4AF37] font-semibold"
              variants={fadeUp}
              custom={0.15}
            >
              БИДНИЙ ТҮҮХ
            </motion.span>
            <motion.h2
              className="text-4xl md:text-5xl font-serif font-bold text-[#1A1A1A] mt-4 mb-6"
              variants={fadeUp}
              custom={0.2}
            >
              Greenwien
            </motion.h2>
            <motion.p
              className="text-base md:text-lg text-[#1A1A1A]/80 leading-relaxed mb-6"
              variants={fadeUp}
              custom={0.25}
            >
              1901 онд байгуулагдсан Домен Менада нь Өмнөд Болгарын төв хэсэгт, Тракийн хөндий гэгддэг бүс нутагт байрладаг. Дарсны үйлдвэр нь 426 га гаруй усан үзмийн талбайтай бөгөөд тус улсын өндөр чанартай дарс, спиртийн тэргүүлэгч үйлдвэрлэгчдийн нэг юм.
            </motion.p>
            <motion.p
              className="text-base md:text-lg text-[#1A1A1A]/80 leading-relaxed"
              variants={fadeUp}
              custom={0.3}
            >
              2002 онд Домен Менада нь Францын Belvedere Group (2015 оны 7-р сард Marie Brizard Wine & Spirits Bulgaria нэртэй болсон) холдинг компанийн нэг хэсэг болжээ. Бид зуун гаруй жилийн турш чанартай дарс үйлдвэрлэж байна.
            </motion.p>
          </motion.div>
          <motion.div
            className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl"
            variants={fadeUp}
            custom={0.2}
          >
            <img
              src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=800"
              alt="Vineyard"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/40 to-transparent" />
          </motion.div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        className="bg-[#F5F5F5] py-20 md:py-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.span
              className="text-xs uppercase tracking-[0.4em] text-[#D4AF37] font-semibold"
              variants={fadeUp}
            >
              БИДНИЙ ҮНЭТ ЗҮЙЛС
            </motion.span>
            <motion.h2
              className="text-4xl md:text-5xl font-serif font-bold text-[#1A1A1A] mt-4"
              variants={fadeUp}
            >
              Бидний итгэл үнэмшил
            </motion.h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-md border border-[#E6E6E6] hover:shadow-xl transition-all duration-300 hover:border-[#D4AF37]"
                variants={fadeUp}
                custom={idx * 0.1}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-serif font-bold text-[#1A1A1A] mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-[#1A1A1A]/70 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Timeline Section */}
      <motion.section
        className="max-w-7xl mx-auto px-4 py-20 md:py-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.div className="text-center mb-16" variants={fadeUp}>
          <span className="text-xs uppercase tracking-[0.4em] text-[#D4AF37] font-semibold">
            ЦАГ ХУГАЦАА
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A1A1A] mt-4">
            Бидний замнал
          </h2>
        </motion.div>
        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#D4AF37]/30 hidden md:block" />
          <div className="space-y-12">
            {milestones.map((milestone, idx) => (
              <motion.div
                key={idx}
                className={`flex flex-col md:flex-row items-start md:items-center gap-6 ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                variants={fadeUp}
                custom={idx * 0.15}
              >
                <div className="md:w-1/2 flex items-center gap-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-[#D4AF37] flex items-center justify-center text-white font-serif font-bold text-lg shadow-lg">
                      {milestone.year}
                    </div>
                    <div className="absolute inset-0 rounded-full bg-[#D4AF37] animate-ping opacity-20" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-serif font-bold text-[#1A1A1A] mb-2">
                      {milestone.event}
                    </h3>
                  </div>
                </div>
                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A] py-20 md:py-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
            variants={fadeUp}
          >
            Бидний бүтээгдэхүүнийг үзэх
          </motion.h2>
          <motion.p
            className="text-lg text-white/80 mb-8 max-w-2xl mx-auto"
            variants={fadeUp}
            custom={0.1}
          >
            Манай дарс, спиртийн бүтээгдэхүүнүүдийг үзэж, амтлах боломжтой.
          </motion.p>
          <motion.button
            onClick={() => router.push("/details")}
            className="rounded-full px-8 py-4 text-base text-white bg-[#D4AF37] hover:bg-white hover:text-[#D4AF37] font-semibold shadow-lg border border-[#D4AF37] transition-all duration-200"
            variants={fadeUp}
            custom={0.2}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Бүтээгдэхүүн үзэх
          </motion.button>
        </div>
      </motion.section>
    </main>
  );
}
