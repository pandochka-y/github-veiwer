import React, {useEffect, useState} from 'react';
import {Route, Routes, useNavigate, useParams} from "react-router-dom";
import ListCommits from "../components/ListCommits";
import DetailCommit from "../components/DetailCommit";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {fetchUser} from "../store/modules/User/ActionCreators";

const Profile = () => {
    const {user} = useAppSelector(state => state.user)
    const {login} = useParams()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const redirectToMain = () => {
        navigate('/')
    }
    console.log(user?.name)
    console.log(login)

    useEffect(() => {
        if (!user && login) {
            dispatch(fetchUser(login))
        }
    }, [])
    return (
        <div>
            <div className="container mx-auto max-w-4xl">
                Profile
                <div className='flex'>
                    <div className='sticky px-4 min-w-max'>
                        <img className='h-52 w-52 rounded-lg' src={user?.avatar_url}
                             alt=""/>
                        <div>{user?.name}</div>
                        <div>{user?.login}</div>
                    </div>
                    <div className='w-full'>
                        <Routes>
                            <Route path={'/'} element={<ListCommits navigate={redirectToMain}/>}/>
                            <Route path={'/:repo/commits'} element={<DetailCommit/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
};

function Home() {
    return <h2>commit</h2>;
}

export default Profile;