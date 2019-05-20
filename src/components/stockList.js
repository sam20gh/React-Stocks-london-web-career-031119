import React, { Component } from "react";

const stockList = props => 
  <div>
    {props.stocks.map(stock => (
      <Stock key={stoc.id} stock={stock} />)
    }
  </div>

export default stockList
