import { Link } from "react-router-dom";

function Nav() {
  return (
    <div
      style={{
        display: "flex",
        width: "60vw",
        justifyContent: "space-between",
      }}
    >
      <Link to="/">To Home</Link>
      <Link to="/createPup">Create Player Form</Link>
    </div>
  );
}

export default Nav;