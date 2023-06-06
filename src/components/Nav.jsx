import "./nav.css";
import { Link } from "react-router-dom";
import { Account } from "appwrite";
import { useContext } from "react";
import UserContext from "../contexts/userContext";
import { appwriteClient } from "../appwriteClient/client"

const account = new Account(appwriteClient);

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
        <li onClick={LogOut}>Logout</li>
      </ul>
    </nav>
  );
};

export default Nav;
