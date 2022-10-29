import React, { useState } from 'react';
import { Layout, Input } from 'antd';
import TableBooking from '../../components/TableBooking/TableBooking';
import ModalAddBooking from '../../components/ModalAddBooking/ModalAddBooking';
import { useDispatch } from 'react-redux';
import {
  getAllBookingApi,
  searchBookingByUserIdApi,
} from '../../redux/reducer/managementBookingReducer';
import { AppDispatch } from '../../redux/configStore';
import { SearchProps } from 'antd/lib/input';

type Props = {};

const { Content } = Layout;
const { Search } = Input;

export default function ManagementBooking({}: Props) {
  const [valueSearch,setValueSearch] = useState('')
  const dispatch: AppDispatch = useDispatch();
  const onSearch = (value: string) => {
    if(value.match(/^(?!^[0-9])/)){
      setValueSearch('');
      dispatch(getAllBookingApi());
    }else if (value !== '') {
      dispatch(searchBookingByUserIdApi(parseInt(value)));
    }
  };
  const onChange:SearchProps['onChange'] = (e) =>{
    setValueSearch(e.target.value);
    if(!e.target.value){
      dispatch(getAllBookingApi());
    }
  }
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
        <h3 className='content-title'>Quản lý đặt phòng</h3>
        <ModalAddBooking />
      </div>
      <Search
        size='large'
        placeholder='Nhập mã người dùng'
        onSearch={onSearch}
        onChange={onChange}
        value={valueSearch}
        enterButton='Search'
        className='search-input-dashboard mb-3'
      />
      <TableBooking />
    </Content>
  );
}
