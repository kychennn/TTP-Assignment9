import React, {Component} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from "./components/Login";
import Credits from "./components/Credits";


class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      }
    }
  }

  componentDidMount() {
    this.fetchCreditData();
  }

  fetchCreditData() {
    fetch(`https://moj-api.herokuapp.com/credits`)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ creditData: response });
        response.map((item) =>
          this.setState({
            accountBalance: this.state.accountBalance + item.amount,
          })
        );
      })

      .catch((error) => console.error(error));
  }

  updateCreditData = (data) => {
    let arr = this.state.creditData;
    arr.unshift(data);
    this.setState({
      creditData: arr,
      accountBalance: this.state.accountBalance + data.amount,
    });
  };



  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  // render() {

  //   const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
  //   const UserProfileComponent = () => (
  //       <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />);
  //   const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>);

  //   return (
  //       <Router>
  //         <Routes>
  //           <Route exact path="/" render={HomeComponent}/>
  //           <Route exact path="/userProfile" render={UserProfileComponent}/>
  //           <Route exact path="/login" render={LogInComponent}/>
  //         </Routes>
  //       </Router>
  //   );
  // }

  render() {
      return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home accountBalance={this.state.accountBalance}/>}/>
                <Route exact path="/userProfile" element={<UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />}/>
                <Route exact path="/login" element={<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props} />}/>
                <Route exact path="/credits" element={<Credits accountBalance={this.state.accountBalance} creditData={this.state.creditData} updateCreditData={this.updateCreditData} />}/>
            </Routes>
        </Router>
      );
  }

}

export default App;