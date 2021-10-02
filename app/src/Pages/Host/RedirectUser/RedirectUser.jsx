import React, { useEffect } from 'react';
import axios from 'axios';
import "./Redirect.css";

function RedirectUser(props) {

    useEffect(() => {
        // After requesting Github access, Github redirects back to your app with a code parameter
        const url = window.location.href;
        const hasCode = url.includes("?code=");
        console.log(url.split("?code="))

        // If Github API returns the code parameter
        if (hasCode) {
            const newUrl = url.split("?code=");
            window.history.pushState({}, null, newUrl[0]);

            const requestData = {
                code: newUrl[1]
            };

            axios("https://github.com/login/oauth/access_token",{
                method: "POST",
                params: {
                    client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
                    client_secret: process.env.REACT_APP_GITHUB_CLIENT_SECRET,
                    code: requestData.code
                }
            })
            .then(async res => {
                const {data} = await axios("http://localhost:8080/user",{
                    method: "POST",
                    data: {access_token: res.data.split("=")[1].split("&")[0]}
                })
                console.log(data)
            }).catch(e => {
                console.log(e.message)
            })
        }
    }, []);

    return (
        <div className="redirect-div">
            <div class="spinner"></div>
            <p className="message">Please wait...</p>
        </div>
    );
}

export default RedirectUser;