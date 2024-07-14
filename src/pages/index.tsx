import NavBar from "../components/navbar";
import Hero from "../components/index/hero";
import Body from "../components/index/body";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-ice px-96">
      <NavBar />
      <Hero />
      <Body />
    </main>
  );
}
