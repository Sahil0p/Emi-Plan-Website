import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/layout.css";

const Navbar = () => {

  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    navigate(`/?search=${value}`);
  };

  return (
    <div className="navbar">

      <div
        className="logo"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      >
        EMI-Products
      </div>

      <input
        className="search"
        placeholder="Search for Mobiles..."
        value={search}
        onChange={handleSearch}
      />

      <div className="nav-links">
        <span>For Business</span>
        <span>Pay EMI</span>
        <span>Sign-up</span>
      </div>

    </div>
  );
};

export default Navbar;