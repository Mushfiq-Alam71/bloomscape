import { useLoaderData } from 'react-router-dom';
import BlogCard from '../../components/BlogCard/BlogCard';

const AllBlogs = () => {
    const blogs = useLoaderData();
    return (
        <div className="mx-2 md:mx-8 my-2 md:my-8 p-2 md:px-4">
            ALL BLOGS: {blogs.length}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
                {
                    blogs.map(blog => <BlogCard key={blogs._id} blog={blog}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default AllBlogs;