import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Comment = ({ comment }) => {
    const { user } = useContext(AuthContext);
    const { _id, userName, body, userEmail, userPhoto } = comment;
    return (
        <div className="my-4 ml-4">
            <div>
                <img src={userPhoto} className=" w-16 h-16 rounded-full" alt="" />
                <h4 className="" title={userEmail}>{userName}Commented:</h4>
            </div>
            <p className="">{body}</p>

        </div>
    );
};

export default Comment;