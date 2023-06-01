import "./home.css";

const Home = () => {
  return (
    <main id="home">
      <div id="home-container">
        <div id="home-header">
          <h1>Home</h1>
        </div>
        <div id="home-content">
          <h2>Welcome back User!</h2>
          <div id="home-body">
            <div id="home-body-left">
              <h3>Upcoming:</h3>
              <p><b>02/03/23 - </b>Software Engineer- Apple</p>
              <p><b>03/03/23 - </b> Front End Developer- Google</p>
              <p><b>04/03/23 - </b> Go Developer- Netflix</p>
            </div>
            <div id="home-body-right">CHART</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
