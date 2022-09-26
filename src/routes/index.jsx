import React from "react";
import { Route, Routes } from "react-router-dom"
import { Home } from '../pages/Home/Home';
import { Login } from '../pages/Login/Login';
import { SignIn } from "../pages/SignIn/SignIn";
import { ChatRoom } from "../pages/ChatRoom/ChatRoom";
import { User } from "../pages/User/User";
import { useAuth } from "../hooks/useAuth";


const Private = ({Item}) => {
    let { logado } = useAuth();

    return logado > 0 ? <Item /> : <Login /> 
}

const PrivateLoginSign = ({Item}) => {
    let { logado } = useAuth();

    return logado > 0 ? <User />  : <Item />
}

export function MainRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<PrivateLoginSign Item={Login} />} />
            <Route path="signin" element={<PrivateLoginSign Item={SignIn} />} />
            <Route path="chatroom" element={<Private Item={ChatRoom} />} />
            <Route path="user" element={<User />} />
        </Routes>
    )
}