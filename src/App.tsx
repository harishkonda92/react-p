import * as React from 'react';
import './App.css';
import { Navigation } from './Components/Navigation/Navigation';
import { Switch, Route } from 'react-router';
import { AuthPage } from './Components/Auth/Auth';
import { Events } from './Components/Events/Events';
import { Bookings } from './Components/Bookings/Bookings';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { reducer } from './Store/reducer';
import { createStore } from 'redux';
class App extends React.Component {
  public render() {
    const store = createStore(reducer);
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Navigation />
            <main className="main-content">
              <Switch>
                <Route path='/' exact component={AuthPage} />
                <Route path='/auth' exact component={AuthPage} />
                <Route path='/events/' component={Events} />
                <Route path='/bookings/' component={Bookings} />
                <Route path='*' />
              </Switch>
            </main>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
