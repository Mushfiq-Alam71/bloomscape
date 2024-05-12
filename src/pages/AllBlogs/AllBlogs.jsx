import { useLoaderData } from 'react-router-dom';
import BlogCard from '../../components/BlogCard/BlogCard';
import Filter from '../../components/Filter/Filter';
import { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';

const AllBlogs = () => {
    const blogs = useLoaderData();
    const [item, setItem] = useState(blogs);
    const filterBlogs = [...new Set(blogs.map((val) => val.category))]

    const filterItems = (cat) => {
        const newItems = blogs.filter((newVal) => newVal.category === cat)
        setItem(newItems)
    }

    return (
        <div className="mx-2 md:mx-8 my-2 md:my-8 p-2 md:px-4">
            ALL BLOGS: {blogs.length}
            <div className='flex flex-col items-center gap-8 justify-center'>
                <div className=''>
                    <SearchBar blogs={blogs}></SearchBar>
                </div>
                <div>
                    <Filter
                        filterBlogs={filterBlogs}
                        filterItems={filterItems}
                        setItem={setItem}
                        blogs={blogs}
                        item={item}
                    ></Filter>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
                {
                    item.map(blog => <BlogCard key={blogs._id} blog={blog}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default AllBlogs;