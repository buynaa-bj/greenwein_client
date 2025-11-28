import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { Lifestyle } from "@/components/Lifestyle";
import { Product } from "@/components/Product";
import { Recipes } from "@/components/Recipes";
import { Region } from "@/components/Region";
import { Stats } from "@/components/Stats";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#222222] text-[#f7f2e9]">
      <Hero/>{/* done*/}
      <Stats/>
      <About/>
      <Product/>
       <Region/>{/* done */}
      <Lifestyle/> {/*done*/}
      {/* <Recipes/> */}
    </main>
  );
}
