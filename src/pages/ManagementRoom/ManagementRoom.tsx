import React, { useState } from 'react';
import { Layout, Input } from 'antd';
import ModalAddAdmin from '../../components/ModalAddAdmin/ModalAddAdmin';
import TableRoom from '../../components/TableRoom/TableRoom';
import ModalAddRoom from '../../components/ModalAddRoom/ModalAddRoom';

type Props = {};

const { Content } = Layout;
const { Search } = Input;

export default function ManagementRoom({}: Props) {
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
        <h3 className='content-title'>Quản lý phòng</h3>
        <ModalAddRoom/>
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
  );
}
