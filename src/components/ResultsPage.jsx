const ResultPage = ({
  correctAnswers,
  setPage,
  setCorrectAnswers,
  quizQuestions,
}) => {
  // This function will reload the page to allow the user to try again

  return (
    <div className="result-page">
      <h1>Result</h1>
      <p>
        Your score: {correctAnswers} out of {quizQuestions.length}
      </p>
      {/* Conditional Rendering */}
      {correctAnswers >= quizQuestions.length ? (
        <>
          <p>This is great</p> {/* Show "This is great" message */}
        </>
      ) : (
        <>
          <button
            onClick={() => {
              setPage("categories");
              setCorrectAnswers(0);
            }}
          >
            Try Again
          </button>{" "}
          {/* Show "Try Again" button */}
        </>
      )}
    </div>
  );
};

export default ResultPage;
