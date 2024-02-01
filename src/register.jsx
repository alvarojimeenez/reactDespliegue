import React, { useState} from "react";
import {postUser} from './services/userService';

export default function RegisterUser() {
    const [newUser, setNewUser] = useState({
        name: "",
        password: "",
        email: "",
        login: "",
        role: "user",
        active: false
    });

    const [check, setCheck] = useState(false)


    const addUser = async (e) => {
        e.preventDefault();
        const user = await postUser(newUser);
        setNewUser(user.data)
        setCheck(true)
    }

    function handleUser(e) {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="container">
            <h2>Registrar usuario</h2>
            <form>
                <label > Nombre: </label>
                <input className="form-control" type="text" name="name" onChange={handleUser} value={newUser.name} required></input><br></br>
                
                <label> Password: </label>
                <input className="form-control" type="password" name="password" onChange={handleUser} value={newUser.password} required></input><br></br>

                <label> Email: </label>
                <input className="form-control" type="email" name="email" onChange={handleUser} value={newUser.email} required></input><br></br>

                <label> Login: </label>
                <input className="form-control" type="text" name="login" onChange={handleUser} value={newUser.login} required></input><br></br>
                
                <button className="btn btn-warning" type="submit" onClick={addUser}>Añadir</button> 
                
            </form>
        </div>
    )
}
