import { Link, useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
    const loadedBlogs = useLoaderData();
    const { id } = useParams();
    console.log(id, loadedBlogs);

    return (
        <div className="">
            <div className="flex flex-col lg:flex-row justify-center mx-auto py-8 lg:py-16 w-full">
                <div className="flex justify-center">
                    <img className="w-[400px] md:w-[600px] lg:w-[800px] rounded-2xl" src={loadedBlogs.photo} alt="" />
                </div>
                <div className="lg:w-2/5 flex flex-col justify-evenly px-5 md:ml-14 lg:px-0">
                    <h1 className="text-4xl font-bold">{loadedBlogs.name}</h1>
                    <div className="flex flex-col py-4">
                        <h1 className="font-semibold text-lg">Description:</h1>
                        <h1>{loadedBlogs.description}</h1>
                    </div>
                    <h1><span className="text-lg font-semibold">Subcategory: </span>{id}</h1>
                    <h1 className="text-2xl font-semibold text-green-500 pt-4">{loadedBlogs.status}</h1>
                </div>
            </div>
            <div className="flex justify-center pb-16">
                <Link to='/' className="btn btn-outline text-xl">Go Back</Link>
            </div>
        </div>
    );
};

export default CardDetails;