import React, { Component } from 'react';
import PortfolioDetails from './PortfolioDetails';
import CoinList from './CoinList';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data : {
        balance:
          [
            ["2018-01-01 00:00:00 UTC", 120],
            ["2018-01-02 00:00:00 UTC", 120 * 2],
            ["2018-01-03 00:00:00 UTC", 120 * 6],
            ["2018-01-04 00:00:00 UTC", 120 * -12],
            ["2018-01-05 00:00:00 UTC", 120 * 9],
            ["2018-01-06 00:00:00 UTC", 120 * 25]
          ]
        ,
        holdings: [
          {
            id: 'SUMO',
            amount: 35
          },
          {
            id: 'BTC',
            amount: 0.12516
          },
          {
            id: 'XVG',
            amount: 125
          }
        ]
      }
    }
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <PortfolioDetails data={this.state.data}/>
        <div className="list pl0 ph3 mt3">
          <h2 className="ttu f7 gray">holding</h2>
          <CoinList data={this.state.data.holdings}  />
        </div>
      </div>
    );
  }
}

export default Home;
