import { useLocation } from "react-router-dom";

const ResultPage = () => {
  const { state } = useLocation();
  const { score, total } = state || { score: 0, total: 0 };

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
