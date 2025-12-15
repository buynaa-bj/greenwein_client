"use client";
import React, { useState, useEffect, useRef } from "react";
import api from "../../../utils/axios";
import axios from "axios";
import { useCart } from "@/context/CartContext";
import { useParams, useRouter } from "next/navigation";

export default function ProductDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [otherProducts, setOtherProducts] = useState([]);
  const { addToCart } = useCart();
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  // Fetch all products
  useEffect(() => {
    axios
      .get("http://localhost:8888/api/v1/product")
      .then((res) => {
        setOtherProducts(res.data.data || []);
      })
      .catch((e) => console.log(e));
  }, []);

  // Fetch product by id
  useEffect(() => {
    if (!id) return;
    api
      .get(`/product/${id}`)
      .then((res) => {
        let data = res.data?.data;

        if (Array.isArray(data)) {
          const foundProduct = data.find((pr) => pr._id === id);
          data = foundProduct || null;
        }
        if (data && data.details && typeof data.details === "string") {
          try {
            data.details = JSON.parse(data.details);
          } catch {
            data.details = {};
          }
        }
        if (data && (!data.details || data.details === "")) data.details = {};
        setProduct(data || null);
      })
      .catch((error) => {
        setProduct(null);
      });
  }, [id]);

  // Responsive slides
  function getSlidesToShow() {
    if (typeof window === "undefined") return 4;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    if (window.innerWidth < 1280) return 3;
    return 4;
  }
  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());
  useEffect(() => {
    function handleResize() {
      setSlidesToShow(getSlidesToShow());
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Filter other products to exclude this one
  const OTHER_PRODUCTS = otherProducts.filter((p) => p._id !== (product ? product._id : undefined));
  const totalSlides = Math.max(0, OTHER_PRODUCTS.length - slidesToShow + 1);

  // Slider handlers
  const handlePrev = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
    sliderRef.current?.scrollTo({
      left:
        (sliderRef.current?.clientWidth / slidesToShow) *
        Math.max(currentSlide - 1, 0),
      behavior: "smooth",
    });
  };
  const handleNext = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
    sliderRef.current?.scrollTo({
      left:
        (sliderRef.current?.clientWidth / slidesToShow) *
        Math.min(currentSlide + 1, totalSlides - 1),
      behavior: "smooth",
    });
  };
  useEffect(() => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollTo({
      left:
        (sliderRef.current?.clientWidth / slidesToShow) *
        Math.min(currentSlide, totalSlides - 1),
      behavior: "smooth",
    });
  }, [slidesToShow, currentSlide, totalSlides]);

  // Loading / error states
  if (product === null) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[#D4AF37] text-2xl font-serif bg-white">
        Түр хүлээнэ үү...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[#D4AF37] text-lg font-serif bg-white">
        Бүтээгдэхүүн олдсонгүй.
      </div>
    );
  }

  // Pairings
  let pairingArr = [];
  if (product.details && product.details.pairing) {
    if (Array.isArray(product.details.pairing)) {
      pairingArr = product.details.pairing;
    } else if (typeof product.details.pairing === "string") {
      if (product.details.pairing.includes(",")) {
        pairingArr = product.details.pairing.split(",").map((s) => s.trim()).filter(Boolean);
      } else if (product.details.pairing.includes(";")) {
        pairingArr = product.details.pairing.split(";").map((s) => s.trim()).filter(Boolean);
      } else if (product.details.pairing.includes("\n")) {
        pairingArr = product.details.pairing.split("\n").map((s) => s.trim()).filter(Boolean);
      } else {
        pairingArr = [product.details.pairing];
      }
    }
  }

  return (
    <main className="min-h-screen bg-white font-sans text-[#1A1A1A] px-0 overflow-x-hidden">
      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto pt-6 pb-1 px-4 flex text-xs text-[#D4AF37] uppercase gap-2 font-serif tracking-widest">
        <span
          className="hover:text-[#1A1A1A] cursor-pointer transition-colors"
          onClick={() => router.push("/")}
        >
          Home
        </span>
        <span>/</span>
        <span
          className="hover:text-[#1A1A1A] cursor-pointer transition-colors"
          onClick={() => router.push("/shop")}
        >
          Бүх бүтээгдэхүүн
        </span>
        <span>/</span>
        <span className="text-[#1A1A1A] font-bold">{product.name}</span>
      </nav>

      {/* Product Main Section */}
      <h1 className="text-[2.2rem] md:text-[2.7rem] lg:text-[3.1rem] max-w-5xl items-center mx-auto justify-center flex font-serif font-bold tracking-[0.11em] uppercase text-[#1A1A1A] mb-4 leading-tight text-center drop-shadow-sm">
        {product.name}
      </h1>
      <section className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-9 px-0 md:px-4 pt-2 pb-14 relative">
        {/* LEFT: Bottle & card */}
        <div
          className="relative w-full md:w-[600px] shrink-0 flex items-center justify-center shadow-lg overflow-visible bg-[#F5F5F5] min-h-[700px] rounded-[32px] border border-[#ececec]"
          style={{ minHeight: "680px", maxWidth: "600px" }}
        >
          {/* Gold dot for grace */}
          <span className="absolute top-4 left-7 w-3 h-3 rounded-full bg-[#D4AF37] shadow-lg border-2 border-white" />
          {/* Bottle Image */}
          <img
            src={`http://localhost:8888/uploads/${product.image}`}
            alt={product.name}
            draggable={false}
            className="h-[430px] md:h-[580px] object-contain z-10 drop-shadow-[0_8px_26px_#D4AF374d] mt-16 select-none"
            style={{ marginBottom: "36px" }}
          />
          {/* Vertical label */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
            <span className="rotate-90 origin-bottom-right uppercase font-serif text-[13px] tracking-[.26em] text-[#D4AF37] opacity-90 shadow-sm">
              {(product.type || "").toUpperCase()}
            </span>
          </div>
        </div>
        {/* RIGHT: Details Card */}
        <div className="relative flex-1 flex flex-col justify-center">
          <div className="bg-[#F5F5F5] border border-[#E6E6E6] shadow-md min-h-[520px] px-7 py-9 w-full rounded-[22px]">
            {/* Blend and name */}
            <div className="flex items-center justify-between mb-3">
              <span className="font-serif uppercase text-xs tracking-widest text-[#D4AF37] font-semibold opacity-90">
                Blend
              </span>
              <span className="font-serif text-[16px] text-[#1A1A1A] font-bold tracking-widest uppercase">
                {product.name}
              </span>
            </div>
            <div className="flex items-center border-b border-[#ececec] pb-2 mb-4">
              <span className="font-serif text-xs text-[#D4AF37] mr-3 opacity-85 min-w-[106px]">Aging in oak:</span>
              <span className="font-serif text-base font-bold tracking-wider text-[#1A1A1A] opacity-90">
                {product.details &&
                  (product.details.aging ||
                    product.details.taste ||
                    product.details.color ||
                    "–")}
              </span>
            </div>
            {/* Color */}
            <div className="flex items-start gap-3 mb-2">
              <span className="text-base text-[#D4AF37] mt-1 font-serif">Өнгө</span>
              <span className="text-[#1A1A1A] font-serif text-base">
                {(product.details && product.details.color) || "–"}
              </span>
            </div>
            {/* Description */}
            <div className="flex items-start gap-3 mb-2">
              <span className="text-base text-[#D4AF37] mt-1 font-serif whitespace-nowrap">Тайлбар</span>
              <span className="text-[#1A1A1A] font-serif text-base flex-1">
                {product.description}
              </span>
            </div>
            {/* Details - volume and alcohol */}
            <div className="flex items-center gap-7 mb-3 mt-1">
              <span className="flex items-center gap-1 text-[#1A1A1A] bg-[#fff] px-4 py-2 rounded-full border border-[#e6e6e6] text-xs font-serif shadow-sm">
                <span className="font-semibold text-[#D4AF37]">Хэмжээ:</span>
                {product.details && product.details.volume ? product.details.volume : "–"}
              </span>
              <span className="flex items-center gap-1 text-[#1A1A1A] bg-[#fff] px-4 py-2 rounded-full border border-[#e6e6e6] text-xs font-serif shadow-sm">
                <span className="font-semibold text-[#D4AF37]">Спирт:</span>
                {product.details && product.details.alcohol ? product.details.alcohol : "–"}
              </span>
            </div>
            {/* Type & temperature pill */}
            <div className="flex items-center mt-2 mb-4 gap-2">
              <span className="font-serif text-base tracking-wider text-[#1A1A1A]">
                {product.type}
              </span>
              <span className="font-serif text-xs px-3 py-1 rounded-full bg-[#fff] border border-[#E6E6E6] text-[#D4AF37] ml-2 shadow">{product.details && product.details.temperature ? (`Температур: ${product.details.temperature}`) : "Температур: –"}</span>
            </div>
            {/* Wine Color/Type meta */}
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs uppercase text-[#D4AF37] font-serif tracking-[.20em]">
                {product.type || "Wine"}
              </span>
              <span className="text-xs text-[#1A1A1A] font-bold px-2">{product.details && product.details.temperature}</span>
            </div>
            {/* Pairing */}
            <div className="mt-7">
              <span className="font-serif uppercase text-xs text-[#D4AF37] mb-1 tracking-widest block">
                Дараах хоолнуудтай тохиромжтой:
              </span>
              <div className="flex flex-wrap gap-2 items-center text-sm mt-3">
                {pairingArr.length > 0
                  ? pairingArr.map((v, i) => (
                      <span
                        key={i}
                        className="flex items-center px-4 py-1 bg-[#fff] border border-[#eee] rounded-full text-[#D4AF37] font-semibold tracking-widest text-xs shadow-sm"
                      >
                        {v}
                      </span>
                    ))
                  : (
                    <>
                      <span className="flex items-center px-4 py-1 bg-[#fff] border border-[#eee] rounded-full text-[#D4AF37] font-semibold tracking-widest text-xs shadow">
                        🥗 Salad
                      </span>
                      <span className="flex items-center px-4 py-1 bg-[#fff] border border-[#eee] rounded-full text-[#D4AF37] font-semibold tracking-widest text-xs shadow">
                        🍄 Мөөг, ногоо
                      </span>
                      <span className="flex items-center px-4 py-1 bg-[#fff] border border-[#eee] rounded-full text-[#D4AF37] font-semibold tracking-widest text-xs shadow">
                        🍞 Bread
                      </span>
                      <span className="flex items-center px-4 py-1 bg-[#fff] border border-[#eee] rounded-full text-[#D4AF37] font-semibold tracking-widest text-xs shadow">
                        🐟 Fish
                      </span>
                    </>
                  )
                }
              </div>
            </div>
            {/* Add to cart button */}
            <div className="mt-8 flex justify-end">
              <button
                onClick={() => addToCart(product)}
                className="rounded-full px-8 py-3 text-base text-white bg-[#D4AF37] hover:bg-white hover:text-[#D4AF37] hover:border-[#D4AF37] hover:shadow-lg font-semibold shadow-sm border border-[#D4AF37] transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              >
                Сагсанд нэмэх
              </button>
            </div>
          </div>
          {/* Recipe CTA */}
          <div
            className="flex flex-row h-[135px] justify-between bg-cover bg-center w-full rounded-[18px] mt-8 shadow"
            style={{
              backgroundImage:
                "linear-gradient(90deg,rgba(212,175,55,0.31) 0,rgba(255,255,255,0.01) 55%), url('https://images.unsplash.com/photo-1527169402691-feff5539e52c?q=80&w=1500')",
            }}
          >
            <div className="flex flex-col w-full text-start p-8 justify-center text-xl md:text-2xl font-bold text-white/90 drop-shadow-[0_1px_4px_rgba(39,30,2,0.09)]">
              Wine зоогийн санааг
              <br />
              <span className="text-3xl md:text-4xl text-[#D4AF37] font-serif leading-tight">Wine Recipes</span>
            </div>
            <div className="w-full flex justify-center items-end pb-4">
              <button className="rounded-full px-7 py-3 text-base text-white bg-[#D4AF37] hover:bg-white hover:text-[#D4AF37] hover:border-[#D4AF37] font-semibold border border-[#D4AF37] shadow transition-all duration-150">
                Дэлгэрэнгүй
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Other Products - Slider */}
      <section className="max-w-7xl mx-auto px-4 pb-10">
        <h2 className="uppercase font-serif text-2xl md:text-3xl font-bold text-[#D4AF37] ml-2 mb-8 tracking-[.12em]">
          Бусад бүтээгдэхүүн
        </h2>
        <div className="relative">
          <button
            onClick={handlePrev}
            disabled={currentSlide === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/95 rounded-full px-3 py-2 shadow text-[#D4AF37] text-2xl font-bold border border-[#D4AF37] transition disabled:opacity-25 disabled:cursor-not-allowed hidden sm:block`}
            aria-label="Previous"
            style={{ left: "-32px" }}
          >
            ‹
          </button>
          <div
            className="overflow-x-scroll scrollbar-hide"
            style={{
              scrollBehavior: "smooth",
            }}
            ref={sliderRef}
            tabIndex={-1}
          >
            <div
              className="flex transition-all ease-in-out duration-300 gap-7"
              style={{
                width: `${(OTHER_PRODUCTS.length / slidesToShow) * 100}%`,
                minWidth: "100%",
              }}
            >
              {OTHER_PRODUCTS.map((op, idx) => (
                <div
                  key={op._id || idx}
                  className="bg-[#F5F5F5] border border-[#ececec] py-7 px-3 flex flex-col items-center group shadow-none hover:shadow-xl transition-all hover:border-[#D4AF37] cursor-pointer rounded-2xl mx-1 min-h-[330px]"
                  style={{
                    minWidth: `calc(100% / ${slidesToShow} - 14px)`,
                    maxWidth: `calc(100% / ${slidesToShow} - 14px)`,
                    flex: `0 0 calc(100% / ${slidesToShow} - 14px)`,
                  }}
                  onClick={() => router.push(`/details/${op._id}`)}
                >
                  <div
                    className="w-full flex justify-center mb-5 relative"
                    style={{ minHeight: "220px" }}
                  >
                    <img
                      src={`http://localhost:8888/uploads/${op.image}`}
                      alt={op.name}
                      className="max-h-56 object-contain drop-shadow-[0_8px_16px_#D4AF371a] transition-transform group-hover:scale-105 duration-150"
                      draggable={false}
                      style={{ marginLeft: "auto", marginRight: "auto" }}
                    />
                  </div>
                  <div className="text-center w-full">
                    <div className="font-serif text-xs md:text-sm font-bold text-[#1A1A1A] uppercase tracking-widest mb-0.5 leading-tight">
                      {op.name}
                    </div>
                    <div className="text-[#D4AF37] text-xs mb-0.5 font-serif">{op.type}</div>
                    <div className="flex justify-center flex-wrap gap-x-1 gap-y-1 mb-1">
                      {op.tags &&
                        op.tags.map((tag, i) => (
                          <span
                            key={tag + i}
                            className="bg-[#fff] border border-[#D4AF37] rounded-full px-2 py-0.5 text-[0.65rem] text-[#D4AF37] font-semibold uppercase tracking-widest shadow"
                          >
                            {tag}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={handleNext}
            disabled={currentSlide >= totalSlides - 1}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/95 rounded-full px-3 py-2 shadow text-[#D4AF37] text-2xl font-bold border border-[#D4AF37] transition disabled:opacity-25 disabled:cursor-not-allowed hidden sm:block`}
            aria-label="Next"
            style={{ right: "-32px" }}
          >
            ›
          </button>
        </div>
        {/* Dots navigation */}
        <div className="flex justify-center mt-5 gap-1.5">
          {Array.from({ length: totalSlides }, (_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentSlide(idx);
                if (!sliderRef.current) return;
                sliderRef.current.scrollTo({
                  left: (sliderRef.current.clientWidth / slidesToShow) * idx,
                  behavior: "smooth",
                });
              }}
              className={`w-3 h-3 rounded-full border border-[#D4AF37] transition ${
                idx === currentSlide
                  ? "bg-[#D4AF37]"
                  : "bg-[#F5F5F5] hover:bg-[#e3cd88]"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
