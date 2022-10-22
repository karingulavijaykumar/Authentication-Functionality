// Write your JS code here
import './index.css'
import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

class LogoutButton extends Component {
  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    return (
      <div className="btn-container">
        <button type="button" onClick={this.onClickLogout}>
          Logout
        </button>
      </div>
    )
  }
}

export default withRouter(LogoutButton)
