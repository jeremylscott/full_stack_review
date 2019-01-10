import React, {Component} from 'react'
import bank from '../images/communityBank.svg'
import {connect} from 'react-redux'
import {signup} from '../ducks/reducer'

class Signup extends Component {
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
        this.props.signup(this.state.username,this.state.password)
    }  

    render() {
        const {username,password} = this.state
        return (
            <div>
                <h1>Login</h1>
                <img src={bank} style={{maxWidth: '100px'}}/>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} name='username' value={this.state.username} placeholder='Username'/>
                    <input onChange={this.handleChange} name='password' type='password' value={this.state.password} placeholder='Password'/>
                    <button>Signup</button>               
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {signup})(Signup)