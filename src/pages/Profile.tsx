import React from 'react';
import {Route, Routes} from "react-router-dom";
import ListCommits from "../components/ListCommits";
import Commit from "../components/Commit";

const Profile = () => {
    return (

        <div>
            <div className="container mx-auto max-w-4xl">
                Profile
                <div className='flex'>
                <div className='sticky px-4 min-w-max'>
                    <img className='h-52 w-52 rounded-lg' src="https://avatars.githubusercontent.com/u/74931559?v=4" alt=""/>
                    <div>Alec</div>
                    <div>pandochka-y</div>
                </div>
                <div className='w-full'>
                    <Routes>
                        <Route path={'/'} element={<ListCommits/>}/>
                        <Route path={'/:repo/commits'} element={<Commit/>}/>
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