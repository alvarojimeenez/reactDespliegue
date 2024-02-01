import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppTeams from "./getTeams";
import AddTeams from "./addTeam";
import AppTeam from "./getTeam";
import Layout from "./layout";
import RegisterUser from "./register";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/teams" element={<AppTeams />}></Route>
                <Route path="/addTeam" element={<AddTeams />}></Route>
                <Route path="/addTeam/:_id" element={<AddTeams />}></Route>
                <Route path="/detail/:_id"  element={<AppTeam/>}></Route>
                <Route path="/register"  element={<RegisterUser/>}></Route>
                <Route path="*" element={<h1>Error 404</h1>}></Route>
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router;