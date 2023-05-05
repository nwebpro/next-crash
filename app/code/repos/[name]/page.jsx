import { Suspense } from "react";
import Repo from "@/app/components/Repo/Repo";
import RepoDirs from "@/app/components/Repo/RepoDirs";

const SingleRepo = ({ params }) => {
    const { name } = params
    return (
        <div className="max-w-3xl mx-auto py-5">
            <div className="bg-gray-200 p-5 rounded-md">
                <Suspense fallback={<div>Loading repo...</div>}>
                    <Repo name={ name } />
                </Suspense>
                <Suspense fallback={<div>Loading directories...</div>}>
                    <RepoDirs name={ name } />
                </Suspense>
            </div>
        </div>
    );
};

export default SingleRepo;