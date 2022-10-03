import React from 'react';
import { Divider } from 'antd';

type Props = {};

export default function Home({}: Props) {
  const renderProduct = () => {
    return <div>
      
    </div>
  };
  return (
    <div>
      <h3 className='text-center'>AirBnb</h3>
      <Divider />
      <div>{renderProduct()}</div>
    </div>
  );
}
