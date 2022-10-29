import React from 'react';
import { Layout, Input } from 'antd';
import ModalAddAdmin from '../../components/ModalAddAdmin/ModalAddAdmin';
import TableUser from '../../components/TableUser/TableUser';
import { AppDispatch } from '../../redux/configStore';
import { useDispatch } from 'react-redux';
import {
  getAllUserApi,
  searchUserByNameApi,
} from '../../redux/reducer/managementUserReducer';

type Props = {};

const { Content } = Layout;
const { Search } = Input;

export default function ManagementUser({}: Props) {
  const dispatch: AppDispatch = useDispatch();
  const onSearch = (value: string) => {
    if (value) {
      dispatch(searchUserByNameApi(value));
    }
  };
  const onChange = (value:any) => {
    if (!value.target.value) {
      dispatch(getAllUserApi());
    }
  };
  return (
    <Content
      className='site-content site-layout-background'
      style={{
        margin: '24px 16px',
        padding: 24,
        minHeight: 650,
      }}
    >
      <div className='title'>
        <h3 className='content-title'>Quản lý người dùng</h3>
        <ModalAddAdmin />
      </div>
      <Search
        size='large'
        placeholder='Nhập tên người dùng'
        onSearch={onSearch}
        onChange={onChange}
        enterButton='Search'
        className='search-input-dashboard mb-3'
      />
      <TableUser />
    </Content>
  );
}
