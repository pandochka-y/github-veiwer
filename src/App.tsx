import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Search from "./pages/Search";
import Profile from "./pages/Profile";

function App() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Search/>}/>
                <Route path={'/user/:user/*'} element={<Profile/>}/>
            </Routes>
        </Router>
);
}

export default App;
