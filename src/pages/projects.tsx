import NavBar from "../components/navbar";
import Card from "../components/projects/card";

export default function Home() {
    const anishelf = {
        title: "anishelf",
        subtitle: "next.js, flask, postgresql",
        body: "A full stack app that allows you to select specific anime episodes and automatically generates Japanese vocabulary flashcards to review using Anki or other SRS programs",
        link: "https://github.com/liuwllm/anishelf"
    }

    const yachip8emu = {
        title: "yachip8emu",
        subtitle: "rust, sdl2",
        body: "A CHIP-8 emulator built using Rust and SDL2 for the display",
        link: "https://github.com/liuwllm/yachip8emu"

    }


    return (
        <main className="flex flex-col min-h-screen w-full bg-ice 2xl:px-96 xl:px-72 lg:px-60 md:px-24 sm:px-12 px-12">
            <NavBar />
            <div className="flex-grow flex flex-col justify-center gap-16 2xl:px-24 xl:px-16 lg:px-12 md:px-6 sm:px-2 px-0">
                <Card title={anishelf.title} subtitle={anishelf.subtitle} body={anishelf.body} link={anishelf.link} />
                <Card title={yachip8emu.title} subtitle={yachip8emu.subtitle} body={yachip8emu.body} link={yachip8emu.link} />
            </div>
        </main>
    );
    }