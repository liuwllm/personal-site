import NavBar from "../components/navbar";
import Card from "../components/projects/card";

export default function Home() {
    const anishelf = {
        title: "anishelf",
        emoji: '\u{1F4FA}',
        subtitle: "next.js, flask, postgresql",
        body: "A full stack app that allows you to select specific anime episodes and automatically generates Japanese vocabulary flashcards to review using Anki or other SRS programs",
        link: "https://github.com/liuwllm/anishelf",
    }

    const yachip8emu = {
        title: "yachip8emu",
        emoji: '\u{1F5A5}\u{FE0F}',
        subtitle: "rust, sdl2",
        body: "A CHIP-8 emulator built using Rust and SDL2 for the display",
        link: "https://github.com/liuwllm/yachip8emu",
    }

    const wealthsimplepm = {
        title: "wealthsimple product review",
        emoji: '\u{1F4B8}',
        subtitle: "prototype built using figma",
        body: "A product feature for Wealthsimple's app designed to make onboarding and investing more accessible to first-time investors; presented to current Wealthsimple PM",
        link: "https://www.figma.com/proto/gYIHTCqF8nPynU1Suxbbee/WPS---Wealthsimple?page-id=47%3A2&node-id=47-3&viewport=202%2C581%2C0.21&t=W9iAQuh5AznjTZEQ-1&scaling=contain",
        sublink: "https://www.figma.com/proto/gYIHTCqF8nPynU1Suxbbee/WPS---Wealthsimple?page-id=61%3A111&node-id=159-3860&viewport=683%2C483%2C0.15&t=lkS7yV3fOlUT5li9-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=159%3A3860"
    }

    return (
        <>
            <title>William Liu | Projects</title>
            <main className="bg-ice w-full">
                <div className="min-h-screen flex flex-col max-w-6xl p-6 mx-auto justify-center">
                    <NavBar />
                    <div className="flex-grow flex flex-col justify-center gap-16">
                        <Card title={anishelf.title} emoji={anishelf.emoji} subtitle={anishelf.subtitle} body={anishelf.body} link={anishelf.link} />
                        <Card title={yachip8emu.title} emoji={yachip8emu.emoji} subtitle={yachip8emu.subtitle} body={yachip8emu.body} link={yachip8emu.link} />
                        <Card title={wealthsimplepm.title} emoji={wealthsimplepm.emoji} subtitle={wealthsimplepm.subtitle} body={wealthsimplepm.body} link={wealthsimplepm.link} sublink={wealthsimplepm.sublink}/>
                    </div>
                </div>
            </main>
        </>
    );
    }