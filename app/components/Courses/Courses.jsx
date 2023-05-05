import Link from "next/link";

const fetchCourseData = async () => {
    const res = await fetch('http://localhost:3000/api/courses')
    const json = await res.json()
    return json
}

const Courses = async () => {
    const courses = await fetchCourseData()

    return (
        <div>
            {
                courses?.map(course => (
                    <div key={ course.id } className="bg-gray-200 p-5 rounded-md mb-5">
                        <div className="space-y-3 mb-5">
                            <h3 className="text-lg font-semibold leading-8">{ course.title }</h3>
                            <p className="bg-white inline-block py-1 px-3 text-[12px] font-bold rounded-full">{ course.level }</p>
                            <p className="text-sm leading-6">{ course.description }</p>
                        </div>
                        <div className="flex">
                            <Link href={course.link} target="_blank" className="bg-purple-500 text-white py-2 px-5 rounded">Go to Course</Link>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Courses