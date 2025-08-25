import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";

function SearchPage() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  // const handleSearch = async () => {
  //   if (!keyword) return;
  //   await axios.post("http://localhost:5000/api/search", { keyword });
  //   navigate("/dashboard");
  // };

  const handleSearch = async () => {
    if (!keyword) return;
    await axios.post("https://api-driven-backend.onrender.com/api/search", { keyword });
    navigate("/dashboard");
  };

  return (
    <>
      <div className="text-xl font-bold text-gray-500 flex justify-end mr-10 mt-5 ">
        <Link className="hover:text-white hover:bg-blue-500 bg-blue-100 text-blue-500 px-4 py-2 rounded-md" to="/dashboard">Dashboard</Link>
      </div>
      <div className="flex flex-col items-center mt-20">

        <h1 className="text-2xl font-bold mb-4">GitHub Repo Search</h1>
        <input
          type="text"
          placeholder="Enter keyword..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          onClick={handleSearch}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded cursor-pointer"
        >
          Search
        </button>
      </div>
    </>
  );
}

export default SearchPage;
