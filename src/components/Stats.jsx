import React from "react";

const vineyardBackdrop =
  "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=800&q=80";
const grapeCluster =
  "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=800&q=80";

export const Stats = () => {
  const bottleMarkers = Array.from({ length: 3 });

  return (
    <section className="relative isolate overflow-hidden bg-[#222222] px-4 text-[#f7f2e9]">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, #222222, #222222, #222222)",
        }}
      />

      <div className="relative mx-auto max-w-7xl overflow-hidden  border border-[#1f1712] bg-[#191919]/90 px-6 py-12 shadow-[0_40px_120px_rgba(0,0,0,0.65)] sm:px-10 lg:px-16">
        {/* Atmospheric layers */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-y-8 left-24 right-6 rounded-[48px] bg-cover bg-center opacity-60 blur-[1.5px]"
            style={{ backgroundImage: `url(${vineyardBackdrop})` }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(11,7,8,0.9), rgba(20,15,12,0.7), rgba(5,4,3,0.95))",
            }}
          />
          <div
            className="absolute -left-48 top-0 rounded-full border border-[#47341f]/60 bg-cover bg-center opacity-80"
            style={{
              backgroundImage: `url(${vineyardBackdrop})`,
              height: "28rem",
              width: "28rem",
            }}
          />
          <div className="absolute -left-36 bottom-16 h-4 w-4 rounded-full bg-[#f3db97]/80 blur-[2px]" />
        </div>

        <p
          className="rotate-180 pointer-events-none absolute left-6 top-1/2 -translate-y-1/2 text-[0.65rem] uppercase tracking-[0.55em] text-[#d6aa6f]"
          style={{ writingMode: "vertical-rl" }}
        >
          <p className="text-3xl font-extrabold">8000 tons</p> of wine produced per year
        </p>

        <div className="relative grid gap-12 items-center  lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-10">
            <div>
              <span className="text-[6.25rem] font-serif font-black leading-none text-[#f5ddae]">
                80
              </span>
              <span className="text-4xl align-top font-serif font-black text-[#f5ddae]">
                %
              </span>
            </div>

            <div className="max-w-md space-y-4 text-sm uppercase tracking-[0.35em] text-[#c3b09b]">
              <p>estate grown grapes used in wine making process</p>
              <div className="h-px w-20 bg-[#c68b3a]" />
              <button className="inline-flex items-center gap-3 rounded-full border border-[#c68b3a]/60 px-6 py-3 text-[0.6rem] font-semibold tracking-[0.5em] text-[#f0c678] transition hover:bg-[#c68b3a]/20">
                Read more
                <span aria-hidden className="h-1 w-8 bg-[#f0c678]" />
              </button>
            </div>
          </div>

          <div className="space-y-6 text-sm text-[#f4ebdf]">
            <div className="overflow-hidden rounded-3xl border border-[#2f251f] bg-[#191919]/70 shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
              <div
                className="h-48 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${grapeCluster})` }}
              />
              <div className="space-y-3 px-6 py-5 text-[0.75rem] leading-relaxed text-[#dacfbe]">
                <p>
                  The grape varieties are carefully selected depending on the
                  characteristics of the region.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-[#2f251f] bg-[#191919]/80 px-6 py-5 text-[0.7rem] uppercase tracking-[0.35em] text-[#ceb99d]">
              <p>Sun-soaked slopes. Clay & limestone rich terroir.</p>
              <p className="mt-3 text-[#f5ddae]">
                Harvested at sunrise for clarity & balance.
              </p>
            </div>
          </div>
        </div>

        <div className="relative mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-[#2a2019] pt-8 text-xs uppercase tracking-[0.55em] text-[#c7a16a]">
          <div className="flex items-center gap-4 text-[#f5ddae]">
            <span className="text-4xl font-black leading-none text-[#f5ddae]">
              20
            </span>
            <div className="space-y-1 text-[0.65rem]">
              <p>million bottles</p>
              
            </div>
            <div className="flex gap-2">
              {bottleMarkers.map((_, idx) => (
                <span
                  key={`bottle-${idx}`}
                  className="h-10 w-3 rounded-t-full"
                  style={{
                    background: "linear-gradient(to bottom, #f7d48b, #b97a2f)",
                  }}
                />
              ))}
            </div>
          </div>
          <p>per year</p>
          <div className=" text-[#a98c6b]">
            <button className="border rounded-2xl p-3 bg-black">read more</button>
          </div>
        </div>
      </div>
    </section>
  );
};
