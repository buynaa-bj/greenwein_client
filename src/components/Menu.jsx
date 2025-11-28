import React from 'react'

export const Menu = () => {
  return (
    <div>
      {/* Menu */}
    <section className="mx-auto mt-16 max-w-6xl px-4 pb-20 lg:px-0">
      <div className="rounded-[32px] border border-[#2b231d] bg-[#100c0a] p-10">
        <p className="text-xs uppercase tracking-[0.5em] text-[#b68e40]">Menu</p>
        <div className="mt-6 grid gap-8 text-sm text-[#d6c3ad] md:grid-cols-3">
          <div>
            <p className="text-[#f9e5bd]">Wine</p>
            <ul className="mt-3 space-y-2">
              <li>Shop</li>
              <li>Club</li>
              <li>Private reserves</li>
            </ul>
          </div>
          <div>
            <p className="text-[#f9e5bd]">Visit</p>
            <ul className="mt-3 space-y-2">
              <li>Estate tours</li>
              <li>Stay & dine</li>
              <li>Events</li>
            </ul>
          </div>
          <div>
            <p className="text-[#f9e5bd]">Connect</p>
            <ul className="mt-3 space-y-2">
              <li>hello@menada.bg</li>
              <li>+359 88 222 444</li>
              <li>@menada.wines</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
