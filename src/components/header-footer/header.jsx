"use client";
import React from 'react'
import { useState } from 'react';

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
      title: "Albion&apos;s Gin",
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
      {/* Засаад өглөө */}
      <div className="relative overflow-hidden bg-[#222222]">
        <div className="pointer-events-none absolute inset-0 opacity-60 bg-[#222222]" aria-hidden>
        </div>
        {/* Header */}
        <header className="relative z-10 mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 lg:px-0">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center">
                <h1 className="font-black text-3xl uppercase tracking-[0.2em] text-[#f4ddad]">
                  Menada
                </h1>
                <p className="text-xs  tracking-[0.5em] text-[#9f8f7f]">
                  Wine & Lifestyle
                </p>
            </div>
            <nav className="hidden gap-8 text-sm uppercase tracking-[0.3em] text-[#d0c3b6] md:flex">
                <button className="transition hover:text-[#f4ddad] text-bold" onClick={() => setShowModel(true)}>
                  MENU
                </button>
            </nav>
          </div>
        </header>
      </div>
      {showModel && (
        <div className="fixed inset-0 z-50 bg-[#282828]  text-[#f4ddad]">
          <button
                onClick={() => setShowModel(false)}
                className="flex items-center gap-2 text-[#f4ddad] transition hover:text-white "
              >
                Close
                <span className="inline-block h-2 w-2 rounded-full bg-[#f4ddad]" />
              </button>
          <div className="mx-auto flex h-full max-w-7xl flex-col">
            <div className="grid flex-1 rounded-[32px] border border-[#2b231d] bg-[#0f0d0c] p-6 lg:grid-cols-[280px_auto_260px]">
              {/* Left column */}
              <div className="flex flex-col border">
                {leftMenu.map((item) => (
                  <article
                    key={item.label}
                    className="group relative overflow-hidden border"
                  >
                    <div
                      className="h-36 bg-cover bg-center transition duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url('${item.image}')` }}
                    />
                    <div className="">
                      <p className="text-xs uppercase tracking-[0.4em] text-[#b68e40]">
                        {item.label}
                      </p>
                      <p className="text-lg font-semibold text-white">{item.subtitle}</p>
                    </div>
                  </article>
                ))}
              </div>

              {/* Center column */}
              <div className="flex flex-col gap-6 rounded-3xl border border-[#3a2f26] bg-[#12100f] p-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm uppercase tracking-[0.5em] text-[#b68e40]">Products</p>
                  <button className="rounded-full border border-[#f4ddad]/30 px-4 py-1 text-[0.6rem] uppercase tracking-[0.5em] text-[#f4ddad]">
                    Discover all
                  </button>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {productPanels.map((panel) => (
                    <div
                      key={panel.title}
                      className="rounded-3xl border border-[#3a2f26] bg-[#1b1814] p-4 text-[#f4ddad]"
                    >
                      <p className="text-xs uppercase tracking-[0.4em] text-[#b68e40]">
                        {panel.description}
                      </p>
                      <h3 className="text-2xl font-serif">{panel.title}</h3>
                      <div
                        className="mt-4 h-36 rounded-2xl border border-[#46372b] bg-cover bg-center"
                        style={{ backgroundImage: `url('${panel.image}')` }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#3a2f26] bg-[#0d0b09] p-4 text-sm text-[#f4ddad]">
                  <div>
                    <p className="uppercase tracking-[0.4em] text-[#b68e40] text-xs">Other products</p>
                    <p className="text-lg text-white">Albion&apos;s Gin • Reserve M • Private labels</p>
                  </div>
                  <button className="rounded-full bg-[#f4ddad] px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-[#20150f]">
                    Discover all products
                  </button>
                </div>
              </div>

              {/* Right column */}
              <div className="flex flex-col gap-4">
                {rightTiles.map((tile) => (
                  <div
                    key={tile.title}
                    className="flex h-[230px] flex-col justify-between rounded-3xl border border-[#3a2f26] bg-cover bg-center p-6 text-white"
                    style={{ backgroundImage: `url('${tile.image}')` }}
                  >
                    <p className="text-2xl font-serif leading-tight">{tile.title}</p>
                    {tile.cta && (
                      <button className="self-start rounded-full bg-black/70 px-4 py-1 text-xs uppercase tracking-[0.4em]">
                        {tile.cta}
                      </button>
                    )}
                  </div>
                ))}
                <div className="rounded-3xl border border-[#3a2f26] bg-[#111010] p-6 text-sm text-[#d6c3ad]">
                  <p className="text-xs uppercase tracking-[0.5em] text-[#b68e40]">Contact</p>
                  <p className="mt-4 text-xl text-white">+359 24 899 450</p>
                  <button className="mt-4 rounded-full bg-black px-4 py-2 text-xs uppercase tracking-[0.4em] text-white">
                    Go to contact page
                  </button>
                  <p className="mt-6 text-xs uppercase tracking-[0.4em] text-[#b68e40]">Follow</p>
                  <p>@menada.winery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
