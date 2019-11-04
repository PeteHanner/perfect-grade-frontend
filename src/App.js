import React, {Component} from 'react';
import { Route, Switch } from "react-router-dom";
import homePage from './containers/homePage'

class App extends Component {
  render() {
    return(
      <div className='App'>
        <Switch>
          <Route exact path='/' component={homePage} />
        </Switch>
      </div>
    )
  }
}

export default App;
