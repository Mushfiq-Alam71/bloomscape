import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";


const BlogCard = ({ blog }) => {
    const { _id, name, category, description, photo, posterEmail } = blog;
    const { user } = useContext(AuthContext);
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
                <div className="card-actions flex flex-row">
                    {
                        posterEmail === user?.email && <Link to={`/updateblogs/${_id}`} className="btn btn-outline">Update</Link>
                    }
                    <Link to={`/blog/${_id}`} className="btn btn-outline">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;