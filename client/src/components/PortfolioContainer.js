import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
//import SearchPage from "../App.js";
//import SavedPage from "../App.js";

class Portfolio extends Component {
  state = {
    currentPage: "Search"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Search") {
      return <Search />;
    } else if (this.state.currentPage === "Saved") {
      return <Saved />;
    }
  };

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default Portfolio;
