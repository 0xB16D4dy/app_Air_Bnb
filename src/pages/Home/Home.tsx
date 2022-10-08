import React from 'react';
import { Divider } from 'antd';
import CarouselInner from '../../components/CarouselInner/CarouselInner';
import CarouselCategory from '../../components/CarouselCategory/CarouselCategory';

type Props = {};

export default function Home({}: Props) {
  const renderProduct = () => {
    return (
      <div className='row'>
        <div className='col-3'>
          <div className='card text-white bg-primary'>
            <img className='card-img-top' src='holder.js/100px180/' alt='...' />
            <div className='card-body'>
              <h4 className='card-title'>Title</h4>
              <p className='card-text'>Text</p>
            </div>
          </div>
        </div>
        <div className='col-3'>
          <div className='card text-white bg-primary'>
            <img className='card-img-top' src='holder.js/100px180/' alt='...' />
            <div className='card-body'>
              <h4 className='card-title'>Title</h4>
              <p className='card-text'>Text</p>
            </div>
          </div>
        </div>
        <div className='col-3'>
          <div className='card text-white bg-primary'>
            <img className='card-img-top' src='holder.js/100px180/' alt='...' />
            <div className='card-body'>
              <h4 className='card-title'>Title</h4>
              <p className='card-text'>Text</p>
            </div>
          </div>
        </div>
        <div className='col-3'>
          <div className='card text-white bg-primary'>
            <img className='card-img-top' src='holder.js/100px180/' alt='...' />
            <div className='card-body'>
              <h4 className='card-title'>Title</h4>
              <p className='card-text'>Text</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      
      <CarouselCategory/>
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
