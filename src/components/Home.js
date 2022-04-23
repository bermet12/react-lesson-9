import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutInitiate } from "../redux/reducers/action";

const Home = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.currentUser);

    const handleAuth = () => {
        if (user) {
            dispatch(logoutInitiate())
        }
    }
    return (
        <div>
            <h1>Учетная запись</h1>
            <button onClick={handleAuth}>Выйти</button>
        </div>
    )
}

export default Home;