import NavBar from "../components/navbar";
import Card from "../components/projects/card";

export default function Home() {
    const anishelf = {
        title: "anishelf",
        subtitle: "next.js, flask, postgresql",
        body: "A full stack app that allows you to select specific anime episodes and automatically generates Japanese vocabulary flashcards to review using Anki or other SRS programs",
        link: "https://github.com/liuwllm/anishelf",
    }

    const yachip8emu = {
        title: "yachip8emu",
        subtitle: "rust, sdl2",
        body: "A CHIP-8 emulator built using Rust and SDL2 for the display",
        link: "https://github.com/liuwllm/yachip8emu",
    }

    const wealthsimplepm = {
        title: "wealthsimple product review",
        subtitle: "prototype built using figma",
        body: "A product feature for Wealthsimple's app designed to make onboarding and investing more accessible to first-time investors; presented to current Wealthsimple PM",
        link: "https://www.figma.com/proto/gYIHTCqF8nPynU1Suxbbee/WPS---Wealthsimple?page-id=47%3A2&node-id=47-3&viewport=202%2C581%2C0.21&t=W9iAQuh5AznjTZEQ-1&scaling=contain",
        sublink: "https://www.figma.com/proto/gYIHTCqF8nPynU1Suxbbee/WPS---Wealthsimple?page-id=61%3A111&node-id=159-3860&viewport=683%2C483%2C0.15&t=lkS7yV3fOlUT5li9-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=159%3A3860"
    }

    return (
        <main className="flex flex-col min-h-screen w-full bg-ice 2xl:px-96 xl:px-72 lg:px-60 md:px-24 sm:px-12 px-12">
            <NavBar />
            <div className="flex-grow flex flex-col justify-center gap-16 2xl:px-24 xl:px-16 lg:px-12 md:px-6 sm:px-2 px-0 py-16">
                <Card title={anishelf.title} subtitle={anishelf.subtitle} body={anishelf.body} link={anishelf.link} />
                <Card title={yachip8emu.title} subtitle={yachip8emu.subtitle} body={yachip8emu.body} link={yachip8emu.link} />
                <Card title={wealthsimplepm.title} subtitle={wealthsimplepm.subtitle} body={wealthsimplepm.body} link={wealthsimplepm.link} sublink={wealthsimplepm.sublink}/>
            </div>
        </main>
    );
    }