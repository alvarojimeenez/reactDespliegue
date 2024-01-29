import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <nav style={{ display: "flex", justifyContent: "space-around" }}>
        <Link to="/teams">Team</Link>
        <Link to="/addTeam">Add team</Link>
      </nav>
      <Outlet />
    </>
  );
};
export default Layout;