"use client"
import React from "react";
import { useRouter } from "next/navigation";


// Products Sample - Up to 15 to match the design
const products = [
  
  {
    id: 1,
    name: "Tcherga Red",
    image: "/images/bottle-1.png",
    type: "Cabernet Sauvignon & Merlot",
    tags: ["Dry", "Red"],
  },
  {
    id: 2,
    name: "Tcherga White",
    image: "/images/bottle-2.png",
    type: "Chardonnay & Sauvignon Blanc",
    tags: ["Dry", "White"],
  },
  {
    id: 3,
    name: "Tcherga Rosé",
    image: "/images/bottle-3.png",
    type: "Cabernet Sauvignon Rosé",
    tags: ["Rosé"],
  },
  {
    id: 4,
    name: "Tcherga Reserve",
    image: "/images/bottle-wines.png",
    type: "Reserve Blend",
    tags: ["Reserve"],
  },
  {
    id: 5,
    name: "Tcherga Sweet",
    image: "/images/tcherga-5.png",
    type: "Sweet White",
    tags: ["Sweet", "White"],
  },
  {
    id: 6,
    name: "Tcherga Barrel",
    image: "/images/tcherga-6.png",
    type: "Barrel Aged Red",
    tags: ["Barrel", "Red"],
  },
  {
    id: 7,
    name: "Big Bag Tcherga Red",
    image: "/images/tcherga-7.png",
    type: "Bag-in-Box Red",
    tags: ["Bag-in-Box", "Red"],
  },
  {
    id: 8,
    name: "Big Bag Tcherga White",
    image: "/images/tcherga-8.png",
    type: "Bag-in-Box White",
    tags: ["Bag-in-Box", "White"],
  },
  {
    id: 9,
    name: "Tcherga Classic",
    image: "/images/tcherga-9.png",
    type: "Classic Blend",
    tags: [],
  },
  {
    id: 10,
    name: "Tcherga Chardonnay",
    image: "/images/tcherga-10.png",
    type: "Chardonnay",
    tags: ["White"],
  },
  {
    id: 11,
    name: "Tcherga Box Select",
    image: "/images/tcherga-11.png",
    type: "Special Edition",
    tags: ["Box"],
  },
  {
    id: 12,
    name: "Tcherga Moscato",
    image: "/images/tcherga-12.png",
    type: "Moscato",
    tags: ["Sweet"],
  },
  {
    id: 13,
    name: "Tcherga Bag Semi-Sweet",
    image: "/images/tcherga-13.png",
    type: "Bag-in-Box Semi-Sweet",
    tags: ["Bag-in-Box"],
  },
  {
    id: 14,
    name: "Tcherga Merlot",
    image: "/images/tcherga-14.png",
    type: "Merlot",
    tags: ["Red"],
  },
  {
    id: 15,
    name: "Tcherga Barrel Select Chardonnay",
    image: "/images/tcherga-15.png",
    type: "Barrel Chardonnay",
    tags: ["Barrel", "White"],
  },
];

export default function DetailsPage() {
  const router = useRouter();
  return (
    <main className="min-h-screen font-sans bg-[#23201c] flex flex-col items-stretch overflow-x-hidden text-[#FFD377]">
      {/* Banner with background & overlay */}
      <section className="relative w-full max-w-7xl mx-auto mt-20">
        <div className="relative w-full h-[450px] md:h-[620px] overflow-hidden">
          <img
            src="/images/banner.jpg"
            alt="Tcherga Banner"
            className="w-full h-full object-cover object-top grayscale-[0.85] opacity-70"
            style={{ filter: "contrast(1.08)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1B1812ED] via-[#23201cA9] to-transparent"/>
        </div>
        <div className="absolute top-0 left-0 z-10 flex items-center ">
          <div className="bg-[#23201c] h-74 w-1/4 text-white flex text-star flex-col">
          <span className="text-5xl uppercase p-5 font-bold">title</span>
          <span className="p-5">Tcherga04 is the wine of the contemporary urban people – then, now and forever – it’s the spirit of Bulgaria in a glass of wine. A glass of wine that holds a unique blend of varieties showcasing the colourful diversity of the Bulgarian soul.</span>
          </div>
        </div>
      </section>
      
      {/* Vertical Tab */}
      <div className="fixed left-0 top-40 z-20 hidden xl:flex flex-col items-center">
        <div className="flex flex-col items-center ">
          <span
            className="bg-[#23201c] text-[#FFD377] py-2 px-4 text-xs font-serif rounded-tr-2xl rounded-br-2xl border border-[#FFD37733] shadow tracking-widest uppercase"
            style={{
              writingMode: "vertical-rl",
              letterSpacing: "0.16em",
              fontWeight: 600,
            }}
          >
            greenwien
          </span>
        </div>
      </div>

      {/* Products grid */}
      <section className="w-full max-w-7xl mx-auto px-0 pt-1 pb-16">
        <div className="products-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-4 gap-y-0">
          {products.map((p, idx) => (
            <div
            onClick={() => router.push(`/details/${p.id}`)}
              key={p.id}
              className={`
                relative bg-[#191714] h-[400px] border border-[#2d241d] flex flex-col items-center px-3 pt-14 pb-7 group
                shadow-[0_4px_27px_#FFE09312] transition-all hover:border-[#FFD377] hover:shadow-[0_6px_30px_#FFD37722]
                before:content-[''] before:block before:absolute before:left-1/2 before:-top-6 before:-translate-x-1/2 before:w-[17px] before:h-[17px] before:rounded-full before:border-2 before:border-[#23201c] before:z-10
              `}
              
            >
              {/* Bottle */}
              <div className="w-full flex items-center justify-center mb-2 mt-0 relative">
                <img
                  src={p.image}
                  alt={p.name}
                  className="max-h-36 md:max-h-56 w-auto mx-auto object-contain drop-shadow-[0_8px_18px_#FFD37723] transition-transform duration-300 group-hover:scale-110"
                  draggable={false}
                />
              </div>
              {/* Card Content */}
              <div className="w-full text-center mt-3">
                <div className="font-serif text-sm md:text-base font-semibold text-[#FFD377] uppercase mb-1 tracking-wide leading-[1.2]">
                  {p.name}
                </div>
                <div className="text-[#fffbe4] text-xs mb-1 font-light">{p.type}</div>
                <div className="flex justify-center gap-1 mt-1">
                  {p.tags.map(
                    (tag) => (
                      <span
                        key={tag}
                        className="bg-[#FFD37711] border border-[#FFD37744] rounded-full px-2 py-0.5 text-[0.64rem] text-[#FFD377] font-semibold uppercase tracking-wider"
                        style={{ letterSpacing: '.08em', fontSize: "0.66rem" }}
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
