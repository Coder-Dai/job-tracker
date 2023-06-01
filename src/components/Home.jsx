import "./home.css";
import { createAno } from "appwrite";

const Home = () => {
  return (
    <main id="home">
      <div id="home-container">
        <div Id="home-header">
          <h1>HOME</h1>
        </div>
        <div id="home-content">
          <h2>Welcome back, User!</h2>
          <div id="home-body">
            <div id="home-body-left">
              <h3>Upcoming:</h3>
              <p>Software Engineer: Apple</p>
              <p>Software Engineer: Google</p>
            </div>
            <div id="home-body-right">CHART</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
