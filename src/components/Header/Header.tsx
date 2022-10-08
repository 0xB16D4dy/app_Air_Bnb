import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { Dropdown, Menu } from 'antd';
import MenuDivider from 'antd/lib/menu/MenuDivider';

type Props = {};

export default function Header({}: Props) {
  const [current, setCurrent] = useState<string>('1');
  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };
  return (
    <header id='header'>
      <div className='navbar__wrapper'>
        <div className='container'>
          <div className='navbar__content'>
            <div className='navbar__icon'>
              <div className='navbar__brand'>
                <div className='navbar__brand-wrapper'>
                  <NavLink to='/'>
                    <img
                      src={require('../../assets/icons/logo.svg').default}
                      alt='icon-brand'
                      className='icon__brand'
                    />
                  </NavLink>
                </div>
              </div>
            </div>
            <div className='navbar__search'>
              <div className='navbar__search-wrapper'>
                <div className='navbar__search-content'>
                  <div className='navbar__search-left'>
                    <button className='btn__search-left'>
                      <div className='btn__label'>Địa điểm bất kỳ</div>
                    </button>
                  </div>
                  <span className='divider'></span>
                  <div className='navbar__search-center'>
                    <button className='btn__search-center'>
                      <div className='btn__label'>Tuần bất kỳ</div>
                    </button>
                  </div>
                  <span className='divider'></span>
                  <div className='navbar__search-right'>
                    <button className='btn__search-right'>
                      <div className='btn__label'>Thêm khách</div>
                      <div className='btn__icon'>
                        <i
                          className='fa fa-search'
                          aria-hidden='true'
                          id='icon-search'
                        ></i>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='navbar__info'>
              <div className='navbar__info-wrapper'>
                <div className='navbar__info-content'>
                  <div className='navbar__info-left'>
                    <div className='owned__nav-link'>
                      <NavLink to='/'>Trở thành chủ nhà</NavLink>
                    </div>
                    <div className='lang__nav-link'>
                      <img
                        src={require('../../assets/icons/global.svg').default}
                        alt='icon-lang'
                        className='icon-lang'
                      />
                    </div>
                  </div>
                  <div className='navbar__info-right'>
                    <Dropdown
                      overlay={
                        <Menu
                          selectedKeys={[current]}
                          items={[
                            {
                              key: '1',
                              label: (
                                <NavLink
                                  // target='_blank'
                                  // rel='noopener noreferrer'
                                  to='/register'
                                  className='register'
                                >
                                  Đăng ký
                                </NavLink>
                              ),
                            },
                            {
                              key: '2',
                              label: (
                                <NavLink
                                  // target='_blank'
                                  // rel='noopener noreferrer'
                                  to='/login'
                                >
                                  Đăng nhập
                                </NavLink>
                              ),
                            },
                            {
                              key: '3',
                              label: <MenuDivider />,
                              className: 'dropdown__divider',
                            },
                            {
                              key: '4',
                              label: (
                                <NavLink
                                  target='_blank'
                                  rel='noopener noreferrer'
                                  to='/'
                                >
                                  Cho thuê nhà
                                </NavLink>
                              ),
                            },
                            {
                              key: '5',
                              label: (
                                <NavLink
                                  target='_blank'
                                  rel='noopener noreferrer'
                                  to='/'
                                >
                                  Tổ chức trải nghiệm
                                </NavLink>
                              ),
                            },
                            {
                              key: '6',
                              label: (
                                <NavLink
                                  target='_blank'
                                  rel='noopener noreferrer'
                                  to='/'
                                >
                                  Trợ giúp
                                </NavLink>
                              ),
                            },
                          ]}
                          onClick={onClick}
                        />
                      }
                      placement='bottomRight'
                      trigger={['click']}
                    >
                      <button className='btn-dropdown'>
                        <div className='icon__left'>
                          <img
                            src={
                              require('../../assets/icons/icon-menu.svg')
                                .default
                            }
                            alt='icon-menu'
                            className='icon-menu'
                          />
                        </div>
                        <div className='icon__right'>
                          <img
                            src={require('../../assets/icons/user.svg').default}
                            alt='icon-user'
                            className='icon-user'
                          />
                        </div>
                      </button>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
