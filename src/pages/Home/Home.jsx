import { useLoaderData } from "react-router-dom";
import BlogCard from "../../components/BlogCard/BlogCard";

const Home = () => {
    const blogs = useLoaderData();
    return (
        <div className="mx-2 md:mx-8 my-2 md:my-8 p-2 md:px-4">
            home: {blogs.length}

            {
                blogs.map(blog => <BlogCard key={blogs._id} blog={blog}></BlogCard>)
            }
        </div>
    );
};

export default Home;
