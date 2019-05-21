import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

class MainContainer extends Component {
  state = {
    stocks: [],
    portfolio: [],
    selectedStock: null
  };

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
      .then(resp => resp.json())
      .then(stocks => this.setState({ stocks }));
  }

  addToPortfolio = stock => {
    if (!this.state.portfolio.includes(stock)) {
      this.setState({
        portfolio: [...this.state.portfolio, stock]
        // stocks: this.state.stocks.filter(st => st !== stock)
      });
    } else {
      alert("You have this stock in your portfolio");
    }
  };

  removeFromPortfolio = stock => {
    if (this.state.portfolio.includes(stock)) {
      this.setState({
        portfolio: this.state.portfolio.filter(st => st !== stock),
        stock: [...this.state.stocks, stock]
      });
    }
    alert(" Item succesfully removed from your portfolio");
  };

  viewdetails = stock => {
    if (!this.state.portfolio.includes(stock)) {
      this.setState({
        selectedStock: this.state.selectedStock.stock
      });
    } else {
      alert("You have this stock in your portfolio");
    }
  };

  render() {
    return (
      <div>
        <SearchBar />

        <div className="row">
          <div className="col-8">
            <StockContainer
              stocks={this.state.stocks}
              handleClick={this.addToPortfolio}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              portfolio={this.state.portfolio}
              handleClick={this.removeFromPortfolio}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
