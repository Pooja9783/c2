import { useState } from "react";
import "./App.css";
import Header from "../src/components/header/Header";
import Search from "./components/header/Search";
import Jobs from "./components/job/Jobs";
// import PostJobs from "./components/job/PostJobs";
import mockData from "./mockdata";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      {mockData.map((job) => (
        <Jobs key={job.id} {...job} />
      ))}
    </div>
  );
}

export default App;
