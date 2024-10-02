import "./ads-page.css"; // Import the CSS file
import car from "../assets/car.png";

const AdvertisementPage = ({ setPage, currentUser }) => {
  return (
    <div className="container">
      <header>
        <h1>Advertisement Page</h1>
      </header>

      <main>
        <section>
          <img src={car} alt="Advertisement for car" />
        </section>

        <section>
          <a href="https://google.com" className="btn">
            {" "}
            Learn More
            <i className="fas fa-info-circle"></i>
          </a>
        </section>
      </main>

      <footer>
        <button onClick={() => setPage("result")}>
          {" "}
          Go to Result Page
          <i className="fas fa-arrow-right"></i>{" "}
        </button>
      </footer>
    </div>
  );
};

export default AdvertisementPage;
