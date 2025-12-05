"use client";

import React, { useState } from 'react';

export const Header = () => {
  const [showModel, setShowModel] = useState(false);

  const leftMenu = [
    {
      label: "Home",
      subtitle: "Menada Winery & Vineyards",
      image: "https://images.unsplash.com/photo-1506377295352-e3154d43ea9e?q=80&w=700",
    },
    {
      label: "About us",
      subtitle: "Barrel halls & craft",
      image: "https://images.unsplash.com/photo-1514361892635-6e122620eaff?q=80&w=700",
    },
    {
      label: "History",
      subtitle: "Stories since 1961",
      image: "https://images.unsplash.com/photo-1527169402691-feff5539e52c?q=80&w=700",
    },
  ];
  const leftMenu2 = [
    {
      label: "Region & Wine",
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=700",
    },
  ];

  const productPanels = [
    {
      title: "Tcherga®",
      description: "Wine & Spirits",
      image: "https://images.unsplash.com/photo-1527169402691-feff5539e52c?q=80&w=700",
    },
    {
      title: "Menada",
      description: "Signature bottles",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=700",
    },
    {
      title: "Albion's Gin",
      description: "Botanical small batch",
      image: "https://images.unsplash.com/photo-1471421298428-1513ab720a8e?q=80&w=700",
    },
    {
      title: "ЗАРАСКА",
      description: "Classic spirits",
      image: "https://images.unsplash.com/photo-1481399325432-f6b074091ab1?q=80&w=700",
    },
  ];

  const rightTiles = [
    {
      title: "Wine & Lifestyle",
      image: "https://images.unsplash.com/photo-1481399325432-f6b074091ab1?q=80&w=900",
      cta: null,
    },
    {
      title: "Our Recipes",
      image: "https://images.unsplash.com/photo-1468465226960-8899e992537c?q=80&w=900",
      cta: "Read more",
    },
  ];

  return (
    <div>
      {/* Гүн ногоон (#0B3D2E) background */}
      <div className="relative overflow-hidden bg-[white] border-b-2 border-[#D4AF37]">
        <div className="pointer-events-none absolute inset-0 opacity-60 bg-[white]" aria-hidden />
        {/* Header */}
        <header className="relative z-10 mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 lg:px-0">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center">
              <h1 className="font-black text-2xl md:text-3xl uppercase text-[#D4AF37]">
                Green wein
              </h1>
              <p className="text-xs tracking-[0.5em] text-[#D4AF37]">
                Wine & Lifestyle
              </p>
            </div>
            <nav className="flex gap-4 md:gap-8 text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
              <button
                className="transition hover:text-[#D4AF37] font-bold"
                onClick={() => setShowModel(true)}
              >
                MENU
              </button>
            </nav>
          </div>
        </header>
      </div>
      {/* Mobile Menu Toggle Button */}
      
      {showModel && (
        <div
          className="fixed inset-0 z-50 bg-[#0B3D2E] text-[#D4AF37] flex flex-col"
        >
          <div className="w-full flex justify-end p-2 md:p-4">
            <button
              onClick={() => setShowModel(false)}
              className="flex items-center gap-2 text-[#D4AF37] transition hover:text-[#F5F5DC] text-base md:text-lg font-bold"
              aria-label="Close menu"
            >
              <span className="hidden xs:inline">Close</span>
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <line x1="6" y1="6" x2="18" y2="18" strokeLinecap="round" />
                <line x1="6" y1="18" x2="18" y2="6" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <div className="mx-auto flex-1 w-full flex flex-col">
            {/* Responsive grid */}
            <div className="flex-1 w-full grid gap-4 md:gap-6 rounded-[20px] md:rounded-[32px] border border-[#D4AF37] bg-[#0B3D2E] p-2 xs:p-3 sm:p-4 md:p-6
                grid-cols-1
                md:grid-cols-[265px_minmax(0,1fr)_230px] 
              "
              style={{ minHeight: "50vh" }}
            >
              {/* Left column - stack on mobile */}
              <div className="flex flex-row md:flex-col space-x-3 md:space-x-0 md:space-y-2 border border-[#D4AF37]/30 overflow-x-auto md:overflow-visible">
                {leftMenu.map((item) => (
                  <article
                    key={item.label}
                    className="group relative flex-shrink-0 w-52 md:w-auto md:shrink md:grow-0 overflow-hidden border border-[#D4AF37]/30 mb-0 md:mb-2"
                  >
                    <div
                      className="h-28 md:h-36 bg-cover bg-center transition duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url('${item.image}')` }}
                    />
                    <div className="bg-[#0B3D2E]/70 px-3 py-2">
                      <p className="text-xs uppercase tracking-[0.32em] text-[#D4AF37] truncate">
                        {item.label}
                      </p>
                      <p className="text-base md:text-lg font-semibold text-[#F5F5DC] truncate">{item.subtitle}</p>
                    </div>
                  </article>
                ))}
              </div>

              {/* Center column - responsive */}
              <div className="flex flex-col gap-3 sm:gap-5 md:gap-6 rounded-[16px] md:rounded-3xl border border-[#D4AF37] bg-[#F5F5DC]/20 p-3 sm:p-5 md:p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
                  <p className="text-xs md:text-sm uppercase tracking-[0.45em] text-[#D4AF37]">Products</p>
                  <button className="rounded-full border border-[#D4AF37]/40 px-4 py-1 text-[0.6rem] uppercase tracking-[0.5em] text-[#D4AF37] hover:bg-[#D4AF37]/10 hover:text-[#0B3D2E]">
                    Discover all
                  </button>
                </div>
                <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
                  {productPanels.map((panel) => (
                    <div
                      key={panel.title}
                      className="rounded-xl md:rounded-3xl border border-[#D4AF37] bg-[#F5F5DC]/60 p-3 md:p-4 text-[#0B3D2E] flex flex-col"
                    >
                      <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] truncate">
                        {panel.description}
                      </p>
                      <h3 className="text-lg md:text-2xl font-serif text-[#0B3D2E] truncate">{panel.title}</h3>
                      <div
                        className="mt-3 md:mt-4 h-24 md:h-36 rounded-lg md:rounded-2xl border border-[#D4AF37]/50 bg-cover bg-center"
                        style={{ backgroundImage: `url('${panel.image}')` }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-2 sm:gap-4 rounded-xl md:rounded-2xl border border-[#D4AF37] bg-[#F5F5DC]/20 p-3 md:p-4 text-xs md:text-sm text-[#0B3D2E]">
                  <div>
                    <p className="uppercase tracking-[0.35em] text-[#D4AF37] text-xs">Other products</p>
                    <p className="text-base md:text-lg text-[#0B3D2E]">Albions Gin • Reserve M • Private labels</p>
                  </div>
                  <button className="rounded-full bg-[#D4AF37] px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-[#0B3D2E] transition hover:bg-[#0B3D2E] hover:text-[#D4AF37]">
                    Discover all products
                  </button>
                </div>
              </div>

              {/* Right column - vertical stack, full width on small screens */}
              <div className="flex flex-col gap-3 sm:gap-4">
                {rightTiles.map((tile) => (
                  <div
                    key={tile.title}
                    className="flex h-[140px] xs:h-[170px] sm:h-[180px] md:h-[230px] flex-col justify-between rounded-xl md:rounded-3xl border border-[#D4AF37] bg-cover bg-center p-3 md:p-6 text-[#F5F5DC] relative"
                    style={{ backgroundImage: `url('${tile.image}')` }}
                  >
                    <div className="absolute inset-0 bg-[#0B3D2E]/60 rounded-xl md:rounded-3xl pointer-events-none" />
                    <div className="relative z-10 flex flex-col justify-between h-full">
                      <p className="text-lg md:text-2xl font-serif leading-tight">{tile.title}</p>
                      {tile.cta && (
                        <button className="self-start rounded-full bg-[#D4AF37]/80 px-4 py-1 text-xs uppercase tracking-[0.4em] text-[#0B3D2E] hover:bg-[#F5F5DC] hover:text-[#0B3D2E]">
                          {tile.cta}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
                <div className="rounded-xl md:rounded-3xl border border-[#D4AF37] bg-[#F5F5DC]/70 p-3 md:p-6 text-xs md:text-sm text-[#0B3D2E]">
                  <p className="text-xs uppercase tracking-[0.5em] text-[#D4AF37]">Contact</p>
                  <p className="mt-2 md:mt-4 text-lg md:text-xl text-[#0B3D2E]">+359 24 899 450</p>
                  <button className="mt-3 md:mt-4 rounded-full bg-[#0B3D2E] px-4 py-2 text-xs uppercase tracking-[0.4em] text-[#D4AF37] transition hover:bg-[#F5F5DC] hover:text-[#0B3D2E]">
                    Go to contact page
                  </button>
                  <p className="mt-3 md:mt-6 text-xs uppercase tracking-[0.4em] text-[#D4AF37]">Follow</p>
                  <p className="text-[#0B3D2E]">@menada.winery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
