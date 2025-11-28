import Image from "next/image";
import React from "react";

const heroBottle =
  "https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=800&q=80";
const tchergaBottle =
  "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=600&q=80";
const menadaBottle =
  "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?auto=format&fit=crop&w=600&q=80";

export const Product = () => {
  const gridProducts = [
    {
      title: "TCHERGA®",
      subtitle: "Tcherga",
      description:
        "Tcherga is the wine of contemporary urban people — then, now and forever — it is the spirit of Balkan life.",
      image: tchergaBottle,
    },
    {
      title: "MENADA",
      subtitle: "Menada",
      description:
        "Contemporary, yet always captivating in itself. The good taste and quality that is long known from MENADA as heir of ...",
      image: menadaBottle,
    },
  ];

  return (
    <section
      id="products"
      className="relative mx-auto mt-24 max-w-7xl px-4 pb-24 text-[#f9ecd3] lg:px-0"
    >
      <div className="absolute inset-0 -z-10 bg-[#191919]" />
      <div className="absolute inset-0 -z-20 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=60')] opacity-[0.07]" />

      <header className="mb-12 flex pl-9">
        <p className="text-sm  tracking-[0.65em] text-[#c99d5c] gap-2">
          <p className="rotate-180 pointer-events-none mt-5  absolute -translate-y-1/2 font-bold text-[0.9rem] uppercase tracking-[0.0.1em] text-[#d6aa6f]"
          style={{ writingMode: "vertical-rl" }}>Our</p> <p className="ml-4 text-5xl font-bold">Products</p>
        </p>
        <button className="rounded-full border bg-black border-[#000000] px-6 py-4 text-[0.55rem] uppercase tracking-[0.55em] text-[#f9e3b3] transition hover:bg-[#c99d5c]/10">
          View all products
        </button>
      </header>

      <div className="grid gap-3 lg:grid-cols-[1.0fr_1.0fr] mt-25 h-[1000px]">
        <article className="relative overflow-hidden justify-between flex flex-col border border-[#1e1914] bg-[#d2c4a5] text-[#2b231d] shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#f1e7cb,transparent_70%)] opacity-70" />
          <div className="relative grid gap-6 p-10 lg:grid-cols-2 ">
            <div className="space-y-20 text-sm uppercase tracking-[0.35em]">
              <div className="flex flex-col gap-2">
                
                <p className=" leading-tight text-[#4f4029] ">
                <Image
                  src="/images/dadova-logo.png"
                  alt="Sketch"
                  width={90}
                  height={70}
                  className="h-[90px] w-[250px] object-cover mix-blend-multiply "
                />
                </p>
                <span className="text-[0.7rem] text-center text-black font-bold">Spirits</span>
              </div>
              <p className="text-[0.8rem] normal-case leading-relaxed tracking-normal text-[#463b2a] ">
                Our brandies are created from the best grapes harvested of our
                vineyard estates. They bring warm and sunny memories about our
                branded story. Feel the spirit of the Thracian valley gently
                carried by the sunrise.
              </p>
              <button className="w-max rounded-full bg-[#191919] px-6 py-2 text-[0.55rem] uppercase tracking-[0.55em] text-[#f3e1c5]">
                Read more
              </button>
            </div>
            <div className="relative flex flex-col items-center border">
              <div className="absolute left-6 top-6 h-32 w-32 opacity-60">
                <Image
                  src={heroBottle}
                  alt="Sketch"
                  width={128}
                  height={128}
                  className="h-full w-full object-cover mix-blend-multiply"
                />
              </div>
              {/* <Image
                src={heroBottle}
                alt="Feature bottle"
                width={240}
                height={320}
                className="relative z-10 h-80 w-auto drop-shadow-[0_40px_60px_rgba(0,0,0,0.35)]"
              /> */}
            </div>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-between  bg-[#ece9e9] px-10 py-6 text-sm uppercase tracking-[0.3em] text-[#2f251b]">
        <div>
          Discover all our <span className="font-serif lowercase">products</span>
        </div>
        <div className="flex gap-2">
          {Array.from({ length: 5 }).map((_, idx) => (
            <span
              key={`bottle-silhouette-${idx}`}
              className="h-14 w-4 rounded-t-[12px] bg-[#d6c29f]"
            />
          ))}
        </div>
      </div>
        </article>

        <div className="grid gap-3">
            <article
              className="relative grid gap-4 border border-[#1d1a17] bg-[#191919]/90 p-8 text-[#d7c4a7] shadow-[0_25px_70px_rgba(0,0,0,0.45)] sm:grid-cols-[0.5fr_0.5fr] items-center" 
            >
              <div className="item-center flex flex-col items-center">
                <p className="text-xs uppercase tracking-[0.45em] text-center text-white">
                  tcherga
                </p>
                <h3 className="mt-2 font-serif text-2xl text-[#f3dcbb] text-center">
                tcherga
                </h3>
                <p className="mt-4 text-[0.85rem] text-center leading-relaxed ">
                Tcherga04 is the wine of the contemporary urban people – then, now and forever – it’s the spirit of Bulgaria in a glass of wine. A glass of wine that holds a unique blend of varieties showcasing the colourful diversity of the Bulgarian soul.
                </p>
                <button className="w-max rounded-full mt-2 bg-black px-6 py-2 text-[0.55rem] uppercase tracking-[0.55em] text-[#f3e1c5]">
                Read more
              </button>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-2 rounded-full border border-[#2b241d] opacity-60" />
                <Image
                  src="/images/glass.png"
                  alt="alt"
                  width={160}
                  height={240}
                  className="relative h-48 w-auto object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.45)]"
                />
              </div>
            </article>
            <article
              className="relative grid gap-4 border border-[#1d1a17]  bg-[#191919]/90 p-8 text-[#d7c4a7] shadow-[0_25px_70px_rgba(0,0,0,0.45)] sm:grid-cols-[0.5fr_0.5fr] h-[600px]"
            >
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-2 rounded-full border border-[#2b241d] opacity-60" />
                <Image
                  src="/images/bottle-wines.png"
                  alt="alt"
                  width={160}
                  height={240}
                  className="relative h-96 w-auto object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.45)]"
                />
              </div>
              <div className="flex flex-col items-center">
                <p className="text-xs uppercase tracking-[0.45em] text-center text-white">
                  tcherga
                </p>
                <h3 className="mt-2 font-serif text-2xl text-[#f3dcbb] text-center">
                tcherga
                </h3>
                <p className="mt-4 text-[0.85rem] leading-relaxed text-center">
                Tcherga04 is the wine of the contemporary urban people – then, now and forever – it’s the spirit of Bulgaria in a glass of wine. A glass of wine that holds a unique blend of varieties showcasing the colourful diversity of the Bulgarian soul.
                </p>
                <button className="w-max rounded-full mt-2 bg-black px-6 py-2 text-[0.55rem] uppercase tracking-[0.55em] text-[#f3e1c5]">
                Read more
              </button>
              </div>
            </article>
        </div>
      </div>

      
    </section>
  );
};
