import React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';
import { Button, Divider, Dropdown, Menu } from 'antd';

type Props = {};

export default function Header({}: Props) {
  return (
    <header id='header'>
      <nav className='navbar navbar-expand-sm navbar-light'>
        <div className='container'>
          <div className='left-header'>
            <NavLink className='navbar-brand' to='/'>
              <img
                src={require('../../assets/icons/logo.svg').default}
                alt='svg'
              />
            </NavLink>
          </div>
          <div className='middle-header d-flex'>
            <span>Địa điểm bất kỳ</span>
            <Divider type='vertical' />
            <span>tuần bất kỳ</span>
            <Divider type='vertical' />
            <button className='btn btn-success'>
              <span>Thêm khách</span>
              <i className='fas fa-search'></i>
            </button>
          </div>
          <div className='right-header right-navbar'>
            <div className='collapse navbar-collapse' id='collapsibleNavId'>
              <ul className='navbar-nav ms-auto mt-2 mt-lg-0'>
                <li className='nav-item'>
                  <NavLink
                    className='nav-link active'
                    to='/home'
                    aria-current='page'
                  >
                    Trở thành chủ nhà
                  </NavLink>
                </li>
                <li>
                  <img
                    src={require('../../assets/icons/global.svg').default}
                    alt='global'
                  />
                </li>
                <li>
                  <Dropdown
                    overlay={
                      <Menu
                        items={[
                          {
                            label: 'Đăng ký',
                            key: '1',
                          },
                          {
                            label: 'Đăng nhập',
                            key: '2',
                          },
                          {
                            type: 'divider',
                          },
                          {
                            label: 'Cho thuê nhà',
                            key: '3',
                          },
                          {
                            label: 'Tổ chức trải nghiệm',
                            key: '4',
                          },
                          {
                            label: 'Trợ giúp',
                            key: '5',
                          },
                        ]}
                      />
                    }
                    trigger={['click']}
                  >
                    <Button shape='round' size='large'>
                      <MenuOutlined />
                      <img
                        src={require('../../assets/icons/user.svg').default}
                        alt={'user'}
                      />
                    </Button>
                  </Dropdown>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className='wrapper-second-menu border-top'>
        <div className='container'>
          <div className='second-menu pt-4'>
            <div className='category-filter-bar row'>
              <div className='carousel-description d-flex justify-content-around col-10'>
                <span className='item-carousel'>
                  <img
                    src={require('../../assets/icons/park-national-icon.jpg')}
                    alt='park-national'
                  />
                  Công viên quốc gia
                </span>
                <span className='item-carousel'>
                  <img
                    src={require('../../assets/icons/swimming-pool-icon.jpg')}
                    alt='swimming-pool'
                  />
                  Hồ bơi tuyệt vời
                </span>
                <span className='item-carousel'>
                  <img
                    src={require('../../assets/icons/alien-icon.jpg')}
                    alt='alien'
                  />
                  Thật ấn tượng!
                </span>
                <span className='item-carousel'>
                  <img
                    src={require('../../assets/icons/suffer-icon.jpg')}
                    alt='suffer'
                  />
                  Lướt sóng
                </span>
                <span className='item-carousel'>
                  <img
                    src={require('../../assets/icons/home-A-icon.jpg')}
                    alt='home-A'
                  />
                  Nhà khung chữ A
                </span>
                <span className='item-carousel'>
                  <img
                    src={require('../../assets/icons/home-side-lake-icon.jpg')}
                    alt='home-side-lake'
                  />
                  Ven hồ
                </span>
                <span className='item-carousel'>
                  <img
                    src={require('../../assets/icons/snow-icon.jpg')}
                    alt='snow'
                  />
                  Bắc cực
                </span>
                <span className='item-carousel'>
                  <img
                    src={require('../../assets/icons/little-home-icon.jpg')}
                    alt='little-home'
                  />
                  Nhà nhỏ
                </span>
                <span className='item-carousel'>
                  <img
                    src={require('../../assets/icons/island-icon.jpg')}
                    alt='island'
                  />
                  Đảo
                </span>
                <span className='item-carousel'>
                  <img
                    src={require('../../assets/icons/cabin-icon.jpg')}
                    alt='cabin'
                  />
                  Cabin
                </span>
              </div>
              <div className='filter-button-container col-2'>
                <button className='filter-button'>
                  <span className='wrapper-content-btn'>
                    <img
                      src={require('../../assets/icons/filter.svg').default}
                      alt='filter'
                    />
                    <span className='content-btn'>Bộ lộc</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
