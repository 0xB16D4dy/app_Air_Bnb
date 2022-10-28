import React, { useState } from 'react';
import { Layout, Input } from 'antd';
import TableBooking from '../../components/TableBooking/TableBooking';
import ModalAddBooking from '../../components/ModalAddBooking/ModalAddBooking';

type Props = {};

const { Content } = Layout;
const { Search } = Input;

export default function ManagementBooking({}: Props) {
  const onSearch = (value: string) => console.log(value);
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
        <ModalAddBooking/>
      </div>
      <Search
        size='large'
        placeholder='input search text'
        onSearch={onSearch}
        enterButton='Search'
        className='search-input-dashboard mb-3'
      />
      <TableBooking />
    </Content>
  );
}
