import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateBlogs = () => {
    const craft = useLoaderData();

    useEffect(() => {
        document.title = "Update Items";
    }, [])

    const { _id, name, category, description, photo } = craft;

    const handleUpdateCraft = event => {
        event.preventDefault();

        // console.log(user.email);

        const form = event.target;

        const name = form.name.value;
        const categorySelect = document.getElementById('categorySelect');
        const category = categorySelect.value;
        const description = form.description.value;
        const longdescription = form.longdescription.value;
        const photo = form.photo.value;
        // const email = user.email;

        const newBlog = { name, category, description, longdescription, photo };
        console.log(newBlog);

        // send data to server
        fetch(`https://b9-a-assignment-10-server-theta.vercel.app/craft/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBlog)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Item updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div className="max-w-7xl mx-auto">
            <div className=" bg-gradient-to-r from-[#83efb084] to-[#05f5454b] py-28 px-36 rounded-xl mb-8">
                <div className="text-center pb-8">
                    <h2 className="text-4xl font-semibold">Update Blogs</h2>
                </div>
                <form onSubmit={handleUpdateCraft} className="border-2 border-blue-900 p-8 rounded-2xl">

                    {/* form row 1*/}
                    <div className="md:flex gap-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-base font-semibold">Blogs Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Enter blogs Name" name="name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-base font-semibold">Category</span>
                            </label>
                            <select id="categorySelect" className="select select-bordered w-full">
                                <option disabled selected>Choose category</option>
                                <option value="Flowering Plants" className="">Flowering Plants</option>
                                <option value="Foliage Plants" className="">Foliage Plants</option>
                                <option value="Medicinal Plants" className="">Medicinal Plants</option>
                                <option value="Succulents and Cacti" className="">Succulents and Cacti</option>
                                <option value="Indoor Plants" className="">Indoor Plants</option>
                                <option value="Tropical Plants" className="">Tropical Plants</option>
                                <option value="Aquatic Plants" className="">Aquatic Plants</option>
                                <option value="Bonsai and Miniature Plants" className="">Bonsai and Miniature Plants</option>
                            </select>
                        </div>

                    </div>
                    {/* form row 2*/}
                    <div className="md:flex gap-4">
                        <div className="form-control md:w-full">
                            <label className="label">
                                <span className="label-text text-base font-semibold">Short Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Enter short description" name="description" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* form row 3*/}
                    <div className="md:flex gap-4">
                        <div className="form-control md:w-full">
                            <label className="label">
                                <span className="label-text text-base font-semibold">Image URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Enter image URL" name="photo" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* form row 4*/}
                    <div className="md:flex gap-4 mb-6">
                        <div className="form-control md:w-full">
                            <label className="label">
                                <span className="label-text text-base font-semibold">Long Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Enter long description" name="longdescription" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" className="btn btn-block text-white bg-[#04041cd8] hover:bg-[#04041cbf]" value="Add Craft" />
                </form>
            </div>
        </div>
    );
};

export default UpdateBlogs;