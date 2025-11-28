import React from 'react'

export const Recipes = () => {
  const recipes = [
    {
      title: "Cucumber Cool Mist",
      image:
        "https://images.unsplash.com/photo-1468465226960-8899e992537c?q=80&w=800",
    },
    {
      title: "Sangria with Watermelon & Raspberry",
      image:
        "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=800",
    },
  ];
  return (
    <div>
      {/* Recipes */}
      <section id="recipes" className="mx-auto mt-16 max-w-6xl px-4 lg:px-0">
        <div className="flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.5em] text-[#b68e40]">Our recipes</p>
          <button className="text-xs uppercase tracking-[0.4em] text-[#f4ddad]">Read more</button>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {recipes.map((recipe) => (
            <article
              key={recipe.title}
              className="h-72 rounded-[32px] border border-[#2b231d] bg-cover bg-center p-6 text-lg font-semibold text-[#f9e5bd] shadow-[0_20px_60px_rgba(0,0,0,0.55)]"
              style={{ backgroundImage: `url('${recipe.image}')` }}
            >
              {recipe.title}
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
