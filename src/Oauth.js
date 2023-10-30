import React, {useEffect} from 'react';
import {useNavigate, useParams, useSearchParams} from 'react-router-dom';
import axios from "axios";

const Oauth = () => {
    let {oauthType} = useParams();
    const [serchParams] = useSearchParams();
    let navigate = useNavigate();

    useEffect(() => {
        const gotoMainPage = () => {
            navigate('/', {replace: true});
        }

        const login = (code) => {
            const url = 'http://localhost:8080/login/oauth/' + oauthType;
            axios.post(url, {
                headers: {
                    'Authorization': code
                }
            }).then(response => {
                // TODO MainPage에 Login 관련 정보 추가(로그인 여부 확인 가능하게)
                gotoMainPage();
            }).catch(error => {
                // TODO 로그인 오류 처리
                console.error(error);
            });
        }
        const authenticationGithub = () => {
            const githubCode = serchParams.get('code');
            if (githubCode == null) {
                alert('Github Oauth Login 실패');
                gotoMainPage();
                return;
            } else {
                login(githubCode);
            }
        };

        if (oauthType === 'github') {
            authenticationGithub();
        } else {
            alert('Oauth Type이 올바르지 않습니다.');
            gotoMainPage();
        }
    });

    return (
        <div>
            <h1>테스트</h1>
            <h1>{oauthType}</h1>
        </div>
    )
}

export default Oauth