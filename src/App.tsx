import * as React from 'react';
import './App.css';
import { Navigation } from './Components/Navigation/Navigation';
import { Switch, Route } from 'react-router';
import { AuthPage } from './Components/Auth/Auth';
import { Events } from './Components/Events/Events';
import { Bookings } from './Components/Bookings/Bookings';
import { BrowserRouter } from 'react-router-dom';
class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <main className="main-content">
            <Switch>
              <Route path='/' exact component={AuthPage} />
              <Route path='/auth' exact component={AuthPage} />
              <Route path='/events/' component={Events} />
              <Route path='/bookings/' component={Bookings} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
