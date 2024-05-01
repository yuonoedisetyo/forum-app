import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/routes.jsx';
import { Provider } from 'react-redux'
import configureStore from './states/configureStore'
import ThreadsList from './components/ThreadsList.jsx';
import Threads from './pages/Threads.jsx';
import ThreadDetail from './pages/ThreadDetail.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Users from './pages/Users.jsx';
import MyAccount from './pages/MyAccount.jsx';
import Leaderboards from './pages/Leaderboards.jsx';

const store = configureStore()


const router = createBrowserRouter([
  {
    path: "/",
    // element: <Root />,
    element: <Threads />,
    // children: [
    //   {
    //     path: "dashboard",
    //     element: <><p>Dashboard</p></>,
    //   },
    //   {
    //     path: "about",
    //     element: <App/>,
    //   },
    // ],
  },
  {
    path: "thread/:ThreadId",
    element: <ThreadDetail />,
  },
  {
    path: "register",
    element: <RegisterPage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "users",
    element: <Users />,
  },
  {
    path: "myaccount",
    element: <MyAccount />,
  },
  {
    path: "leaderboards",
    element: <Leaderboards />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <RouterProvider
        router={router}
      // fallbackElement={<BigSpinner />}
      />
    </Provider>
  </React.StrictMode>,
)
