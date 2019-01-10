import React, {Component} from 'react'
import bank from '../images/communityBank.svg'
class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {  // could do handleChange = e => {}
        this.setState({[e.target.name]: e.target.value}) // this is updating both of the below input fields at the same time.
    }                                                      // because we have a name value on the input fields and it will see that the e.target.name is whatever we called it.

    render() {
        return (
            <div>
                <h1>Login</h1>
                <img src={bank} style={{maxWidth: '100px'}}/>
                <form>
                    <input onChange={this.handleChange} name='username' value={this.state.username} placeholder='Username'/>
                    <input onChange={this.handleChange} name='password' type='password' value={this.state.password} placeholder='Password'/>
                    <button>Login</button>               
                </form>
            </div>
        )
    }
}


export default Login