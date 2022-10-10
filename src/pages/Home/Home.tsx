import React from 'react';
import { Divider } from 'antd';
import Slider from '../../components/Slider/Slider';
import Product from '../../components/Product/Product';

type Props = {};

export default function Home({}: Props) {
  const renderProduct = () => {
    return (
      <div className='row'>
        <div className='col-3'>
          <Product />
        </div>
      </div>
    );
  };
  return (
    <>
      <Slider />
      <section id='Product' className='py-5'>
        <div className='container'>
          <h3 className='text-center'>AirBnb</h3>
          <Divider />
          <div>{renderProduct()}</div>
        </div>
      </section>
    </>
  );
}
