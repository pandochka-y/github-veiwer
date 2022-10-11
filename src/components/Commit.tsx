import React from 'react';

const Commit = () => {
    return (
        <div>
            <div>Вернуться назад</div>
            <div>Commits</div>
            <div>
                <table className='w-full text-left border-collapse bg-white '>
                    <thead className='shadow-sm'>
                    <tr>
                        <th className='p-0'>
                            <div className='py-4 pr-2 pl-2  border-slate-200 text-xs	sticky uppercase text-stone-600'>Title</div>
                        </th>
                        <th className='p-0'>
                            <div className='py-4 pr-2  border-slate-200 text-xs	sticky uppercase text-stone-600'>Language</div>
                        </th>
                        <th className='p-0'>
                            <div className='py-4 pr-2  border-slate-200 text-xs	sticky uppercase text-stone-600'>Overview</div>
                        </th>
                        <th className='p-0'>
                            <div className='py-4 pr-2 border-slate-200 text-xs	sticky uppercase text-stone-600'>Stars</div>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr  className=' shadow-sm cursor-pointer group relative hover:bg-orange-50'>
                        <td className='p-0'> <div className='py-6 pr-2 pl-2 text-sm font-bold text-gray-800 group-hover:text-orange-500 group-hover:underline '>mayrveda-html</div>
                        </td>
                        <td className='p-0'><div className='py-6 pr-2 text-sm '>HTML</div></td>
                        <td className='p-0'><div className='py-6 pr-2 text-sm'>mayrvedaHtml mayrvedaHtml mayrvedaHtml mayrvedaHtml</div></td>
                        <td className='p-0'><div className='py-6 pr-2 text-sm text-center'>0</div></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Commit;