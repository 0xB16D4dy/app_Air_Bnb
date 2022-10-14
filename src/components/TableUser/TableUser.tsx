import React from 'react';
import { Button, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

type Props = {};

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  roles: string[];
}

const onDelete = (record:DataType) =>{
  console.log(record.key)
}
const onEdit = (record:DataType) =>{
  console.log(record.key)
}

const columns: ColumnsType<DataType> = [
  {
    title: 'id',
    dataIndex: 'key',
    key: 'id',
    render: (text) => <div>{text}</div>,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Role',
    key: 'roles',
    dataIndex: 'roles',
    render: (_, { roles }) => (
      <>
        {roles.map((role) => {
          let color = role === 'user' ? 'geekblue' : 'green';
          if (role === 'admin') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={role}>
              {role.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size='middle'>
        <Button
          icon={<EditOutlined />}
          type='text'
          onClick={()=>{
            onEdit(record)
          }}
          style={{color:'#1890ff'}}
        />
        <Button
          icon={<DeleteOutlined />}
          danger
          type='text'
          onClick={()=>{
            onDelete(record)
          }}
        />
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    roles: ['Admin', 'user'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    roles: ['user'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    roles: ['user'],
  },
];

export default function TableUser({}: Props) {
  return <Table columns={columns} dataSource={data} />;
}
