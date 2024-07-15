import { lora } from "../../../fonts";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Link from "next/link";

interface CardProps {
    title: string,
    subtitle: string,
    body: string,
    link: string,
}

export default function Card({ title, subtitle, body, link }: CardProps) {
    return (
        <div className="flex flex-col gap-4 w-full bg-white rounded-3xl shadow-lg p-8 sm:p-16">
            <div className="flex flex-row gap-4 items-center text-3xl font-semibold text-borealis hover:text-borealis-lite hover:translate-x-2 transition ease-in-out">
                <Link href={link}>
                    <h1 className={lora.className}>
                        {title}
                    </h1>
                </Link>
                <ArrowOutwardIcon />
            </div>
            <div className="text-xl font-semibold text-ink">
                <h2 className={lora.className}>
                    {subtitle}
                </h2>
            </div>
            <p className="text-lg text-ink">
                {body}
            </p>
        </div>
    );
}