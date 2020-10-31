import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

//components
import AdminToolbar from './components/AdminToolbar/AdminToolbar';

import { checkUserSession } from './store/User/user.actions';

//hoc
import WithAuth from './hoc/withAuth';
import WithAdminAuth from './hoc/withAdminAuth';

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
import Admin from './components/pages/Admin/Admin';

const mapState = state => {
  return {
    currentUser: state.user.currentUser
  };
};

const App = props => {

  const dispatch = useDispatch();
  const { currentUser } = useSelector(mapState);

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div className="App" >
      <AdminToolbar />
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

        <Route path="/admin" render={() => (
          <WithAdminAuth>
            <MainLayout>
              <Admin />
            </MainLayout>
          </WithAdminAuth>
        )}
        />
      </Switch>
    </div>
  );
}

export default App;