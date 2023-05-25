import React from 'react';
import ReactDOM from 'react-dom/client';
import Home_Page from '../src/pages/home_page/Home_Page';
import Login_Page from '../src/pages/login_page/Login_Page';
import Register_Page from '../src/pages/register_page/Register_Page';
import CreateCard_Page from '../src/pages/createCard_page/CreateCard_Page';
import EditCard_Page from '../src/pages/editCard_page/EditCard_Page';
import Dashboard_Page from '../src/pages/dashboard_page/Dashboard_Page';
import EditProfile_Page from './pages/editProfile_page/EditProfile_Page';
import Cookies from 'js-cookie';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserContext from '../src/contexts/UserContext';
import ActivityContext from '../src/contexts/ActivityContext';

const RouteProtection = ({ children }) => {

  const token = Cookies.get('TOKEN');

  if (token) {
    return children;
  } else {
    return location.href = '/'
  }
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home_Page />
  },

  {
    path: '/login',
    element: <Login_Page />
  },

  {
    path: '/register',
    element: <Register_Page />
  },

  {
    path: '/create_card',
    element: (
      <RouteProtection>
        <CreateCard_Page />
      </RouteProtection>
    )
  },

  {
    path: '/edit_card/:activityID',
    element: (
      <RouteProtection>
        <EditCard_Page />
      </RouteProtection>
    )
  },

  {
    path: '/dashboard',
    element: (
      <RouteProtection>
        <Dashboard_Page />
      </RouteProtection>
      )
  },

  {
    path: '/edit_profile',
    element: (
      <RouteProtection>
        <EditProfile_Page />
      </RouteProtection>
    )
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContext>
    <ActivityContext>
      <RouterProvider router={router} />
    </ActivityContext>
  </UserContext>
);
