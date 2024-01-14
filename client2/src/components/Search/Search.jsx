import React, { useEffect, useState } from "react";
import "./Search.scss";
import { GoSearch } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../../api/axiosClient";

const Search = () => {
  const [searchKey, setSearchKey] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchKey(e.target.value);
  };

  useEffect(() => {
    const getSearch = setTimeout(async () => {
      if (searchKey === "" || searchKey.trim() === "") return;
      const res = await axiosClient.get(`product/search/${searchKey}`);
      setSearchResult(res.data);
    }, 500);

    return () => {
      clearTimeout(getSearch);
    };
  }, [searchKey]);

  const handleSubmitSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search_wrapper">
      <form className="search" onSubmit={handleSubmitSearch}>
        <GoSearch className="icon" />
        <input
          value={searchKey}
          onChange={handleSearch}
          type="text"
          placeholder="Tìm kiếm sản phẩm"
        />
      </form>
      {searchResult && searchKey && (
        <div className="results_container">
          {searchResult.map((rs) => (
            <Link to={`/products/${rs.title}`}>
              <div className="result">
                <GoSearch className="icon" />
                <h3>
                  {rs.title} - {rs.tag}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
