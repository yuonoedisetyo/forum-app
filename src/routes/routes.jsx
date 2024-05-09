import { createBrowserRouter } from 'react-router-dom';
import '../App.css';
import React from 'react';
import ThreadDetail from '../components/ThreadDetail';
import Leaderboards from '../pages/Leaderboards';
import LoginPage from '../pages/LoginPage';
import MyAccount from '../pages/MyAccount';
import RegisterPage from '../pages/RegisterPage';
import Threads from '../pages/Threads';
import Users from '../pages/Users';

const router = createBrowserRouter([
  {
    path: '/',
    // element: <Root />,
    // eslint-disable-next-line react/react-in-jsx-scope
    element: <Threads />,
  },
  {
    path: 'thread/:ThreadId',
    element: <ThreadDetail />,
  },
  {
    path: 'users/:UserId',
    element: <ThreadDetail />,
  },
  {
    path: 'register',
    element: <RegisterPage />,
  },
  {
    path: 'login',
    element: <LoginPage />,
  },
  {
    path: 'users',
    element: <Users />,
  },
  {
    path: 'myaccount',
    element: <MyAccount />,
  },
  {
    path: 'leaderboards',
    element: <Leaderboards />,
  },
]);

export default router;