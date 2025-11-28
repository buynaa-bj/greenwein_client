import React from 'react'

export const About = () => {
  return (
    <div>
      {/* About */}
      <section id="story" className="mx-auto grid max-w-7xl  gap-2 mt-24 px-4 lg:grid-cols-[1fr_1fr] lg:px-0">
        <div className=" bg-linear-to-b h-96 pl-28 from-[#191919] to-[#191919] p-8" >
          <p className="text-xs uppercase tracking-[0.3em] text-[#b68e40]">About</p>
          <h3 className=" font-serif text-4xl font-semibold text-[#b68e40]">
          Menada
          </h3>
          <p className="mt-10 text-sm text-[#ecddcc] w-2/4">
          Domain Menada, established in 1901, is located in the central part of Southern Bulgaria in a region known as the Thracian Valley. The winery owns over 426 ha of vineyards and is one of the leading producers of high quality wines and spirits in the country.
          </p>
          <div className="mt-8 grid md:grid-cols-3">
          <div className="mt-4 h-[2px] w-20 bg-[#ce9a4a] justify-center flex" />
          <button className="text-xs uppercase tracking-[0.4em] text-[#f4ddad] hover:bg-[#f4ddad]/10">
          Learn more
        </button>
          </div>
        </div>
        <div className=" bg-[#191919] h-96 pl-28 p-8">
        <h3 className="mt-4 font-serif text-4xl font-semibold text-[#b68e40]">
        History
          </h3>
          <p className="mt-10 text-sm text-[#ecddcc] w-2/4">
          Domain Menada winery has been producing quality wines for over a century. The cellar was founded in 1901 under the name Loza Cooperative. In 2002, Domain Menada became part of the French holding company Belvedere Group (renamed Marie Brizard Wine & Spirits Bulgaria in in July 2015).
          </p>
          <div className="mt-8 grid md:grid-cols-3">
          <div className="mt-4 h-[2px] w-20 bg-[#ce9a4a] justify-center  flex" />
          <button className="text-xs uppercase tracking-[0.4em] text-[#f4ddad] hover:bg-[#f4ddad]/10">
          Learn more
        </button>
          </div>
        </div>
      </section>
    </div>
  )
}
