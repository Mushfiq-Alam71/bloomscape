import { Link, useLoaderData } from "react-router-dom";
import BlogCard from "../../components/BlogCard/BlogCard";
import Banner from "../../components/Banner/Banner";

const Home = () => {
    const blogs = useLoaderData();
    return (
        <div className="">
            <Banner></Banner>

            <div className="mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {
                        blogs.map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
                    }
                </div>
            </div>
            <div>
                <Link to='/allblogs' className="btn btn-outline">Show More</Link>
            </div>
        </div>
    );
};

export default Home;
