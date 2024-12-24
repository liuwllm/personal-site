import NavBar from "../components/navbar";
import Hero from "../components/index/hero";
import Body from "../components/index/body";
import ProjectCTA from "../components/index/projectcta";

export default function Home() {
  return (
    <>
      <title>William Liu</title>
      <main className="bg-ice w-full">
        <div className="min-h-screen flex flex-col max-w-6xl p-6 mx-auto justify-center">
          <NavBar />
          <div className="flex-grow flex flex-col justify-center gap-16 px-4 w-full">
            <Hero />
            <Body />
            <ProjectCTA />
          </div>
        </div>
      </main>
    </>
  );
}
