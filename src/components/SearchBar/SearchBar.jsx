import axios from "axios";
import { useState } from "react";
import BlogCard from "../BlogCard/BlogCard";

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/blog-search?search=${searchQuery}`);
            setSearchResults(response.data);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };
    return (
        <div className="flex flex-col gap-6">
            <div className="flex gap-4">
                <input type="text" className="input input-bordered w-full max-w-xs" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <button onClick={handleSearch} className="btn btn-outline">Search</button>
            </div>
            <div>
                {searchResults.map((result) => (
                    <BlogCard key={result._id} blog={result}></BlogCard>
                ))}
            </div>
        </div>
    );
};

export default SearchBar;