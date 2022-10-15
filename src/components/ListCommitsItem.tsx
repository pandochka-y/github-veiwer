import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import {IRepos} from "../models/IRepos";

interface IProps {
    repo: IRepos
}

const ListCommitsItem: FC<IProps> = ({repo}) => {
    let navigate = useNavigate();
    const routeToRepoCommits = () => {
        let path = `${ repo.name }/commits`;
        navigate(path);
    }
    return (
        <tr onClick={routeToRepoCommits} className=' shadow-sm cursor-pointer group relative hover:bg-orange-50'>
            <td className='p-0'> <div className='py-6 pr-2 pl-2 text-sm font-bold text-gray-800 group-hover:text-orange-500 group-hover:underline'>{ repo.name }</div>
            </td>
            <td className='p-0'><div className='py-6 pr-2 text-sm '>{ repo.language }</div></td>
            <td className='p-0'><div className='py-6 pr-2 text-sm'>{ repo.description }</div></td>
            <td className='p-0'><div className='py-6 pr-2 text-sm text-center'>{ repo.stargazers_count }</div></td>
        </tr>
    );
};

export default ListCommitsItem;