import React from 'react';
import {Link} from "react-router-dom";

const MainPage = () => {
    return (
        <div>
            <Link to={`/login`}>{`로그인 페이지`}</Link>
        </div>
    )
}

export default MainPage