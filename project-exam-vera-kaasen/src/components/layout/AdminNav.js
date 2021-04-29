import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Navigation() {
  const [auth, setAuth] = useContext(AuthContext);

  const history = useHistory();

  function logout() {
    setAuth(null);
    history.push("/");
  }

  return (
    <nav>
      <Link to="/">Home</Link>
      {auth ? (
        <>
          | <Link to="/Admin"> Admin</Link> |
          <button onClick={logout}>log out</button>
        </>
      ) : (
        <Link to="/loginPage">Login</Link>
      )}
    </nav>
  );
}

export default AdminNav;
