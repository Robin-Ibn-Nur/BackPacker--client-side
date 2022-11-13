import React, { useEffect, useState } from 'react';
import AllDataTable from './AllDataTable';

const AllData = () => {

    const [allData, setAllData] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviewer')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])

    return (
        <div className="overflow-x-auto w-full bg-orange-700 border-amber-300">
            <table className="table w-full">
                <thead className='border'>
                    <tr>
                        <th>Selected Option</th>
                        <th>Name</th>
                        <th>Message</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody className='bg-orange-700'>
                    {
                        allData.map(data => <AllDataTable
                            key={data._id}
                            data={data}
                        ></AllDataTable>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllData;