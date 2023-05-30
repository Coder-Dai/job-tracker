import './nav.css'
import { Link } from 'react-router-dom';
import { Client, Account } from "appwrite";


const anonymousSignIn = () => {

  const client = new Client();
  
  const account = new Account(client);
  
  client
      .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
      .setProject('646d0604df6385bc7d16') // Your project ID
  ;
  
  const promise = account.createAnonymousSession();
  
  promise.then(function (response) {
      console.log(response, "USER"); // Success
  }, function (error) {
      console.log(error); // Failure
  });

}


const Nav = () => {
  return (
    <nav>
      <ul className='nav-list'>
        <Link to='/home'><li>Home</li></Link>
        <Link to='/tracker' onClick={anonymousSignIn}><li>Tracker</li></Link>
        <li>Logout</li>
      </ul>
    </nav>
  );
};

export default Nav;
