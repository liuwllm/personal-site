import NavBar from "../components/navbar";
import Hero from "../components/index/hero";
import Body from "../components/index/body";
import ProjectCTA from "../components/index/projectcta";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full bg-ice px-96">
      <NavBar />
      <div className="flex-grow flex flex-col justify-center gap-16">
        <Hero />
        <Body />
        <ProjectCTA />
      </div>
    </main>
  );
}
