import "./nav.css";
import { Link } from "react-router-dom";
import { Client, Account } from "appwrite";
import { useContext } from "react";
import UserContext from "../contexts/userContext";

const projectEndPoint = "https://cloud.appwrite.io/v1";
const projectId = "646d0604df6385bc7d16";

const client = new Client().setEndpoint(projectEndPoint).setProject(projectId);

const account = new Account(client);

const Nav = () => {
  const { setUserId } = useContext(UserContext);

  async function AnonymousSignIn() {
    try {
      const user = await account.createAnonymousSession();

      setUserId(user.userId);
      alert("Anonymously logged in!");
    } catch (error) {
      console.log(error);
    }
  }

  async function LogOut() {
    try {
      await account.deleteSessions();

      setUserId(null);
      alert("Successfully logged out!");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <nav>
      <ul className="nav-list">
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/tracker" onClick={AnonymousSignIn}>
          <li>Tracker</li>
        </Link>
        <Link to="/myaccount">
          <li>MyAccount</li>
        </Link>
        <li onClick={logout}>Logout</li>
      </ul>
    </nav>
  );
};

export default Nav;
