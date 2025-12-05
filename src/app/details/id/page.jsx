import React from "react";

const DUMMY_PRODUCT = {
  name: "Chardonnay & Sauvignon Blanc & Semillon",
  image: "/images/bottle-2.png",
  type: "Chardonnay & Sauvignon Blanc",
  tags: ["Dry", "White"],
  description:
    "A harmonious blend of Chardonnay, Sauvignon Blanc, and Semillon, revealing the colourful spirit of Bulgaria in every glass. Fresh, vibrant and contemporary.",
  details: {
    alcohol: "13% vol.",
    volume: "750ml",
    grape: "Chardonnay, Sauvignon Blanc, Semillon",
    region: "Bulgaria",
    color: "Straw yellow",
    taste: "Fresh & fruity",
    temperature: "8-10°C",
    pairing: "Fish, seafood, white meats, salads",
  },
};
const imagesaa = [
  {
    image: "/images/",
  }
];
const OTHER_PRODUCTS = [
  {
    name: "Chardonnay & Sauvignon Blanc & Semillon",
    image: "/images/bottle-2.png",
  },
  {
    name: "Cabernet Sauvignon & Merlot & Syrah",
    image: "/images/bottle-1.png",
  },
  {
    name: "Cabernet Sauvignon & Merlot",
    image: "/images/bottle-wines.png",
  },
  {
    name: "Cabernet Sauvignon & Syrah",
    image: "/images/bottle-3.png",
  },
];

