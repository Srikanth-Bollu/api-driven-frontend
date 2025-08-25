import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const [results, setResults] = useState([]);

  // useEffect(() => {
  //   axios.get("http://localhost:5000/api/results").then((res) => {
  //     setResults(res.data);
  //   });
  // }, []);

  useEffect(() => {
    axios.get("https://api-driven-backend.onrender.com").then((res) => {
      setResults(res.data);
    });
  }, []);

  return (
    <div className="p-8">
      {/* <div className="text-xl font-bold text-gray-500 flex justify-end mr-5 mt-0.5 ">
        <Link className="hover:text-white hover:bg-blue-500 bg-blue-100 text-blue-500 px-4 py-2 rounded-md" to="/">Search</Link>
      </div> */}
      <h1 className="text-2xl font-bold mb-6">Search Results</h1>
      {results.map((entry, i) => (
        <div key={i} className="border p-4 mb-4 rounded shadow">
          <h2 className="font-semibold">Keyword: {entry.keyword}</h2>
          <ul className="list-disc ml-6">
            {entry.results.map((repo, j) => (
              <li key={j}>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  {repo.name}
                </a>{" "}
                - {repo.description}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="flex justify-center">
        <Link className="hover:text-white hover:bg-blue-500 bg-blue-100 text-blue-500 px-4 py-2 rounded-md" to="/">Search</Link>
      </div>
    </div>
  );
}

export default Dashboard;
