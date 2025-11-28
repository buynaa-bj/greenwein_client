"use client"
import Image from "next/image";
import React,{ useState , useEffect } from "react";

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
      image: "/images/bottle-wines.png",
      title: " mednda  mednfa",
      info: " Traminer has crystal beautiful light color of straw. The aroma is strong of roses and ripe fruits. The taste is balanced, with pronounced softness and freshness.",
    },
    {
      image: "/images/bottle-wines.png",
      title: " menda rose",
      info: "ser to the people of today, the beloved to generation of Bulgarians MENADA, has stepped outside its boundaries to reappear in a whole new vision - bold, modern, distinguishable.",
    },
    {
      image: "/images/bottle-wines.png",
      title: " menda marlo",
      info: "rms with its vivid rose color. Its aroma is rich of ripe forest fruits, cherry and spicy herbs. The taste has pleasant freshness and long finish.",
    },
    {
      image: "/images/bottle-wines.png",
      title: " menda mario",
      info: "oser to the people of today, the beloved to generation of Bulgarians MENADA, has stepped outside its boundaries to reappear in a whole new vision - bold, modern, distinguishable.",
    },
  ]
  return (
    <section className="relative mx-auto h-[900px]  max-w-7xl border border-[#2b231d] bg-[#191919] px-8 py-16 shadow-[0_45px_120px_rgba(0,0,0,0.55)]">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1600&blend=000000&sat=-100&blend-mode=multiply')",
          backgroundSize: "cover",
        }}
        aria-hidden
      />

      <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_1fr_1fr]">
        {/* Left content */}
        <div className="flex flex-col gap-6 text-[#f2d6a5]">
          <p className="text-4xl font-serif text-[#ce9a4a] sm:text-5xl">
           <span className="text-9xl"> Wines </span><br/>
            <span className="text-white text-3xl">inspired by</span>{" "}
            <span className="text-white text-7xl font-semibold italic">you!</span>
          </p>
          <div className="space-y-4 text-xs text-[#d6c3ad]">
            <p className="uppercase tracking-[0.3em] text-[#f0d8aa]">
              Welcome to Menada We strive to produce high quality wine combining 100-year-old
              traditions with an innovative approach.
            </p>
          </div>
          <div className="flex flex-row gap-3"> 
            <div className="mt-4 h-[2px] w-20 bg-[#ce9a4a]" />
            <span className="text-xs uppercase  text-[#ce9a4a]">
              Have a look at <br/>our product portfolio
            </span>
            
          </div>
        </div>

        {/* Grapes */}
        <div className="transition-transform duration-700 ease-out will-change-transform"
style={{
  transform: `translateY(${scrollY * -0.1}px)`
}}>
          <div className="absolute mx-auto -bottom-70 -left-50 flex w-[560px] justify-center sm:w-[600px] lg:w-[800px]">
          <Image
            src="/images/grape.png"
            alt="Menada grapes"
            width={1000}
            height={1940}
            className="h-auto w-full drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)]"
            priority
          />
        </div>
        </div>
        {/* Right content */}
        <div className="flex flex-col gap-5  p-6 text-[#f2d6a5] mt-50">
        <p className="text-4xl text-[#f2d6a5]">The new face of Menada</p>
        <div className="flex flex-row gap-4 w-[60%]">
        {data.map((item, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setActive({ title: item.title, info: item.info })}
            onMouseLeave={() =>
              setActive({
                title: "The new face of Menada",
                info:
                  "A revolution in design. Tradition in quality. Bold bottles and modern blends.",
              })
            }
            className="cursor-pointer overflow-hidden "
          >
            <Image
              src={item.image}
              alt={item.title}
              width={300}
              height={400}
              className="w-20 h-40 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4 w-[80%] h-[90%]">
        <p className="text-3xl font-serif text-[#ce9a4a] h-20">
          {active.title}
        </p>

        <p className="text-sm leading-relaxed text-[#d6c3ad] h-30">
          {active.info}
        </p>

        <button className="w-max rounded-full border border-[#f4ddad]/40 px-6 py-2 text-xs uppercase tracking-[0.4em] text-[#f4ddad] hover:bg-[#f4ddad]/10">
          Learn more
        </button>
      </div>
    </div>
      </div>
    </section>
  );
};