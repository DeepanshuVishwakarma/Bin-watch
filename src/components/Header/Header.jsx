import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { Link } from "react-router-dom";
import user from "../../images/user.png";
import "./Header.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

const Header = () => {
  const dispatch = useDispatch();

  const [term, setTerm] = useState("");
  const submitHandler = (e) => {
    if (term == "") return alert("Please enter search term!");
    e.preventDefault();
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("");
  };
  return (
    <div className="header">
      <Link to="/">
        <div className="logo-container">
          <img
            className="logoo"
            src="data:image/jpeg;base64,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"
            alt="LOGO"
          />
          <div className="logo">Bin Watch</div>
        </div>
      </Link>
      <div className="serach-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={term}
            placeholder="Search Movies or Shows"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit">
            <i class="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="user-image">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqZ8numS0aaxf2o28VIEDzzpYKQ2ge2woClg&usqp=CAU"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Header;
