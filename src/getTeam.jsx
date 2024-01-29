import React, {useEffect, useState} from "react";
import {getTeam} from './services/teamService';
import { Link, useParams } from "react-router-dom";

export default function AppTeam() {
  const [t, setTeam] = useState({});
  
    const {_id} = useParams();
    useEffect(() => {

        async function getTeamById(){
            const team = await getTeam(_id)
            setTeam(team.data)
            console.log(team)
        }
        getTeamById()
    }, []);

  return (
    <div className="container">
      <ul className="form-control">
        <p>Equipo: {t.name}</p>
        <p>Ciudad: {t.city}</p>
        <p>Email: {t.email}</p>
      </ul>
    </div>
  )

}