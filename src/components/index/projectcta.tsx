import Link from 'next/link';

export default function ProjectCTA() {
    return(
        <Link href="/projects">
            <p className="text-borealis text-xl font-bold transition ease-in-out hover:cursor-pointer hover:translate-x-2 hover:text-borealis-lite"> 
                &gt; Take a look at my projects
            </p>
        </Link>
    )
}