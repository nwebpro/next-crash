import Link from "next/link"

const fetchRepoContents = async (name) => {
    await new Promise(resolve => {
        setTimeout(resolve, 3000)
    })
    const res = await fetch(`https://api.github.com/repos/nwebpro/${ name }/contents`, {
        next: {
            revalidate: 60
        },
    })
    const contents = await res.json()
    return contents
}

const RepoDirs = async ({ name }) => {
    const contents = await fetchRepoContents(name)
    const dirs = contents.filter(content => content.type === 'dir')
    return (
        <div className="mt-5">
            <h2 className="text-base font-bold mb-5">Directories</h2>
            <ul className="list-disc pl-5">
                {
                    dirs.map(dir => (
                        <li key={ dir.path }>
                            <Link href={`/code/repos/${ name }/${ dir.path }`}>
                                { dir.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default RepoDirs;