import React, {FC, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import ListCommitsItem from "./ListCommitsItem";
import {IRepos} from "../models/IRepos";
import {useAppSelector} from "../hooks/redux";

interface IProps {
    navigate: () => void
}

const ListCommits: FC<IProps> = ({navigate}) => {
    const {user} = useAppSelector(state => state.user)
    const [repos, setRepos] = useState<IRepos[]>([
        { id: 1, name: 'mayrveda-html', html_url: '123', language: 'HTML', description: 'mayrvedaHtml mayrvedaHtml mayrvedaHtml mayrvedaHtml', stargazers_count: 0},
        { id: 2, name: 'mayrveda-html2', html_url: '123', language: 'HTML2', description: 'mayrvedaHtml mayrvedaHtml mayrvedaHtml mayrvedaHtml', stargazers_count: 2},
    ])
    return (
        <div>
            <button onClick={navigate}>Вернуться к поиску</button>
            <div>Repos</div>
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
                {
                    repos.map((repo) =>
                        <ListCommitsItem
                            repo={repo}
                            key={repo.id}/>)
                }
                </tbody>
            </table>

            </div>
        </div>
    );
};

export default ListCommits;