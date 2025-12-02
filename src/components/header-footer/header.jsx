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
              <h1 className="font-black text-3xl uppercase  text-[#D4AF37]">
              Green wein
              </h1>
              <p className="text-xs tracking-[0.5em] text-[#D4AF37]">
                Wine & Lifestyle
              </p>
            </div>
            <nav className="hidden gap-8 text-sm uppercase tracking-[0.3em] text-[#D4AF37] md:flex">
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
      {showModel && (
        <div className="fixed inset-0 z-50 bg-[#0B3D2E] text-[#D4AF37]">
          <button
            onClick={() => setShowModel(false)}
            className="flex items-center gap-2 text-[#D4AF37] transition hover:text-[#F5F5DC] px-4 py-2"
          >
            Close
            <span className="inline-block h-2 w-2 rounded-full bg-[#D4AF37]" />
          </button>
          <div className="mx-auto flex h-full max-w-7xl flex-col">
            <div className="grid flex-1 rounded-[32px] border border-[#D4AF37] bg-[#0B3D2E] p-6 lg:grid-cols-[280px_auto_260px]">
              {/* Left column */}
              <div className="flex flex-col border border-[#D4AF37]/30">
                {leftMenu.map((item) => (
                  <article
                    key={item.label}
                    className="group relative overflow-hidden border border-[#D4AF37]/30"
                  >
                    <div
                      className="h-36 bg-cover bg-center transition duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url('${item.image}')` }}
                    />
                    <div className="bg-[#0B3D2E]/70 px-4 py-2">
                      <p className="text-xs uppercase tracking-[0.4em] text-[#D4AF37]">
                        {item.label}
                      </p>
                      <p className="text-lg font-semibold text-[#F5F5DC]">{item.subtitle}</p>
                    </div>
                  </article>
                ))}
              </div>

              {/* Center column */}
              <div className="flex flex-col gap-6 rounded-3xl border border-[#D4AF37] bg-[#F5F5DC]/20 p-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm uppercase tracking-[0.5em] text-[#D4AF37]">Products</p>
                  <button className="rounded-full border border-[#D4AF37]/40 px-4 py-1 text-[0.6rem] uppercase tracking-[0.5em] text-[#D4AF37] hover:bg-[#D4AF37]/10 hover:text-[#0B3D2E]">
                    Discover all
                  </button>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {productPanels.map((panel) => (
                    <div
                      key={panel.title}
                      className="rounded-3xl border border-[#D4AF37] bg-[#F5F5DC]/60 p-4 text-[#0B3D2E]"
                    >
                      <p className="text-xs uppercase tracking-[0.4em] text-[#D4AF37]">
                        {panel.description}
                      </p>
                      <h3 className="text-2xl font-serif text-[#0B3D2E]">{panel.title}</h3>
                      <div
                        className="mt-4 h-36 rounded-2xl border border-[#D4AF37]/50 bg-cover bg-center"
                        style={{ backgroundImage: `url('${panel.image}')` }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#D4AF37] bg-[#F5F5DC]/20 p-4 text-sm text-[#0B3D2E]">
                  <div>
                    <p className="uppercase tracking-[0.4em] text-[#D4AF37] text-xs">Other products</p>
                    <p className="text-lg text-[#0B3D2E]"> Albions Gin • Reserve M • Private labels</p>
                  </div>
                  <button className="rounded-full bg-[#D4AF37] px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-[#0B3D2E] transition hover:bg-[#0B3D2E] hover:text-[#D4AF37]">
                    Discover all products
                  </button>
                </div>
              </div>

              {/* Right column */}
              <div className="flex flex-col gap-4">
                {rightTiles.map((tile) => (
                  <div
                    key={tile.title}
                    className="flex h-[230px] flex-col justify-between rounded-3xl border border-[#D4AF37] bg-cover bg-center p-6 text-[#F5F5DC] relative"
                    style={{ backgroundImage: `url('${tile.image}')` }}
                  >
                    <div className="absolute inset-0 bg-[#0B3D2E]/60 rounded-3xl pointer-events-none" />
                    <div className="relative z-10 flex flex-col justify-between h-full">
                      <p className="text-2xl font-serif leading-tight">{tile.title}</p>
                      {tile.cta && (
                        <button className="self-start rounded-full bg-[#D4AF37]/80 px-4 py-1 text-xs uppercase tracking-[0.4em] text-[#0B3D2E] hover:bg-[#F5F5DC] hover:text-[#0B3D2E]">
                          {tile.cta}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
                <div className="rounded-3xl border border-[#D4AF37] bg-[#F5F5DC]/70 p-6 text-sm text-[#0B3D2E]">
                  <p className="text-xs uppercase tracking-[0.5em] text-[#D4AF37]">Contact</p>
                  <p className="mt-4 text-xl text-[#0B3D2E]">+359 24 899 450</p>
                  <button className="mt-4 rounded-full bg-[#0B3D2E] px-4 py-2 text-xs uppercase tracking-[0.4em] text-[#D4AF37] transition hover:bg-[#F5F5DC] hover:text-[#0B3D2E]">
                    Go to contact page
                  </button>
                  <p className="mt-6 text-xs uppercase tracking-[0.4em] text-[#D4AF37]">Follow</p>
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
