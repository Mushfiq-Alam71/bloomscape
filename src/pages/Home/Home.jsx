import { Link, useLoaderData } from "react-router-dom";
import BlogCard from "../../components/BlogCard/BlogCard";

const Home = () => {
    const blogs = useLoaderData();
    return (
        <div className="mx-2 md:mx-8 my-2 md:my-8 p-2 md:px-4">
            HOME: {blogs.length}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
                {
                    blogs.map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
                }
            </div>
            <div>
                <Link to='/allblogs' className="btn btn-outline">Show More</Link>
            </div>
        </div>
    );
};

export default Home;
