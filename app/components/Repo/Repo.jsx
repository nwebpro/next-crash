import Link from "next/link";
import { FaCodeBranch, FaEye, FaStar } from "react-icons/fa";

const fetchRepo = async (name) => {
    const res = await fetch(`https://api.github.com/repos/nwebpro/${ name }`, {
        next: {
            revalidate: 60
        },
    })
    const repo = await res.json()
    return repo
}

const Repo = async ({ name }) => {
    const repo = await fetchRepo(name)
    const { description, stargazers_count, forks_count, watchers_count  } = repo
    return (
        <div>
            <div className="mb-5">
                <Link href={`/code/repos`} className="bg-purple-500 text-white py-2 px-5 rounded">
                    Back to Repo
                </Link>
            </div>
            <h2>{ repo.name }</h2>
            <p>{ description }</p>
            <div className='flex items-center gap-5'>
                <span className='flex gap-2 items-center'><FaStar /> { stargazers_count }</span>
                <span className='flex gap-2 items-center'><FaCodeBranch /> { forks_count }</span>
                <span className='flex gap-2 items-center'><FaEye /> { watchers_count }</span>
            </div>
        </div>
    );
};

export default Repo