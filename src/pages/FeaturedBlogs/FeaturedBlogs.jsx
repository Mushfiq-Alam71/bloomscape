import { useQuery } from "@tanstack/react-query";
import BasicTable from "../../components/BasicTable/BasicTable";
import axios from "axios";
import { useMemo } from "react";
import { Link } from "react-router-dom";


const FeaturedBlogs = () => {

    const { isPending, isError, error, data: blogs } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await axios.get('https://b9-a11-server-eight.vercel.app/featuredblog');
            return res.data;
        }
    })
    const data = useMemo(() => blogs, [blogs]);

    const columns = [
        {
            header: "Serial",
            accessorKey: '_id'
        },
        {
            header: "Blog Name",
            accessorKey: 'name',
            cell: (cell) => {
                return <Link>{cell.row.original.name}</Link>
            }
        },
        {
            header: "Words Count",
            accessorKey: 'wordCount'
        },
        {
            header: "Blog Poster Photo",
            accessorKey: 'posterPhoto',
            cell: (cell) => {
                return <img className="w-12 rounded-full" src={cell.row.original.posterPhoto} alt='' />
            }
        },
        {
            header: 'Blog Posted by',
            accessorKey: 'posterName'
        },
    ]

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


    return (
        <div className="max-w-7xl mx-auto my-12">
            <div className="flex justify-center pb-8">
                <h1 className="text-4xl font-bold">Featured Blogs</h1>
            </div>
            <BasicTable data={data} columns={columns}></BasicTable>
        </div>
    );
};

export default FeaturedBlogs;