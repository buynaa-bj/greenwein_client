import Image from "next/image";
import React from "react";

export const Lifestyle = () => {
  return (
    <section className="relative mx-auto mt-20 max-w-[1300px]">

      {/* ===================== TOP : WINE & LIFESTYLE ===================== */}
      <div className="relative grid lg:grid-cols-3 gap-0 h-[600px] border border-[#2b231d] from-[#191919] to-[#191919]">

        {/* Left Image */}
        <div
          className="relative  h-[500px] lg:h-auto bg-cover bg-center"
        >
          <div className="absolute flex items-start justify-start -right-100 -bottom-20 translate-x-[2px] translate-y-[40px] z-[10]">
  <Image
    src="/images/wine-hands.png"
    alt="Wine glass"
    width={600}
    height={500}
    className="h-180 w-auto drop-shadow-[0_35px_65px_rgba(0,0,0,0.6)]"
  />
</div>
        </div>

        {/* Right Text */}
        <div className="col-span-2 flex flex-col justify-center p-12 space-y-8 bg-[#191919]">
          <h1 className="text-[86px] leading-none font-serif font-bold tracking-wide">
            <span className="text-[#d6aa6f]">Wine</span>{" "}
            <span className="text-white">& Lifestyle</span>
          </h1>

          <div className="grid grid-cols-3 gap-10">
            <p></p>
            <p className="text-[#d6c3ad] text-xs leading-relaxed max-w-sm">
            Since ancient times, wine has been perceived as part of our culture
            and a symbol of good life. The role of wine has evolved over the
            centuries, making the beverage a complement to food, festivities,
            and a healthy lifestyle.
          </p>

          <p className="text-[#d6c3ad] text-xs leading-relaxed max-w-sm">
            The art of viticulture and winemaking has evolved. Nonetheless,
            during all those centuries, one important aspect remains unchanged:
            the connection of wine to gastronomy, to local traditions and to
            social celebrations.
          </p>
          </div>

          <div className="pt-4 flex justify-end">
            <a
              href="#"
              className="inline-flex items-center text-[#d6aa6f] text-xs uppercase tracking-widest"
            >
              <span className="mr-3 block h-[1px] w-20 bg-[#d6aa6f]"></span>
              Learn more
              
            </a>
          </div>
        </div>
      </div>

      {/* ===================== BOTTOM : OUR RECIPES SECTION ===================== */}
      <div className="grid grid-cols-1 md:grid-cols-4 overflow-hidden border border-[#2b231d] ">
      <div
          className="relative h-[350px]  bg-center  flex items-end p-6"
          
        >
        </div>
        {/* LEFT LARGE BLOCK – OUR RECIPES */}
        <div className="relative bg-[#191919] h-[250px] flex flex-col justify-center items-center p-12 border-r border-[#2b231d]">
          {/* background faint leaf like screenshot */}
          <div
            className="absolute inset-0 opacity-[0.07] bg-cover bg-center"
            
          />
          <div className="relative z-10 text-center">
            <h2 className="text-3xl font-serif text-[#d6aa6f]">Our recipes</h2>

            <button className="mt-6 px-6 py-2 rounded-full bg-black text-white text-xs uppercase tracking-widest shadow-lg">
              Read more
            </button>
          </div>
        </div>

        {/* MIDDLE – IMAGE 1 */}
        <div
          className="relative h-[350px] bg-cover bg-center border-r border-[#2b231d] flex justify-center items-center p-6"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1527169402691-feff5539e52c?q=80&w=1500')",
          }}
        >
          <div className="absolute inset-0 bg-black/20" />
          <h3 className="relative z-10 text-2xl font-serif text-[#d6aa6f] drop-shadow-lg">
            Cucumber Cocktail
          </h3>
        </div>

        {/* RIGHT – IMAGE 2 */}
        <div
          className="relative h-[350px] bg-cover bg-center flex justify-center items-center p-6"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1527169402691-feff5539e52c?q=80&w=1500')",
          }}
        >
          <div className="absolute inset-0 bg-black/25" />
          <h3 className="relative z-10 text-2xl font-serif text-[#d6aa6f] drop-shadow-lg max-w-[180px]">
            Sangria with Watermelon and Raspberry
          </h3>
        </div>
      </div>
    </section>
  );
};
