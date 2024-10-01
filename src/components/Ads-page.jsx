import quiz from "../assets/quiz.jpg";

const AdvertisementPage = ({ setPage }) => {
  return (
    <div className="container">
      <h1>Advertisement Page</h1>
      <img src={quiz} alt="quiz image" />
      <a href="https://google.com" className="btn">
        Learn More
      </a>
      <br />
      <br />
      <br />
      <button
        onClick={() => {
          setPage("result");
        }}
      >
        Go to Result-page
      </button>
    </div>
  );
};

export default AdvertisementPage;
