import React, { useState } from 'react';
import {
  EnvironmentOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  InfoCircleOutlined,
  KeyOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Avatar, Dropdown, notification } from 'antd';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import {
  ACCESS_TOKEN,
  getStore,
  getStoreJson,
  USER_INFO,
} from '../utils/setting';
type Props = {
  children?: JSX.Element;
};

const { Header, Sider } = Layout;

const handleLogout = () => {
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(USER_INFO);
  window.location.reload();
};

const MenuSider = [
  {
    key: 'management-user',
    icon: <UserOutlined />,
    label: 'Quản lý người dùng',
  },
  {
    key: 'management-location',
    icon: <EnvironmentOutlined />,
    label: 'Quản lý thông tin vị trí',
  },
  {
    key: 'management-room',
    icon: <InfoCircleOutlined />,
    label: 'Quản lý thông tin phòng',
  },
  {
    key: 'management-booking',
    icon: <KeyOutlined />,
    label: 'Quản lý đặt phòng',
  },
];

const MenuDropdown = [
  {
    key: '1',
    label: <a href='/'>Cập nhật thông tin</a>,
    className: 'nav-link',
  },
  {
    key: '2',
    label: (
      <a href='/' onClick={handleLogout}>
        Đăng xuất
      </a>
    ),
    className: 'nav-link',
  },
];

export default function DashBoardTemplate({ children }: Props) {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const userLogin = getStoreJson(USER_INFO);
  const admin = userLogin?.role;

  console.log(admin)

  if (admin !== 'ADMIN') {
    notification.error({
      message: `Unauthorized`,
      description: 'This page only grants access from admin!!!',
      placement: 'topRight',
    });
    return <Navigate to='/' replace />;
  }

  return (
    <>
      <Layout>
        <Sider trigger={true} collapsible collapsed={collapsed} width={230}>
          {collapsed ? (
            <div className='logo' />
          ) : (
            <div className='brand'>Dashboard</div>
          )}
          <Menu
            theme='dark'
            mode='inline'
            onSelect={(e) => {
              navigate(e.key);
            }}
            items={MenuSider}
          />
        </Sider>
        <Layout className='site-layout'>
          <Header
            className='site-header site-layout-background'
            style={{ padding: 0 }}
          >
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed),
              }
            )}
            <div className='userLogin'>
              <span className='label-user'>
                ADMIN {getStoreJson(USER_INFO).name}
              </span>
              <Dropdown
                overlay={<Menu items={MenuDropdown} />}
                placement='bottomRight'
                trigger={['click']}
                overlayClassName='site-header__userLogin-dropdown'
              >
                <Avatar
                  src={getStoreJson(USER_INFO).avatar}
                  size={{ xs: 24, sm: 32, md: 40 }}
                  icon={<UserOutlined />}
                  className='avatar'
                ></Avatar>
              </Dropdown>
            </div>
          </Header>
          <Outlet />
        </Layout>
      </Layout>
    </>
  );
}
