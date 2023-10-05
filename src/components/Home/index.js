import {Component} from 'react'

import Login from '../Login'

import Logout from '../Logout'

import Message from '../Message'

import './index.css'

class Home extends Component {
  state = {isLoggedin: false}

  OnclickButton = () => {
    this.setState(prevState => ({isLoggedin: !prevState.isLoggedin}))
  }

  render() {
    const {isLoggedin} = this.state
    const name = isLoggedin ? 'Welcome User' : 'Please Login'
    return (
      <div className="main-container">
        <Message message={name} />
        {isLoggedin ? (
          <Logout logout={this.OnclickButton} />
        ) : (
          <Login login={this.OnclickButton} />
        )}
      </div>
    )
  }
}

export default Home
