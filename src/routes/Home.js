import React from "react";

 function home(){
    function goToLogin(e) {
        window.location.href="/#/Login";
    }

    return (
        <button onClick={goToLogin}>무료로 시작하기</button>
    )
 }
 
export default home;
