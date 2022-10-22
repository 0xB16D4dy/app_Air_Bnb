import React, { useState } from 'react';
import {
  EnvironmentOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  InfoCircleOutlined,
  KeyOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Input, Avatar, Dropdown } from 'antd';
import TableUser from '../../components/TableUser/TableUser';
import TableRoom from '../../components/TableRoom/TableRoom';
import ModalAddAdmin from '../../components/ModalAddAdmin/ModalAddAdmin';

const { Header, Sider, Content } = Layout;
const { Search } = Input;

const MenuSider = [
  {
    key: '1',
    icon: <UserOutlined />,
    label: 'Quản lý người dùng',
  },
  {
    key: '2',
    icon: <EnvironmentOutlined />,
    label: 'Quản lý thông tin vị trí',
  },
  {
    key: '3',
    icon: <InfoCircleOutlined />,
    label: 'Quản lý thông tin phòng',
  },
  {
    key: '4',
    icon: <KeyOutlined />,
    label: 'Quản lý đặt phòng',
  },
];

const MenuDropdown = [
  {
    key: '1',
    label: <a href='/'>Cập nhật thông tin</a>,
    className:'nav-link',
  },
  {
    key: '2',
    label: <a href='/'>Đăng xuất</a>,
    className:'nav-link',
  },
];

type Props = {};

export default function Management({}: Props) {
  const [collapsed, setCollapsed] = useState(false);
  const [select, setSelect] = useState('1');
  const onSearch = (value: string) => console.log(value);
  return (
    <Layout>
      <Sider trigger={true} collapsible collapsed={collapsed} width={230} >
        {collapsed ? (
          <div className='logo' />
        ) : (
          <div className='brand'>Dashboard</div>
        )}
        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={[select]}
          onSelect={(e) => setSelect(e.key)}
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
            <span className='label-user'>ADMIN</span>
            <Dropdown
              overlay={<Menu items={MenuDropdown} />}
              placement='bottomRight'
              trigger={['click']}
              overlayClassName='site-header__userLogin-dropdown'
            >
              <Avatar
                src='https://joeschmoe.io/api/v1/random'
                size={{ xs: 24, sm: 32, md: 40 }}
                icon={<UserOutlined />}
                className='avatar'
              ></Avatar>
            </Dropdown>
          </div>
        </Header>
        {select === '1' ? (
          <Content
            className='site-content site-layout-background'
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 650,
              // height: '100%',
            }}
          >
            <div className='title'>
              <h3 className='content-title'>Quản trị viên</h3>
              <ModalAddAdmin/>
            </div>
            <Search
              size='large'
              placeholder='input search text'
              onSearch={onSearch}
              enterButton='Search'
              className='search-input-dashboard mb-3'
            />
            <TableUser />
          </Content>
        ) : select === '2' ? (
          <Content
            className='site-content site-layout-background'
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 650,
              // height: '100vh',
            }}
          >
            <div className='title'>
              <h3>Thêm phòng</h3>
            </div>
            <Search
              size='large'
              placeholder='input search text'
              onSearch={onSearch}
              enterButton='Search'
              className='search-input-dashboard mb-3'
            />
            2
          </Content>
        ) : select === '3' ? (
          <Content
            className='site-content site-layout-background'
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 650
            }}
          >
            <div className='title'>
              <h3>Thêm phòng</h3>
            </div>
            <Search
              size='large'
              placeholder='input search text'
              onSearch={onSearch}
              enterButton='Search'
              className='search-input-dashboard mb-3'
            />
            <TableRoom />
          </Content>
        ) : (
          <Content
            className='site-content site-layout-background'
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 650,
              // height: '100vh',
            }}
          >
            <div className='title'>
              <h3>Thêm phòng</h3>
            </div>
            <Search
              size='large'
              placeholder='input search text'
              onSearch={onSearch}
              enterButton='Search'
              className='search-input-dashboard mb-3'
            />
            4
          </Content>
        )}
      </Layout>
    </Layout>
  );
}
