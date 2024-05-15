import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Comment = ({ comment }) => {
    const { user } = useContext(AuthContext);
    const { _id, userName, body, userEmail, userPhoto } = comment;
    return (
        <div className="my-4 ml-4 flex flex-row items-center">
            <div className="flex flex-row items-center gap-4">
                <img src={userPhoto} className=" w-16 h-16 rounded-full" alt="" />
                <h4 className="" title={userEmail}><span className="font-bold text-base">{userName}</span> Commented:</h4>
            </div>
            <div>
                <p className="ml-2">{body}</p>
            </div>

        </div>
    );
};

export default Comment;