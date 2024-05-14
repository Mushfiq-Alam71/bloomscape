import { useReactTable, getCoreRowModel, flexRender, getSortedRowModel } from '@tanstack/react-table';
import { useState } from 'react';

const BasicTable = ({ data, columns }) => {

    const [sortFeaturedBlog, setSortFeaturedBlog] = useState([]);

    const basicTable = useReactTable({
        data, columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        state: { sorting: sortFeaturedBlog },
        onSortingChange: setSortFeaturedBlog
    });

    return (
        <div className='w3-container'>
            <table className='w3-table-all '>
                <thead>
                    {basicTable.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {
                                headerGroup.headers.map(header => <th key={header.id} onClick={header.column.getToggleSortingHandler()}>
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                    {
                                        { asc: '🔼', desc: '🔽' }[
                                        header.column.getIsSorted() ?? null
                                        ]
                                    }
                                </th>)
                            }
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {basicTable.getRowModel().rows.map((row, idx) => (
                        <tr key={row.id}>
                            {
                                row.getVisibleCells().map(cell => (
                                    <td key={cell.id}>
                                        {cell.column.columnDef.accessorKey === '_id' ? (idx + 1) :
                                            (flexRender(cell.column.columnDef.cell, cell.getContext()))}
                                    </td>
                                ))
                            }
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BasicTable;