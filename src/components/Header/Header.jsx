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
          <img className="logoo" src="" alt="LOGO" />
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
