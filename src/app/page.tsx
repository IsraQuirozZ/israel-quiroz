import { Hero } from "@/components/sections/Hero";
import { TechStack } from "@/components/sections/TechStack";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { AboutBlurb } from "@/components/sections/AboutBlurb";

export default function Home() {
  return (
    <main>
      <Hero />
      <TechStack />
      <FeaturedProjects />
      <AboutBlurb />
    </main>
  );
}
