import { useState } from "react";

const ResultPage = () => {
  const { score, total } = useState();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Result</h1>
      <p>
        Your score: {score} out of {total}
      </p>
      <p>Success: {Math.round((score / total) * 100)}%</p>
      <p>Failed: {Math.round(((total - score) / total) * 100)}%</p>
    </div>
  );
};

export default ResultPage;
