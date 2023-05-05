import Link from 'next/link'
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa'

const fetchRepos = async () => {
    const res = await fetch('https://api.github.com/users/nwebpro/repos')
    await new Promise(resolve => 
        setTimeout(resolve, 1000)
    )
    const repos = await res.json()
    return repos
}

const Repos = async () => {
    const repos = await fetchRepos()
    return (
        <div className='max-w-3xl mx-auto py-5'>
            <h2 className='text-2xl mb-5'>Repositories</h2>
            {
                repos.map(repo => (
                    <div className='bg-gray-200 mb-5' key={ repo.id }>
                        <Link href={`/code/repos/${ repo.name }`} className='p-5 flex flex-col space-y-3'>
                            <h2>{ repo.name }</h2>
                            <p>{ repo.description }</p>
                            <div className='flex justify-between items-center gap-5'>
                                <span className='flex gap-2 items-center'><FaStar /> { repo.stargazers_count }</span>
                                <span className='flex gap-2 items-center'><FaCodeBranch /> { repo.forks_count }</span>
                                <span className='flex gap-2 items-center'><FaEye /> { repo.watchers_count }</span>
                            </div>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
};

export default Repos