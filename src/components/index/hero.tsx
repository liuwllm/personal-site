import { lora } from "../../../fonts";
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';

export default function Hero() {
    return (
        <div className="flex flex-col gap-10 text-ink">
            <div className="flex flex-col gap-4 2xl:pt-0 xl:pt-2 lg:pt-4 md:pt-8 sm:pt-12 pt-16">
                <h1 className="text-2xl">
                    Hello,
                </h1>
                <h1 className={lora.className}>
                    <span className="font-semibold text-7xl">
                        I&apos;m <span className="text-borealis">William</span>! &#x1F60A;
                    </span>
                </h1>
            </div>
            <div className="flex flex-row items-center gap-10 text-borealis">
                <Link href="mailto:liu.wllm@gmail.com">
                    <MailRoundedIcon className="text-5xl transition ease-in-out hover:text-borealis-lite hover:translate-y-1 hover:cursor-pointer" />
                </Link>
                <Link href="https://github.com/liuwllm/">
                    <GitHubIcon className="text-5xl transition ease-in-out hover:text-borealis-lite hover:translate-y-1 hover:cursor-pointer" />
                </Link>
                <Link href="https://linkedin.com/in/liuwllm">
                    <LinkedInIcon className="text-5xl transition ease-in-out hover:text-borealis-lite hover:translate-y-1 hover:cursor-pointer" />
                </Link>
            </div>
        </div>
    )
}