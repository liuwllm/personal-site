import { lora } from "../../../fonts";

export default function Hero() {
    return (
        <div className="flex flex-col gap-4 text-ink py-24">
            <h1 className="text-2xl">
                Hello,
            </h1>
            <h1 className={lora.className}>
                <span className="font-semibold text-7xl">
                    I'm <span className="text-borealis">William</span>!
                </span>
            </h1>
        </div>
    )
}