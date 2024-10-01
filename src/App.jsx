import { useState } from "react";
import AdvertisementPage from "./components/Ads-page";

import "./App.css";

function App() {
  const [page, setPage] = useState("ads");

  return <div>{page === "ads" && <AdvertisementPage setPage={setPage} />}</div>;
}

export default App;
