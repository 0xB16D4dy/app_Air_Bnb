import React from 'react';
import ReactDOM from 'react-dom/client';
//setup react router dom
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
//setup redux
import { store } from './redux/configStore';
import { Provider } from 'react-redux';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import HomeTemplate from './templates/HomeTemplate';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './assets/scss/styles.scss';
import Management from './pages/Management/Management';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path='' element={<HomeTemplate />}>
          <Route index element={<Home />}></Route>
          <Route path='home' element={<Home />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='detail'>
            <Route path=':id'></Route>
          </Route>
          <Route path='*' element={<Navigate to='' />}></Route>
        </Route>
        <Route path='admin'>
          <Route path='management' element={<Management />}></Route>
        </Route>
      </Routes>
    </Router>
  </Provider>
);
