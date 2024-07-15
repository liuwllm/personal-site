import NavBar from "../components/navbar";
import Hero from "../components/index/hero";
import Body from "../components/index/body";
import ProjectCTA from "../components/index/projectcta";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full bg-ice xxl:px-96 xl:px-72 lg:px-60 md:px-24 sm:px-12 px-12">
      <NavBar />
      <div className="flex-grow flex flex-col justify-center gap-16">
        <Hero />
        <Body />
        <ProjectCTA />
      </div>
    </main>
  );
}