export default function ProductDetailPage() {
  return (
    <main className="min-h-screen bg-[#23201c] font-sans text-[#FFD377] px-0 overflow-x-hidden">
      {/* Top Brand/Logo/Menu strip */}
      

      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto pt-7 pb-2 px-4 flex text-xs text-[#FFD377AA] uppercase gap-2 font-serif">
        <span className="hover:text-[#FFD377] cursor-pointer">Home</span>
        <span>&gt;</span>
        <span className="hover:text-[#FFD377] cursor-pointer">All Products</span>
        <span>&gt;</span>
        <span className="text-[#FFD377] font-semibold">{DUMMY_PRODUCT.name}</span>
      </nav>

      {/* Product Main Section */}
      <h1 className="text-[2.6rem] md:text-[3rem] lg:text-[4.1rem] max-w-7xl items-center mx-auto justify-center flex font-serif font-bold tracking-[0.13em] uppercase text-[#FFD377] mb-2 leading-tight text-center">
            {DUMMY_PRODUCT.name}
          </h1>
      <section className="max-w-7xl mx-auto grid  lg:grid-cols-[1.0fr_1.0fr] px-0 md:px-2 pt-2 pb-12 gap-0 md:gap-0 relative">
      
        {/* LEFT: Bottle on golden card with vertical text and dot */}
        <div className="relative w-full md:w-[630px] flex-shrink-0 flex items-center justify-center  shadow-xl overflow-visible bg-[#8B7651] min-h-[740px]" style={{minHeight:"720px", maxWidth:"630px"}}>
          {/* Golden active dot top left */}
          <span className="absolute top-4 left-5 w-3 h-3 rounded-full bg-[#FFD377] shadow-md border border-[#917539]" />
          {/* Bottle Image */}
          <img
            src={DUMMY_PRODUCT.image}
            alt={DUMMY_PRODUCT.name}
            draggable={false}
            className="h-[450px] md:h-[650px] object-contain z-10 drop-shadow-[0_8px_18px_#fff6d066] mt-16"
            style={{marginBottom: "36px"}}
          />
          {/* Vertical "WHITE WINE" label */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
            <span className="rotate-90 origin-bottom-right uppercase font-serif text-[14px] tracking-[.33em] text-[#F6DCB1]">
              WHITE
            </span>
          </div>
        </div>
        {/* RIGHT: Details Card  */}
        <div className="relative flex-1 flex flex-col justify-center">
          {/* Name - Large */}
          {/* <h1 className="text-[1.6rem] md:text-[2rem] lg:text-[2.1rem] font-serif font-bold tracking-[0.13em] uppercase text-[#FFD377] mb-2 leading-tight">
            {DUMMY_PRODUCT.name}
          </h1> */}
          {/* Subtle golden bar for separation */}
          {/* <span className="block w-14 h-[2px] bg-[#FFD37788] mb-5" /> */}
          {/* Slim Breadcrumb Style (for the inner card) */}
          {/* <div className="text-xs uppercase tracking-widest font-serif mb-6 text-[#FFD37799]">{DUMMY_PRODUCT.type}</div> */}
          {/* Main card panel */}
          <div className="bg-[#26221b] border border-[#FFD37733] shadow-lg h-[550px] px-6 py-7 w-full ">
            {/* Blend and aging */}
            <div className="flex items-center justify-between mb-4">
              <span className="font-serif uppercase text-xs tracking-widest text-[#FFD377c5] font-semibold">Blend</span>
              <span className="font-serif text-[15px] text-[#FFD377] font-bold tracking-[0.1em] uppercase">{DUMMY_PRODUCT.name}</span>
            </div>
            <div className="flex items-center border-b border-[#FFD37713] pb-2 mb-3">
              <span className="font-serif text-xs text-[#FFD377aa] mr-3 min-w-[104px]">Aging in oak:</span>
              <span className="text-[#FFD377ec] font-serif text-base font-bold tracking-wider">Y/N</span>
            </div>
            {/* Description */}
            <div className="flex items-start gap-3 mb-3">
              <span className="text-lg mt-1">🎨</span>
              <span className="text-[#FFD377c8] font-serif text-base">{DUMMY_PRODUCT.details.color}</span>
            </div>
            <div className="flex items-start gap-3 mb-3">
              <span className="text-lg mt-1">🍋</span>
              <span className="text-[#FFD377b6] font-serif text-base flex-1">{DUMMY_PRODUCT.description}</span>
            </div>
            {/* Details - icons/rows */}
            <div className="flex items-center gap-4 mb-2">
              <span className="flex items-center gap-1 text-[#FFD377bb]"><span className="text-lg">🍾</span>{DUMMY_PRODUCT.details.volume}</span>
              <span className="flex items-center gap-1 text-[#FFD377bb] ml-6"><span className="text-lg">🧪</span>{DUMMY_PRODUCT.details.alcohol}</span>
            </div>
            {/* Color strip / type / temperature */}
            <div className="flex items-center mt-2 mb-5">
              <span className="text-lg mr-2">🍷</span>
              <span className="font-serif text-base tracking-wider text-[#FFD377e4] pr-2">{DUMMY_PRODUCT.type}</span>
              <span className="font-serif text-xs px-2 py-0.5 rounded bg-[#FFD37718] text-[#FFD377a7] border border-[#FFD37755] ml-2">{DUMMY_PRODUCT.details.temperature}</span>
            </div>
            {/* Wine Color/Type box */}
            <div className="flex justify-between items-center mb-3 mt-4">
              <span className="text-xs uppercase text-[#fffbe4bb] font-serif tracking-[.20em]">White wine</span>
              <span className="text-xs text-[#FFD377aa] px-2">10-12°C</span>
            </div>
            {/* Pairing */}
            <div className="mt-6">
              <span className="font-serif uppercase text-xs text-[#FFD377bb] mb-1 tracking-widest block">Consume with:</span>
              <div className="flex flex-wrap gap-2 items-center text-sm mt-2">
                {/* Salad */}
                <span className="flex items-center px-3 py-1 bg-[#FFD37711] border border-[#FFD37729] rounded-full text-[#FFD377] font-semibold tracking-widest text-xs">
                  🥗 Salad
                </span>
                {/* Mushrooms & Vegetables */}
                <span className="flex items-center px-3 py-1 bg-[#FFD37711] border border-[#FFD37729] rounded-full text-[#FFD377] font-semibold tracking-widest text-xs">
                  🍄 Mushrooms & Vegetables
                </span>
                {/* Bread */}
                <span className="flex items-center px-3 py-1 bg-[#FFD37711] border border-[#FFD37729] rounded-full text-[#FFD377] font-semibold tracking-widest text-xs">
                  🍞 Bread
                </span>
                {/* Fish */}
                <span className="flex items-center px-3 py-1 bg-[#FFD37711] border border-[#FFD37729] rounded-full text-[#FFD377] font-semibold tracking-widest text-xs">
                  🐟 Fish
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-row h-[140px] justify-between bg-cover bg-center justify-items-center w-full" style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1527169402691-feff5539e52c?q=80&w=1500')",
          }}>
            <div className="flex flex-col w-full text-start p-6 item-center justify-center text-2xl font-bold">Have a look at our<br/><span className="text-4xl">Wine Recipes</span></div>
            <div className=" w-full flex justify-center items-center"><button className=" rounded-full p-4 text-sm text-white bg-black hover:bg-amber-400">Дэлгэрэнгүй </button></div>
          </div>
        </div>
      </section>

      {/* Other Products */}
      <section className="max-w-7xl mx-auto px-4 pb-14">
        <h2 className="uppercase font-serif text-2xl md:text-3xl font-bold text-[#FFD377] ml-10 mb-7 tracking-wider">Other products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 ">
          {OTHER_PRODUCTS.map((product, idx) => (
            <div
              key={idx}
              className="bg-[#171513] border border-[#594b37]  py-8 px-3 flex flex-col items-center group shadow transition-all hover:border-[#FFD377bb] hover:shadow-[0_4px_42px_#FFD37722] cursor-pointer"
            >
              <div className="w-full flex justify-center mb-4 relative" style={{minHeight: '300px'}}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-60  object-contain drop-shadow-[0_8px_16px_#FFD37722] transition-transform group-hover:scale-110"
                  draggable={false}
                  style={{marginLeft: 'auto', marginRight: 'auto'}}
                />
              </div>
              <div className="text-center w-full">
                <div className="font-serif text-xs md:text-sm font-semibold text-[#FFD377] uppercase tracking-widest mb-1 leading-tight">{product.name}</div>
                <div className="text-[#fffbe4cb] text-xs mb-1 font-light">{product.type}</div>
                <div className="flex justify-center flex-wrap gap-x-1 gap-y-1 mb-1">
                  {product.tags && product.tags.map((tags ) => (
                    <span
                      key={tags}
                      className="bg-[#ff1b1b22] border border-[#FFD37744] rounded-full px-2 py-0.5 text-[0.60rem] text-[#FFD377] font-semibold uppercase tracking-widest "
                    >
                      {tags}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      </main>
  )
}
