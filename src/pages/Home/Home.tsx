import React, { useEffect } from 'react';
import { Divider } from 'antd';
import Slider from '../../components/Slider/Slider';
import PlaceCard from '../../components/PlaceCard/PlaceCard';


type Props = {};

export default function Home({}: Props) {
  return (
    <>
      <Slider />
      <section id='content' className='pb-5 pt-4'>
        <div className='container'>
          <h3 className='title'>Khám phá những điểm đến gần đây</h3>
          <PlaceCard />
          <h3 className='title'>Ở bất cứ đâu</h3>
          <div className='categories__card'>
            <div className='row'>
              <div className='col-md-3 col-sm-6 col-category'>
                <div className='item'>
                  <img
                    src={require('../../assets/img/house.jpeg')}
                    className='item-img'
                    alt='house'
                  ></img>
                  <div className='item-body'>
                    <div className='item-title'>Toàn bộ nhà ở</div>
                  </div>
                </div>
              </div>
              <div className='col-md-3 col-sm-6 col-category'>
                <div className='item'>
                  <img
                    src={require('../../assets/img/beach.jpeg')}
                    className='item-img'
                    alt='beach'
                  ></img>
                  <div className='item-body'>
                    <div className='item-title'>Chỗ ở độc đáo</div>
                  </div>
                </div>
              </div>
              <div className='col-md-3 col-sm-6 col-category'>
                <div className='item'>
                  <img
                    src={require('../../assets/img/farmer-house.jpeg')}
                    className='item-img'
                    alt='farmer-house'
                  ></img>
                  <div className='item-body'>
                    <div className='item-title'>Trang trại và thiên nhiên</div>
                  </div>
                </div>
              </div>
              <div className='col-md-3 col-sm-6 col-category'>
                <div className='item'>
                  <img
                    src={require('../../assets/img/corgi.jpeg')}
                    className='item-img'
                    alt='corgi'
                  ></img>
                  <div className='item-body'>
                    <div className='item-title'>
                      Cho phép mang theo thú cưng
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
