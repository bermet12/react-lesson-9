import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginInitiate } from "../redux/reducers/action";
import { logoutInitiate } from "../redux/reducers/action";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.currentUser);

    useEffect(() => {
        if (user) {
            navigate('/home')
        }
    }, [user, navigate])



    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email !== !password) {
            return
        }
        dispatch(loginInitiate(email, password))
    }

    const handleAuth = () => {
        if (user) {
            dispatch(logoutInitiate())
        }
        setTimeout(() => {
            navigate('/')
        }, 1000)
    }

    return (
        <div>
            <h1>Авторизоваться</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder="email..." value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                <input placeholder="пароль..." type='password' value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                <button type="submit">ВОЙТИ</button>
                <button type="submit" onClick={handleAuth}>ВЕРНУТЬСЯ</button>
            </form>
        </div>
    )
}

export default Login;