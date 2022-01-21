import React, { Component } from "react";
import {Link} from "react-router-dom";

class Credits extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newCreditAmount: 0,
      newCreditDescription: "",
    };
  }

  changeAmount = (e) => {
    this.setState({ newCreditAmount: e.target.value });
  };

  changeDescription = (e) => {
    this.setState({ newCreditDescription: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let currentDate = new Date().toLocaleString();
    let obj = {
      amount: Number(this.state.newCreditAmount),
      description: this.state.newCreditDescription,
      date: currentDate,
    };

    this.props.updateCreditData(obj);
  };

  render() {
    return (
      <div>
          <h2>Credits</h2>
            <Link to="/">Home</Link>
            <br></br><br></br><br></br>
            Balance: {this.props.accountBalance.toFixed(2)}
          <div>
            <form onSubmit={this.handleSubmit}>
                <label>Amount:</label>
                <input type="text" name="amount" onChange={this.changeAmount} value={this.newCreditAmount}/>
                <label>Description</label>
                <input type="text" name="description" onChange={this.changeDescription} value={this.state.newCreditDescription}/>
              <button>Add Credit</button>
            </form>
            <br></br>
            <div>
            {this.props.creditData.map((item, index) => (
              <ul key={index}>
                <li>{item.description}</li>
                <li>{item.amount}</li>
                <li>{new Date(item.date).toLocaleString()}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Credits;