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
import { SelectEventHandler } from 'rc-menu/lib/interface';

const { Header, Sider, Content } = Layout;
const { Search } = Input;

type Props = {};

export default function Management({}: Props) {
  const [collapsed, setCollapsed] = useState(false);
  const [select, setSelect] = useState('1');
  const onSearch = (value: string) => console.log(value);
  return (
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
          defaultSelectedKeys={[select]}
          onSelect={(e) => setSelect(e.key)}
          items={[
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
          ]}
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
            <Dropdown
              overlay={
                <Menu
                  items={[
                    {
                      key: '1',
                      label: <a href='/'>Cập nhật thông tin</a>,
                    },
                    {
                      key: '2',
                      label: <a href='/'>Đăng xuất</a>,
                    },
                  ]}
                />
              }
              placement='bottomRight'
            >
              <Avatar
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
              minHeight: 600,
            }}
          >
            <div className='title'>
              <h3>Thêm quản trị viên</h3>
            </div>
            <Search
              size='large'
              placeholder='input search text'
              onSearch={onSearch}
              enterButton
            />
            <TableUser />
          </Content>
        ) : (
          <Content
            className='site-content site-layout-background'
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 600,
            }}
          >
            <div className='title'>
              <h3>Thêm Phòng</h3>
            </div>
            <Search
              size='large'
              placeholder='input search text'
              onSearch={onSearch}
              enterButton
            />
          </Content>
        )}
      </Layout>
    </Layout>
  );
}
