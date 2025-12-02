"use client";
import React from "react";
import { motion } from "framer-motion";

const vineyardBackdrop =
  "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=800&q=80";
const grapeCluster =
  "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=800&q=80";

export const Stats = () => {
  const bottleMarkers = Array.from({ length: 3 });

  // Animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 48 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };
  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
  };
  const fadeUpFast = {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="relative isolate overflow-hidden px-4 text-[#1A1A1A]"
      variants={fadeIn}
      initial="hidden"
      animate="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.15 }}
      />

      <motion.div
        className="relative mx-auto max-w-7xl overflow-hidden border px-6 py-12 shadow-[0_40px_120px_rgba(212,175,55,0.09)] bg-[#F5F5F5] sm:px-10 lg:px-16"
        style={{ borderColor: "#D4AF37" }}
        initial={{ opacity: 0, scale: 0.98, y: 36 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        {/* Atmospheric layers */}
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute inset-y-8 left-24 right-6 rounded-[48px] bg-cover bg-center opacity-20 blur-[1.5px]"
            style={{ backgroundImage: `url(${vineyardBackdrop})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 1.5, delay: 0.25 }}
          />
          <motion.div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, #FFFFFFEE, #F5F5F5CC, #FFFFFFF0)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.div
            className="absolute -left-48 top-0 rounded-full border bg-cover bg-center opacity-40"
            style={{
              borderColor: "#D4AF37bb",
              backgroundImage: `url(${vineyardBackdrop})`,
              height: "28rem",
              width: "28rem",
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 1.3, delay: 0.55, type: "spring" }}
          />
          <motion.div
            className="absolute -left-36 bottom-16 h-4 w-4 rounded-full blur-[2px] bg-[#D4AF37]/70"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          />
        </div>

        <motion.p
          className="rotate-180 pointer-events-none absolute left-6 top-1/2 -translate-y-1/2 text-[0.65rem] uppercase tracking-[0.55em] text-[#D4AF37]"
          style={{
            writingMode: "vertical-rl",
            letterSpacing: "0.55em",
          }}
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
        >
          <span className="text-3xl font-extrabold text-[#D4AF37]">8000 tons</span>{" "}
          of wine produced per year
        </motion.p>

        <motion.div
          className="relative grid gap-12 items-center lg:grid-cols-[1.15fr_0.85fr]"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left (number/stat) */}
          <motion.div className="space-y-10 ml-10" variants={fadeInUp}>
            <motion.div variants={fadeUpFast}>
              <span
                className="text-[6.25rem] font-serif font-black leading-none text-[#D4AF37]"
              >
                80
              </span>
              <span
                className="text-4xl align-top font-serif font-black text-[#D4AF37]"
              >
                %
              </span>
            </motion.div>

            <motion.div
              className="max-w-md space-y-4 text-sm uppercase tracking-[0.35em] text-[#1A1A1A]"
              variants={fadeIn}
            >
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                дарс үйлдвэрлэх процесст ашигладаг эдлэн газарт ургуулсан усан үзэм
              </motion.p>
              <motion.div
                className="h-px w-20 bg-[#D4AF37]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              ></motion.div>
              <motion.button
                whileHover={{
                  scale: 1.06,
                  backgroundColor: "#D4AF3722",
                }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center  gap-3 rounded-full border px-6 py-3 text-[0.8rem] font-semibold tracking-[0.2em] transition border-[#D4AF37] text-[#D4AF37] bg-transparent"
              >
                Дэлгэрэнгүй
                <span
                  aria-hidden
                  className="h-1 w-8 bg-[#D4AF37]"
                />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right (cards) */}
          <motion.div className="space-y-6 text-sm text-[#1A1A1A]" variants={fadeInUp}>
            <motion.div
              className="overflow-hidden rounded-3xl border shadow-[0_20px_60px_rgba(212,175,55,0.14)] border-[#D4AF37] bg-white"
              whileHover={{
                scale: 1.025,
                boxShadow: `0 6px 32px #D4AF3744`,
              }}
              transition={{ type: "spring", stiffness: 240, damping: 19 }}
            >
              <motion.div
                className="h-48 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${grapeCluster})` }}
                initial={{ scale: 1.02, opacity: 0.8 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
              />
              <div className="space-y-3 px-6 py-5 text-[0.85rem] leading-relaxed text-[#1A1A1A]">
                <p>
                Усан үзмийн сортуудыг тухайн бүс нутгийн онцлогоос хамааран сайтар сонгодог.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="rounded-3xl border px-6 py-5 text-[0.8rem] uppercase tracking-[0.35em] border-[#D4AF37] bg-[#F5F5F5] text-[#D4AF37]"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.65, delay: 0.3 }}
            >
              <p>Наранд норсон налуу. Шаварлаг болон шохойн чулуугаар баялаг газар нутаг.</p>
              <p className="mt-3 text-[#1A1A1A]">
              Нар мандах үед тунгалаг байдал, тэнцвэрийг хадгалахын тулд хурааж авдаг.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mt-16 flex flex-wrap items-center justify-center gap-8 border-t pt-8 text-xs uppercase tracking-[0.55em] border-t-[#D4AF37] text-[#D4AF37]"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center gap-4 text-[#D4AF37]"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { delay: 0.25 } },
            }}
          >
            <span className="text-4xl font-black leading-none text-[#D4AF37]">
              20
            </span>
            <div className="space-y-1 text-[0.65rem]">
              <p>сая шил</p>
            </div>
            <div className="flex gap-2">
              {bottleMarkers.map((_, idx) => (
                <motion.span
                  key={`bottle-${idx}`}
                  className="h-10 w-3 rounded-t-full"
                  style={{
                    background: `linear-gradient(to bottom, #D4AF37 80%, #1A1A1A)`,
                  }}
                  initial={{ scaleY: 0.3, opacity: 0 }}
                  whileInView={{ scaleY: 1, opacity: 1 }}
                  transition={{
                    duration: 0.45,
                    delay: 0.33 + idx * 0.11,
                    ease: [0.41, 0.8, 0.3, 0.98],
                  }}
                />
              ))}
            </div>
          </motion.div>
          <motion.p
            className="text-[#1A1A1A]"
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.53 }}
          >
            жилд
          </motion.p>
          <motion.div
            className="text-[#1A1A1A]"
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.48, delay: 0.57 }}
          >
            <motion.button
              whileTap={{ scale: 0.94 }}
              whileHover={{
                scale: 1.06,
                backgroundColor: "#D4AF37",
                color: "#FFFFFF",
              }}
              className="border rounded-2xl p-3 border-[#D4AF37] bg-white text-[#D4AF37] font-bold transition-colors"
            >
              Дэлгэрэнгүй
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
