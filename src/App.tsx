import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import {useAppSelector} from "./hooks/redux";

function App() {
    const {} = useAppSelector(state => state.user)
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Search/>}/>
                <Route path={'/user/:login/*'} element={<Profile/>}/>
            </Routes>
        </Router>
);
}

export default App;
