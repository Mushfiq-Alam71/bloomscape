import { Link } from "react-router-dom";


const BlogCard = ({ blog }) => {
    const { _id, name, category, description, photo } = blog;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <p className="text-sm font-semibold">{category}</p>
                <h2 className="card-title">{name}</h2>
                {
                    description.length > 100
                        ? <p>{description.slice(0, 160)} <Link to={`/blog/${_id}`} className="text-blue-500 text-base font-semibold">Read More...</Link></p>
                        : <p>{description}</p>
                }
                <div className="card-actions justify-end">
                    <Link to={`/blog/${_id}`} className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;