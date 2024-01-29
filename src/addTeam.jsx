import React, { useState, useEffect} from "react";
import {postTeam, getTeam, updateTeam} from './services/teamService';
import { useParams } from "react-router-dom";

export default function AddTeams() {
    const [newTeam, setNewTeam] = useState({
        name: "",
        city: "",
        email: ""
    });

    const [check, setCheck] = useState(false)
    const {_id} = useParams();

    useEffect(() => {
        if (_id!= "" || _id!=null){

            getTeam(_id).then((response) => {
                setNewTeam(response.data)
                setCheck(true)
            })
        }
      }, []);

    const addTeam = async (e) => {
        e.preventDefault();
        const team = await postTeam(newTeam);
        setNewTeam(team.data)
        setCheck(true)
    }

    function handleTeam(e) {
        setNewTeam({
            ...newTeam,
            [e.target.name]: e.target.value
        })
    }

    function update(e) {
       e.preventDefault();
        updateTeam(_id, newTeam).then()

    }


    return (
        <div className="container">
            <h2>Añadir/Editar nuevo equipo</h2>
            <form>
                <label > Nombre: </label>
                <input className="form-control" type="text" name="name" onChange={handleTeam} value={newTeam.name}></input><br></br>
                
                <label> Ciudad: </label>
                <input className="form-control" type="text" name="city" onChange={handleTeam} value={newTeam.city}></input><br></br>

                <label> Email: </label>
                <input className="form-control" type="text" name="email" onChange={handleTeam} value={newTeam.email}></input><br></br>
                
                    {!check ?  <button className="btn btn-primary" type="submit" onClick={addTeam}>Añadir</button> : <button className="btn btn-warning" type="submit" onClick={update}>Editar</button>} 
                
            </form>
        </div>
    )
}
