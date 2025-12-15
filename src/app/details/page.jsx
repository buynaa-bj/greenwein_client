"use client";
import React from "react";
import { useState , useEffect } from "react";
import { useRouter} from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import axios from "axios";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.16,
    },
  },
};
const cardVariants = {
  hidden: { opacity: 0, y: 48, scale: 0.93 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: "easeOut" },
  },
  hover: { scale: 1.045, boxShadow: "0 12px 36px #d4af371A" },
};
const imageVariants = {
  rest: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.1,
    rotate: -4,
    transition: { type: "spring", stiffness: 150 },
  },
};

export default function DetailsPage() {
  const [datas, setDatas] = useState([]);
  const { addToCart } = useCart();
  const [isLoading, setIsLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState({});
  const [search, setSearch] = useState("");
  const router = useRouter();

  const fetchData = () => {
    axios
      .get("http://localhost:8888/api/v1/product")
      .then((res) => {
        // дата-г хамгийн сүүлд нэмэгдсэн нь эхэнд гаргах (reverse)
        setDatas(res.data.data.slice().reverse());
        setIsLoading(false);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    if (isLoading) {
      fetchData();
    }
  }, [isLoading]);
  const handleSearch = () => {
    setSearch(search);
  };
  const handleCartClick = (product) => {
    addToCart();
    // router.push(`/mongol/${product._id}`);
  };
  return (
    <main className="min-h-screen font-sans bg-white flex flex-col items-stretch overflow-x-hidden text-[#1A1A1A]">
      {/* Banner with background & overlay */}
      <motion.section
        className="relative w-full max-w-7xl mx-auto mt-20"
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="relative w-full h-[450px] md:h-[620px] overflow-hidden"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.05 }}
        >
          <motion.img
            src="/images/banner.jpg"
            alt="Tcherga Banner"
            className="w-full h-full object-cover object-top grayscale-[0.85] opacity-70"
            style={{ filter: "contrast(1.08)" }}
            initial={{ scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, type: "spring" }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/75 via-[#F5F5F5b0] to-transparent border"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.15 }}
          />
        </motion.div>
        <motion.div
          className="absolute top-0 left-0 z-10 flex items-center"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.18, type: "spring", stiffness: 110 }}
        >
          <motion.div
            className="bg-white/95 h-74 w-1/3 text-[#1A1A1A] flex flex-col border border-[#D4AF37] shadow-lg rounded-br-3xl rounded-tr-xl"
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, delay: 0.3, type: "spring", stiffness: 78 }}
          >
            <span className="text-5xl uppercase p-5 font-bold text-[#D4AF37] tracking-wide">Tcherga</span>
            <span className="p-5 text-base font-light leading-relaxed text-[#1A1A1A]">
              Tcherga04 is the wine of the contemporary urban people – then, now and forever – it’s the spirit of Bulgaria in a glass of wine. A glass of wine that holds a unique blend of varieties showcasing the colourful diversity of the Bulgarian soul.
            </span>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Vertical Tab (motion fade in) */}
      <motion.div
        className="fixed left-0 top-40 z-20 hidden xl:flex flex-col items-center"
        initial={{ opacity: 0, x: -18 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
      >
        <motion.div className="flex flex-col items-center">
          <motion.span
            className="bg-white text-[#D4AF37] py-2 px-4 text-xs font-serif rounded-tr-2xl rounded-br-2xl border border-[#D4AF37] shadow tracking-widest uppercase"
            style={{
              writingMode: "vertical-rl",
              letterSpacing: "0.16em",
              fontWeight: 600,
            }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            greenwien
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Products grid with motion */}
      <motion.section
        className="w-full max-w-7xl mx-auto px-0 pt-8 pb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.14 }}
        variants={containerVariants}
      >
        <motion.div
          className="products-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-4 gap-x-8 gap-y-8"
          variants={containerVariants}
        >
          <AnimatePresence>
            {datas.map((p) => (
              <motion.div
                key={p._id || p.id}
                onClick={() => router.push(`/details/${p._id || p.id}`)}
                className={`
                  relative bg-[#F5F5F5] h-[400px] border border-[#E5E5E5] flex flex-col items-center px-5 pt-14 pb-7 group
                  shadow-[0_4px_24px_#D4AF3722] transition-all duration-200 hover:border-[#D4AF37] hover:shadow-[0_6px_30px_#D4AF3722]
                  before:content-[''] before:block before:absolute before:left-1/2 before:-top-6 before:-translate-x-1/2 before:w-[17px] before:h-[17px] before:rounded-full before:border-2 before:border-[#D4AF37] before:z-10
                  cursor-pointer
                `}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                exit="hidden"
                layout
              >
                {/* Bottle */}
                <motion.div
                  className="w-full flex items-center justify-center mb-2 mt-0 relative"
                  variants={imageVariants}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <motion.img
                    src={`http://localhost:8888/uploads/${p.image}`}
                    alt={p.name}
                    className="max-h-36 md:max-h-56 w-auto mx-auto object-contain drop-shadow-[0_8px_18px_#D4AF3723] transition-transform duration-300 group-hover:scale-105"
                    draggable={false}
                    variants={imageVariants}
                  />
                </motion.div>
                {/* Card Content */}
                <motion.div
                  className="w-full text-center mt-3"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.42, delay: 0.1 + p.id * 0.03 }}
                >
                  <div className="font-serif text-base md:text-lg font-semibold text-[#1A1A1A] uppercase mb-2 tracking-wide leading-[1.2]">
                    {p.name}
                  </div>
                  <div className="text-[#6C6344] text-xs mb-2 font-light tracking-wide">
                    {p.type}
                  </div>
                  <div className="flex justify-center gap-1 mt-2">
                    {(p.tags || []).map((tag, idx) => (
                      <motion.span
                        key={tag}
                        className="bg-[#D4AF3716] border border-[#D4AF3766] rounded-full px-2 py-0.5 text-xs text-[#D4AF37] font-semibold uppercase tracking-wider"
                        style={{ letterSpacing: ".08em" }}
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.38,
                          delay: 0.22 + idx * 0.04,
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  <div className="mt-2 text-xs text-[#8d8558] font-medium">
                    {p.price}₮
                  </div>
                  <button
                      className="block w-full bg-cyan-600 px-2 md:px-10 text-white text-xs md:text-sm py-1.5 md:py-2 rounded-lg shadow hover:bg-cyan-700 transition-colors text-center"
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(p);
                      }}
                    >
                      Сагсанд нэмэх
                    </button>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.section>
    </main>
  );
}
