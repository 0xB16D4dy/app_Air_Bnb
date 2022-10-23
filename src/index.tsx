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
import Register from './pages/Register/Register';
import ListRoom from './pages/ListRoom/ListRoom';
import Detail from './pages/Detail/Detail';
import DashBoardTemplate from './templates/DashBoardTemplate';
import ManagementUser from './pages/ManagementUser/ManagementUser';
import ManagementLocation from './pages/ManagementLocation/ManagementLocation';
import ManagementRoom from './pages/ManagementRoom/ManagementRoom';
import ManagementBooking from './pages/ManagementBooking/ManagementBooking';
import EditUser from './components/EditUser/EditUser';

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
          <Route path='detail'>
            <Route path=':id' element={<Detail/>}></Route>
          </Route>
          <Route path='location'>
            <Route path=':city' element={<ListRoom />}></Route>
          </Route>
          {/* <Route path='*' element={<Navigate to='' />}></Route> */}
        </Route>
        {/* <Route path='login' element={<Login />}></Route> */}
        <Route path='register' element={<Register />}></Route>
        <Route path='admin' element={<DashBoardTemplate/>}>
          <Route path='management-user' element={<ManagementUser />}></Route>
          <Route path='management-location' element={<ManagementLocation/>}></Route>
          <Route path='management-room' element={<ManagementRoom/>}></Route>
          <Route path='management-booking' element={<ManagementBooking/>}></Route>
          <Route path='edit-user'>
              <Route path=':id' element={<EditUser/>}/>
        </Route>
        </Route>
      </Routes>
    </Router>
  </Provider>
);
