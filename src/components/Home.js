import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
        <div>
          <h1>Bank of React</h1>

          <Link to="/userProfile">User Profile</Link>
          <br></br>
          <br></br>
          <Link to="/login">Log In</Link>
          <br></br>
          <br></br>
          
          <br></br>
          <br></br>
          <Link to="/credits">Credits</Link>
          <br></br>
          <br></br>
          <AccountBalance accountBalance={this.props.accountBalance.toFixed(2)}/>
        </div>
    );
  }
}

export default Home;