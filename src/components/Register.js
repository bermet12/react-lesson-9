import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerInitiate } from "../redux/reducers/action";

const Register = () => {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const dispatch = useDispatch();
    const user = useSelector(state => state.currentUser);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/home')
        }
    }, [navigate, user])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== passwordConfirm) {
            return;
        }
        dispatch(registerInitiate(email, password, displayName))
    }

    return (
        <div>
            <h1>Регистрация</h1>

            <form onSubmit={handleSubmit}>
                <input placeholder="имя..." value={displayName} onChange={e => setDisplayName(e.target.value)} /><br />
                <input placeholder="email..." value={email} onChange={e => setEmail(e.target.value)} /><br />
                <input placeholder="пароль..." type='password' value={password} onChange={e => setPassword(e.target.value)} /><br />
                <input placeholder="повторите пароль..." type='password' value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)} /><br />
                <button style={{
                    backgroundColor: "teal",
                    color: 'white'
                }}
                    type={"submit"}>СОХРАНИТЬ</button>
            </form>
        </div>
    )
}

export default Register;