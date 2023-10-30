import React from 'react';
import {Route, Routes} from 'react-router-dom';
import LoginPage from "./Login";
import MainPage from "./MainPage";
import Oauth from "./Oauth";

const App = () => {
    return (
        <Routes>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/oauth/:oauthType' element={<Oauth/>}/>
        </Routes>
    );
}

export default App