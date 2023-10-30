import React from 'react';
import { useHistory } from 'react-router-dom';

const GithubButton = (props) => {
    const CLIENT_ID = '0031561c37bdca421135';
    const GITHUB_LOGIN_URL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`
    const handleLogin = ()=>{
        window.location.assign(GITHUB_LOGIN_URL)
    }
    return (
        <div >
            <button onClick={handleLogin}>
                깃허브 로그인
            </button>
        </div>
    );
};

export default GithubButton
