import React from "react";

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#search"
          onClick={() => props.handlePageChange("Search")}
          className={props.currentPage === "Search" ? "nav-link active" : "nav-link"}
        >
          Search
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Saved"
          onClick={() => props.handlePageChange("Saved")}
          className={props.currentPage === "Saved" ? "nav-link active" : "nav-link"}
        >
          Saved
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
