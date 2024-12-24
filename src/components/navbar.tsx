import Image from 'next/image';
import Link from 'next/link';
import Logo from "../../public/logo.svg";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export default function NavBar() {
    return (
      <main className="pt-12 mb-12">
        <div className="flex justify-between items-center w-full">
            <div className="float-left">
                <Link href="/">
                    <Image
                        src={Logo}
                        width={60}
                        height={64}
                        alt="Logo"
                    />
                </Link>
            </div>
            <div className="flex gap-8">
                <Link className="group text-lg sm:text-xl font-medium text-slate-800 transition duration-200" href="/projects">
                    <h1 className="text-borealis text-base font-bold">
                        projects
                    </h1>
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-borealis"></span>
                </Link>
                <Link className="group text-lg sm:text-xl font-medium text-slate-800 transition duration-200" href="/William_Liu_Resume.pdf">
                    <div className="flex flex-row gap-1 items-center">
                        <h1 className="text-borealis text-base font-bold">
                            resume
                        </h1>
                        <ArrowOutwardIcon className="text-borealis text-base"/>
                    </div>
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-borealis"></span>
                </Link>
            </div>
        </div>
      </main>
    );
  }
  