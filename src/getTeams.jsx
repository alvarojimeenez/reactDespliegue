import React, {useEffect, useState} from "react";
import {deleteTeam, getTeams, getTeam} from './services/teamService';
import { Link } from "react-router-dom";

export default function AppTeams() {
  const [t, setTeam] = useState(null);
  
  useEffect(() => {
    async function getTeamsComp(){
      const teams = await getTeams();
      setTeam(teams.data)
    }
    getTeamsComp()
  }, []);
 
  async function deleteTeams(id){
    await deleteTeam(id);
    setTeam(t.filter((team)=>team._id !== id))
  }
  
  const elementTeam = t && t.map((element, index) => (
    <li key={index}> 
      Equipo: {element.name} <br></br>
      Ciudad: {element.city} <br></br>
      Email: {element.email}
      <button><Link to={`/detail/${element._id}`}>Details</Link></button>
      <button><Link to={`/addTeam/${element._id}`}>Edit</Link></button>
      <button onClick={()=>deleteTeams(element._id)} id={element._id}> Borrar </button>
    </li>
  ));
  
  return (
    <div className="container">
      <ul className="form-control">
        {elementTeam}
      </ul>
    </div>
  )
}