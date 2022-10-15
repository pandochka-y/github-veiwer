import React from 'react';
import {useNavigate, useParams} from "react-router-dom";

const DetailCommit = () => {
    const {login} = useParams()
    const navigate = useNavigate()
    const routeBackToProfile = () => {
        let path = `/user/${login}`;
        navigate(path);
    }
    return (
        <div>
            <button onClick={routeBackToProfile}>Вернуться в профиль</button>
            <div>Commits</div>
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
                            <div className='py-4 pr-2  border-slate-200 text-xs	sticky uppercase text-stone-600'>Дата YYYY-MM-DD</div>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr  className='shadow-sm cursor-pointer group relative hover:bg-orange-50'>
                        <td className='p-0'> <div className='py-6 pr-2 pl-2 text-sm font-bold text-gray-800 group-hover:text-orange-500 group-hover:underline'>pandochka-y</div>
                        </td>
                        <td className='p-0'><div className='py-6 pr-2 text-sm '>a3f5ce4259071e672f463a064b6b3680babf3744</div></td>
                        <td className='p-0'><div className='py-6 pr-2 text-sm'>Sep 23, 2022</div></td>
                    </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default DetailCommit;