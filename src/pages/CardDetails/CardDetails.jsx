import { useContext } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Comments from "../../components/Comments/Comments";

const CardDetails = () => {
    const loadedBlog = useLoaderData();
    const { posterEmail } = loadedBlog;
    const { id } = useParams();
    console.log(id, loadedBlog);
    const { user } = useContext(AuthContext);

    return (
        <div className="">

            <div className="flex flex-col lg:flex-row justify-center mx-auto pb-8 lg:pt-16 lg:pb-4 w-full">
                <div className="flex justify-center">
                    <img className="w-[400px] md:w-[600px] lg:w-[800px] rounded-2xl" src={loadedBlog.photo} alt="" />
                </div>
                <div className="lg:w-2/5 flex flex-col justify-evenly px-5 md:ml-14 lg:px-0">

                    <h1 className="text-4xl font-bold">{loadedBlog.name}</h1>
                    <div className="flex flex-row items-center gap-2 py-2 ">
                        <h1 className="text-lg font-semibold">Category:</h1>
                        <h1 className="text-lg font-bold">{loadedBlog.category}</h1>
                    </div>
                    <div className="flex flex-col py-4">
                        <h1 className="font-semibold text-lg">Description:</h1>
                        <h1>{loadedBlog.description}</h1>
                    </div>
                    <h1 className="text-2xl font-semibold text-green-500 pt-4">{loadedBlog.status}</h1>
                </div>
            </div>
            <div className="lg:mx-40 mt-8"><span className="text-lg font-semibold">Detailed Info:</span> {loadedBlog.longdescription}</div>
            <div className="flex justify-center py-12 gap-4">
                <Link to='/' className="btn btn-outline text-xl">Go Back</Link>
                {
                    posterEmail === user?.email && <Link to={`/updateblogs/${loadedBlog._id}`} className="btn btn-outline text-xl">Update</Link>
                }
            </div>
            <div className="lg:ml-40 pt-8 pb-20">
                <Comments blog={loadedBlog}></Comments>
            </div>
        </div>
    );
};

export default CardDetails;