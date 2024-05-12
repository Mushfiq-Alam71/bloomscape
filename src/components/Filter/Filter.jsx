

const Filter = ({ filterBlogs, filterItems, setItem, blogs }) => {
    const handleSelectAll = (event) => {
        const selectedValue = event.target.value;
        if (selectedValue === "") {
            setItem(blogs);
        } else {
            filterItems(selectedValue);
        }
    };

    return (

        <div className="flex justify-center gap-4 mt-4 mb-8">
            {
                <select className="select select-bordered border-2 border-black" onChange={(event) => handleSelectAll(event)}>
                    <option value="">All</option>
                    {filterBlogs.map((val, index) => (
                        <option key={index} value={val}>{val}</option>
                    ))}
                </select>

            }
            {/* <button className="btn btn-outline" onClick={() => setItem(blogs)}>
                All
            </button> */}
        </div>
    );
};

export default Filter;