import Image from "next/image";
import React from "react";

export const Region = () => {
  const grapeVarietals = ["Cabernet Sauvignon", "Merlot", "Rubin", "Mavrud"];

  return (
    <section
      id="region"
      className="relative mx-auto mt-10 max-w-7xl min-h-[770px] px-4 lg:px-0"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-[#191919]" />
      <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1439127989242-c3749a012eac?auto=format&fit=crop&w=1400&q=60')] opacity-[0.05]" />

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">

        {/* LEFT - ABOUT REGION PANEL */}
        <article className="relative col-span-1 h-[450px] overflow-hidden border w-[630px] border-[#1f1a16] bg-[#191919]/90 px-10 py-12 shadow-[0_25px_70px_rgba(0,0,0,0.55)]">
          <div className="pointer-events-none absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505739775417-85d84b0b8a2d?auto=format&fit=crop&w=800&q=70')] bg-cover bg-center mix-blend-soft-light" />
          </div>

          <p
            className="rotate-180 text-[4.6rem] font-serif uppercase flex flex-col tracking-[0.2em] text-[#f4c36d] absolute left-5 top-1/2 -translate-y-1/2"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            <span className="text-xs tracking-[0.6em] text-[#c29d62]">
              About the
            </span>
            region
          </p>

          <div className="ml-70 space-y-4 mt-4">
            <p className="text-xs tracking-[0.2em] text-[#c99d5c] w-60 leading-relaxed ">
              The climate and diversity of soils in the Stara Zagora region
              present great opportunities for viticulture and winemaking. <br />
              <br />
              Our winery benefits from fantastic geography and weather
              conditions that allow us to grow exotic international grapes as
              well as local traditional grape varieties.
            </p>
            <button className="inline-flex items-center gap-4 text-[0.6rem] uppercase tracking-[0.45em] text-[#f5d48f]">
              <span className="h-px w-16 bg-[#f5d48f]" />
              Learn more
            </button>
          </div>
        </article>

        {/* CENTER — BIG MENADA CARD (OVERLAP) */}
        <article className="absolute left-[550px] top-[370px] -translate-x-[40%] w-[640px] h-[420px]  border border-[#2a1f17] bg-[#1a120d] shadow-[0_35px_90px_rgba(0,0,0,0.55)] z-20 rounded-sm">
          <div
            className="absolute inset-0 opacity-70"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1200&q=80)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-[#090706]" />

          <div className="relative grid grid-cols-[1fr_auto] p-10">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.45em] text-[#c6974f]">
                Quality wines
              </p>
              <h3 className="font-serif text-5xl tracking-[0.25em] text-[#efc77d] drop-shadow-[0_10px_20px_rgba(0,0,0,0.7)]">
                MENADA
              </h3>
              <p className="text-sm text-[#f1dfc0]">from the Thracian Valley</p>
            </div>

            <div className="absolute flex items-end justify-center left-[130px] -bottom-60 translate-x-[120px] translate-y-[40px]">
  <Image
    src="/images/glass.png"
    alt="Wine glass"
    width={260}
    height={360}
    className="h-80 w-auto drop-shadow-[0_35px_65px_rgba(0,0,0,0.6)]"
  />
</div>
          </div>
        </article>

        {/* RIGHT - GRAPE VARIETALS */}
        <aside className="relative col-start-3 mt-10 h-[480px] overflow-hidden border ml-15 border-[#c2b7a6]/60 bg-[#f3efe7] text-[#4b3c2e] shadow-[0_25px_70px_rgba(0,0,0,0.4)]">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=70)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="relative p-10 mt-12">
            <p className="text-2xl font-serif font-bold text-[#c18b45] leading-tight">
              Grape <br /> varietals:
            </p>
            <ul className="mt-8 space-y-2 text-sm">
              {grapeVarietals.map((v) => (
                <li key={v} className="pb-2 flex justify-between">
                  <span>{v}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 h-px w-12 bg-[#40352a]" />
          </div>
        </aside>
      </div>
    </section>
  );
};
