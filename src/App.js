import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth, handleUserProfile } from './firebase/utils';
import { setCurrentUser } from './store/User/user.actions';

//hoc
import WithAuth from './hoc/withAuth';

//layouts
import HomepageLayout from './layouts/HomepageLayout';
import MainLayout from './layouts/MainLayout';

import './default.scss';

//pages
import Login from './components/pages/Login/Login';
import Recovery from './components/pages/Recovery/Recovery';
import Homepage from './components/pages/Homepage/Homepage';
import Registration from './components/pages/Registration/Registration';
import Dashboard from './components/pages/Dashboard/Dashboard';

const App = props => {
  const { setCurrentUser, currentUser } = props;

  useEffect(() => {
    const authListner = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });

    return () => {
      authListner();
    }

  }, [setCurrentUser]);

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

        <Route path="/forgetpassword" render={() => (
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

        <Route path="/dashboard" render={() => (
          <WithAuth>
            <MainLayout>
              <Dashboard />
            </MainLayout>
          </WithAuth>
        )}
        />
      </Switch>
    </div>
  );
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
