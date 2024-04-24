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
