import Link from "next/link";

function Header() {
    return (
        <header className="bg-purple-500 py-3">
            <ul className="flex justify-center items-center gap-5 text-white">
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
                <li>
                    <Link href='/about/team'>Team</Link>
                </li>
                <li>
                    <Link href='/code/repo'>Code</Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;