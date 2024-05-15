import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import axios from "axios";
import Comment from "./Comment";


const Comments = ({ blog }) => {
    const { user } = useContext(AuthContext);
    const { _id, posterEmail } = blog;

    const { isPending, isError, error, data: comments, refetch } = useQuery({
        queryKey: ['comments', _id],
        queryFn: async () => {
            const res = await axios.get(`https://b9-a11-server-eight.vercel.app/comments/${_id}`);
            return res.data;
        }, enabled: true,
    })

    const handleComment = (event) => {
        event.preventDefault();
        const blogComment = event.target.comment.value;
        if (blogComment === "") {
            toast.error('Cannot submit empty comment!')
            return;
        }
        if (user.email === posterEmail) {
            toast.error('Unable to comment on own blog!');
            return;
        }

        const data = {
            body: blogComment,
            userEmail: user.email,
            userName: user.displayName,
            userPhoto: user.photoURL,
            blogId: _id
        }
        axios.post('https://b9-a11-server-eight.vercel.app/comments', { ...data })
            .then(res => {
                if (res.data.insertedId) {
                    event.target.reset();
                    refetch();
                    toast.success("Comment added successfully");
                }
            })
            .catch(error => {
                console.error(error);
                toast.error("Error happened!");
            })

        if (isError) {
            return (
                <div className="flex items-center justify-center space-x-2">
                    <span>Error: {error.message}</span>
                </div>
            )
        }

        if (isPending) {
            return (
                <div className="flex items-center justify-center space-x-2">
                    <img src={`../../../public/images/loading.svg`} alt="" />
                </div>
            )
        }

    }

    return (
        <div>
            <h1 className="text-2xl text-bold pb-4">Comment your opinion:</h1>
            <form onSubmit={handleComment} className="flex flex-row gap-4" >
                <textarea className="w-2/3 h-32 pt-2 border-2 rounded-xl p-2 " name="comment" placeholder="Enter your comment here..." id="comment"></textarea>
                <button className="btn btn-outline text-xl" type="submit">Submit</button>
            </form>
            {
                comments?.map(comment => (
                    <>
                        <Comment comment={comment} key={comment._id}></Comment>
                    </>
                ))
            }
        </div>
    );
};

export default Comments;