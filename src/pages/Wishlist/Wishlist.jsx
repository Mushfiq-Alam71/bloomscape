import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BlogCard from "../../components/BlogCard/BlogCard";

const Wishlist = () => {
    const { user } = useContext(AuthContext);
    const [blogItem, setBlogItem] = useState([]);
    useEffect(() => {
        fetch(`https://b9-a11-server-eight.vercel.app/blog/email/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setBlogItem(data);
            })
    }, [user])

    useEffect(() => {
        document.title = "My Collections";
    }, [])
    return (
        <div className="lg:mx-40">
            <div className="flex flex-col">
                <div className="flex flex-col text-left pb-6 lg:pb-8 lg:pt-4 lg:mx-0 md:mx-4 mx-2">
                    <h1 className="font-bold text-[30px] lg:text-[35px] ">Wishlist</h1>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:mx-0 md:mx-4 mx-2">
                {
                    blogItem.map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
                }
            </div>
            <div className="mb-20"></div>
        </div>
    );
};

export default Wishlist;