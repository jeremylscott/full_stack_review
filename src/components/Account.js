import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUser} from '../ducks/reducer'

class Account extends Component {

    componentDidMount() {
        this.props.getUser()   // can use this for a cart so that stuff stays for the customer on session
    }

    render() {
        if(!this.props.user.username) {
            return <h1>Please log in</h1>
        }
        return (
            <div>
                <h1>Account</h1>
                <h4>{this.props.user.username}</h4>
            </div>
        )
    }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, {getUser})(Account)