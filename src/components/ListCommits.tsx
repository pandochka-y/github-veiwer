import React from 'react';
import {Link, useNavigate} from "react-router-dom";


const generalTableStyle = {
    paddingRight: 5,
    paddingBottom: 5,
    paddingTop: 5
}

const tableTitle = {
    fontSize: 25
}
const titleTable = {
    verticalAlign: ''
}

const ListCommits = () => {
    let navigate = useNavigate();
    const routeChange = () =>{
        let path = `mayrveda-html/commits`;
        navigate(path);
    }
    return (
        <div>
            <div>Вернуться к поиску</div>
            <div>Repos</div>
            <div>
                <table className='w-full text-left border-collapse bg-white'>
                    <thead className='shadow-sm'>
                    <tr>
                    <th className='p-0'>
                        <div className='py-4 pr-2 pl-2  border-slate-200 text-xs sticky uppercase text-stone-600'>Автор</div>
                    </th>
                    <th className='p-0'>
                        <div className='py-4 pr-2  border-slate-200 text-xs	sticky uppercase text-stone-600'>Хэш коммита</div>
                    </th>
                    <th className='p-0'>
                        <div className='py-4 pr-2  border-slate-200 text-xs	sticky uppercase text-stone-600'>Дата в формате iso8601 (YYYY-MM-DD)</div>
                    </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr onClick={routeChange} className='shadow-sm cursor-pointer group relative hover:bg-orange-50'>
                        <td className='p-0'> <div className='py-6 pr-2 pl-2 text-sm font-bold text-gray-800 group-hover:text-orange-500 group-hover:underline'>mayrveda-html</div>
                        </td>
                        <td className='p-0'><div className='py-6 pr-2 text-sm '>HTML</div></td>
                        <td className='p-0'><div className='py-6 pr-2 text-sm'>2022-10-09</div></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListCommits;