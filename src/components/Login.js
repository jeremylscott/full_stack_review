import React, {Component} from 'react'
import bank from '../images/communityBank.svg'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from '../ducks/reducer'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {  // could do handleChange = e => {}
        this.setState({[e.target.name]: e.target.value}) // this is updating both of the below input fields at the same time.
    }                                                       // because we have a name value on the input fields and it will see that the e.target.name is whatever we called it.

    handleSubmit(e) {
        e.preventDefault()
        this.props.login(this.state.username,this.state.password)
    }  // instead of writing this, i could write () => this.props.login(username,password) in the onSubmit below

    render() {
        console.log(this.props);
        if(this.props.user.username) {
            return <Redirect to='/account'/>   //  Redirect, if we already have a username, redirect them to accounts
        }
        const {username,password} = this.state
        return (
            <div>
                <h1>Login</h1>
                <img src={bank} style={{maxWidth: '100px'}}/>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} name='username' value={username} placeholder='Username'/>
                    <input onChange={this.handleChange} name='password' type='password' value={password} placeholder='Password'/>
                    <button>Login</button>               
                </form>
                <Link to='/signup'>Signup</Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {login})(Login)