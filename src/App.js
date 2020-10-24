import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth, handleUserProfile } from './firebase/utils';
import { setCurrentUser } from './store/User/user.actions';

//layouts
import HomepageLayout from './layouts/HomepageLayout';
import MainLayout from './layouts/MainLayout';

import './default.scss';

//pages
import Login from './components/pages/Login/Login';
import Recovery from './components/pages/Recovery/Recovery';
import Homepage from './components/pages/Homepage/Homepage';
import Registration from './components/pages/Registration/Registration';

class App extends React.Component {

  authListner = null;

  componentDidMount = () => {
    this.authListner = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);

        userRef.onSnapshot(snapshot => {
          this.props.setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      }

      this.props.setCurrentUser(userAuth);
    });
  };

  componentWillUnmount = () => {
    this.authListner();
  }

  render() {

    const { currentUser } = this.props;

    return (
      <div className="App" >
        <Switch>
          <Route path="/" exact render={() => {
            return (<HomepageLayout>
              <Homepage />
            </HomepageLayout>)
          }}
          />

          <Route path="/registration" render={() => currentUser ? <Redirect to="/" /> : (
            <MainLayout>
              <Registration />
            </MainLayout>
          )}
          />

          <Route path="/forgetpassword" render={() => currentUser ? <Redirect to="/" /> : (
            <MainLayout>
              <Recovery />
            </MainLayout>
          )}
          />

          <Route path="/Login" render={() => currentUser ? <Redirect to="/" /> : (
            <MainLayout>
              <Login />
            </MainLayout>
          )}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser
  };
};

const mapDispatchToState = dispatch => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToState)(App);
