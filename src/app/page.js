import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { About } from "@/components/About";
import { Product } from "@/components/Product";
import { Region } from "@/components/Region";
import { Lifestyle } from "@/components/Lifestyle";

export default function Home() {
  return (
    <main className="relative min-h-screen text-[#f7f2e9]">
  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-xs" 
    style={{ backgroundImage: 'url("/images/Sunrise_Vineyard_Mist.png")' }}
  />
  <div className="relative z-10">
    <Hero />
    <Stats />
    <About />
    <Product />
    <Region />
    <Lifestyle />
  </div>
</main>
  );
}
