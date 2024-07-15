import { lora } from "../../../fonts";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Link from "next/link";

interface CardProps {
    title: string,
    subtitle: string,
    body: string,
    link: string,
    sublink?: string 
}

export default function Card({ title, subtitle, body, link, sublink }: CardProps) {
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
            
                {
                    sublink ? 
                    (
                    <Link href={sublink}>
                        <div className="flex flex-row items-center gap-2 text-xl font-semibold text-ink hover:text-borealis-lite hover:cursor-pointer hover:translate-x-2 transition ease-in-out">
                            <h2 className={lora.className}>
                                {subtitle}
                            </h2>
                            <ArrowOutwardIcon />
                        </div>
                    </Link>
                    ) :
                    (
                    <div className="text-xl font-semibold text-ink">
                        <h2 className={lora.className}>
                            {subtitle}
                        </h2>
                    </div>
                    )
                }
            
            <p className="text-lg text-ink">
                {body}
            </p>
        </div>
    );
}