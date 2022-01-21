import React, { Component } from "react";
import {Link} from "react-router-dom";

class Debits extends Component {
  constructor(props) {
    super(props);

    this.state = {
        newDebitAmount: 0,
        newDebitDescription: "",
    };
  }

  changeAmount = (e) => {
    this.setState({ newDebitAmount: e.target.value });
  };

  changeDescription = (e) => {
    this.setState({ newDebitDescription: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let currentDate = new Date().toLocaleString();
    let obj = {
        amount: Number(this.state.newDebitAmount),
        description: this.state.newDebitDescription,
        date: currentDate,
    };

    this.props.updateDebitData(obj);
  };

  render() {
    return (
      <div>
          <h2>Debits</h2>
            <Link to="/">Home</Link>
            <br></br><br></br><br></br>
            Balance: {this.props.accountBalance.toFixed(2)}
          <div>
            <form onSubmit={this.handleSubmit}>
                <label>Amount:</label>
                <input type="text" name="amount" onChange={this.changeAmount} value={this.newDebitAmount}/>
                <label>Description</label>
                <input type="text" name="description" onChange={this.changeDescription} value={this.state.newDebitDescription}/>
              <button>Add Debit</button>
            </form>
            <br></br>
            <div>
            {this.props.debitData.map((item, index) => (
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

export default Debits;