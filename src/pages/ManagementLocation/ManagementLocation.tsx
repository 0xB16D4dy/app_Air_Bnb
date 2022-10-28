import React, { useState } from 'react';
import { Layout, Input } from 'antd';
import TableLocation from '../../components/TableLocation/TableLocation';
import ModalAddLocation from '../../components/ModalAddLocation/ModalAddLocation';

type Props = {};

const { Content } = Layout;
const { Search } = Input;

export default function ManagementLocation({}: Props) {
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
        <h3 className='content-title'>Quản lý vị trí</h3>
        <ModalAddLocation/>
      </div>
      <Search
        size='large'
        placeholder='input search text'
        onSearch={onSearch}
        enterButton='Search'
        className='search-input-dashboard mb-3'
      />
      <TableLocation />
    </Content>
  );
}
