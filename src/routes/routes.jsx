import { createBrowserRouter } from 'react-router-dom';
import '../App.css';
import React from 'react';
import Leaderboards from '../pages/Leaderboards';
import LoginPage from '../pages/LoginPage';
import MyAccount from '../pages/MyAccount';
import RegisterPage from '../pages/RegisterPage';
import Threads from '../pages/Threads';
import Users from '../pages/Users';
import ThreadDetailPage from '../pages/ThreadDetail';
import CreateThread from '../pages/CreateThread';

const router = createBrowserRouter([
  {
    path: '/',
    // element: <Root />,
    // eslint-disable-next-line react/react-in-jsx-scope
    element: <Threads />,
  },
  {
    path: 'thread/:ThreadId',
    element: <ThreadDetailPage />,
  },
  {
    path: 'users/:UserId',
    element: <ThreadDetailPage />,
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
  {
    path: 'createThread',
    element: <CreateThread />,
  },
]);

export default router;