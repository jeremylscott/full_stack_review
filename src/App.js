import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'
import Account from './components/Account'
import Signup from './components/Signup'
import Login from './components/Login'


  //exact render={() => this.props.user.username ? <Account/> : <Redirect to='/'/>}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path='/' component={Login} />  
            <Route path='/account' component={Account}/>
            <Route path='/signup' component={Signup} />  
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
