import React, {Component} from 'react'
import {connect} from 'react-redux'

class Account extends Component {
    render() {
        return (
            <div>
                <h1>Account</h1>
                <h4>{this.props.user.username}</h4>

            </div>
        )
    }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Account)