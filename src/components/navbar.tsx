import Image from 'next/image';
import Link from 'next/link';
import Logo from "../../public/logo.svg";

export default function NavBar() {
    return (
      <main className="py-14">
        <div className="flex justify-between items-center w-full">
            <Image
                src={Logo}
                width={60}
                height={64}
                alt="Logo"
            />
            <div className="flex gap-8">
                <Link className="group text-lg sm:text-xl font-medium text-slate-800 transition duration-200" href="/projects">
                    <h1 className="text-borealis text-base font-bold">
                        projects
                    </h1>
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-borealis"></span>
                </Link>
                <Link className="group text-lg sm:text-xl font-medium text-slate-800 transition duration-200" href="/William_Liu_Resume.pdf">
                    <h1 className="text-borealis text-base font-bold">
                        resume
                    </h1>
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-borealis"></span>
                </Link>
            </div>
        </div>
      </main>
    );
  }
  