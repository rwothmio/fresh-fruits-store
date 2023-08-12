import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/images/logo.png";
import { BsSearch as SearchIcon } from "react-icons/bs";
import { BsFillCartFill as CartIcon } from "react-icons/bs";
import addObjectValues from "../../utility-functions/addObjectValues";
import { connect } from "react-redux";
import { mapStateToProps } from "../store/actions";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";




function NavBar({cartItems}) {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const handleSubmit =  e =>{
    e.preventDefault()
    if (query) {
      navigate(`/search?q=${query}`)
    }
  }

  return (
    <div className="navbar">
      <Link to='/' className="navbar__logo">
        <img src={logo} alt="logo" />
      </Link>
      <form className="navbar__searchbar" onSubmit={handleSubmit}>
        <input
          className="navbar__searchbar-input"
          max={20}
          autoComplete="off"
          type="search"
          name="q"
          placeholder="apple"
          value={query}
          onChange={e => setQuery(e.target.value)}
       />
        <div className="navbar__searchbar-icon"></div>
        <button type="submit"> {<SearchIcon />}</button>
      </form>

      <div className="navbar__account">Login</div>
      <Link to='/cart' className="navbar__cart">
        <CartIcon id="cartIcon" />
        <span>{addObjectValues(cartItems)}</span>
      </Link>
    </div>
  );
}

export default connect(mapStateToProps)(NavBar)
