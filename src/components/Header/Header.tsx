import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { Dropdown, Menu } from 'antd';
import MenuDivider from 'antd/lib/menu/MenuDivider';

type Props = {};

// eslint-disable-next-line no-empty-pattern
export default function Header({}: Props) {
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [current, setCurrent] = useState<string>('1');
  const [keyword, setKeyword] = useState<string>('');
  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };
  const onClickSearch = () => {
    setDropdown(true);
  };
  const onSearch = (e: any) => {
    setKeyword(e.target.value);
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log('search');
  };
  return (
    <div className='header'>
      {dropdown ? (
        <div className='wrapper__header'>
          <header id='header' className='header__dropdown'>
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
                  <div className='search__dropdown'>
                    <div className='search__dropdown-wrapper'>
                      <div className='search__dropdown-cover'>
                        <div className='search__dropdown-tab'>
                          <div className='tab__list-wrapper'>
                            <div className='tab__list-content'>
                              <div className='tab__list-left'>
                                <button className='btn__tab-left'>
                                  <div className='label'>
                                    <span className='place'>Chỗ ở</span>
                                  </div>
                                </button>
                                <button className='btn__tab-right'>
                                  <div className='label'>
                                    <span className='experience'>
                                      Trải nghiệm
                                    </span>
                                  </div>
                                </button>
                              </div>
                              <div className='tab__list-right'>
                                <button className='btn__tab-item'>
                                  <div className='label'>
                                    <span className='experience__online'>
                                      Trải nghiệm trực tuyến
                                    </span>
                                  </div>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <form
                          className='search__dropdown-form'
                          onSubmit={onSubmit}
                        >
                          <div className='search__dropdown-form-wrapper'>
                            <div className='form__btn-place'>
                              <div className='form__btn-wrapper'>
                                <label className='form__btn-label'>
                                  <div className='form__btn-content'>
                                    <div className='text'>Địa điểm</div>
                                    <input
                                      type='text'
                                      className='input-search'
                                      placeholder='Tìm kiếm điểm đến'
                                      id='bigsearch-query-location-input'
                                      value={keyword}
                                      onChange={onSearch}
                                    />
                                  </div>
                                </label>
                                {keyword !== '' ? (
                                  <div className='form__btn-result'>
                                    <div className='form__btn-result-wrapper'>
                                      <div className='form__btn-result-cover'>
                                        <div className='form__btn-result-content'>
                                          <div className='result-list'>
                                            <div className='result-item'>
                                              <div className='result-icon'>
                                                <i
                                                  className='fa fa-location-arrow'
                                                  aria-hidden='true'
                                                ></i>
                                              </div>
                                              <div className='result-location'>
                                                <div className='text-location'>
                                                  abcacb
                                                </div>
                                              </div>
                                            </div>
                                            <div className='result-item'>
                                              <div className='result-icon'>
                                                <i
                                                  className='fa fa-location-arrow'
                                                  aria-hidden='true'
                                                ></i>
                                              </div>
                                              <div className='result-location'>
                                                <div className='text-location'>
                                                  abcacb
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ) : (
                                  ''
                                )}
                              </div>
                            </div>
                            <div className='search__divider'></div>
                            <div className='form__btn-date-picker'>
                              <div className='form__btn-wrapper'>
                                <div className='form__btn-receive'>
                                  <span className='text'>Nhận phòng</span>
                                  <span className='sub-text'>Thêm ngày</span>
                                </div>
                                <div className='search__divider'></div>
                                <div className='form__btn-pay'>
                                  <span className='text'>Trả phòng</span>
                                  <span className='sub-text'>Thêm ngày</span>
                                </div>
                              </div>
                            </div>
                            <div className='search__divider'></div>
                            <div className='form__btn-guest'>
                              <div className='form__btn-wrapper'>
                                <div className='form__btn-content'>
                                  <label className='label__btn'>
                                    <div className='text'>Khách</div>
                                    <div className='sub-text'>Thêm khách</div>
                                  </label>
                                  <button
                                    className='button-search'
                                    type='submit'
                                  >
                                    <div className='icon-search'>
                                      <i
                                        className='fa fa-search'
                                        aria-hidden='true'
                                      ></i>
                                    </div>
                                    <div className='text-btn-search'>
                                      Tìm kiếm
                                    </div>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
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
                              src={
                                require('../../assets/icons/global.svg').default
                              }
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
                                      <NavLink to='/login'>Đăng nhập</NavLink>
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
                                  src={
                                    require('../../assets/icons/user.svg')
                                      .default
                                  }
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
          <div
            className='navbar__search-cover'
            onClick={() => {
              setDropdown(false);
            }}
          ></div>
        </div>
      ) : (
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
                        <button
                          className='btn__search-left'
                          onClick={onClickSearch}
                        >
                          <div className='btn__label'>Địa điểm bất kỳ</div>
                        </button>
                      </div>
                      <span className='divider'></span>
                      <div className='navbar__search-center'>
                        <button
                          className='btn__search-center'
                          onClick={onClickSearch}
                        >
                          <div className='btn__label'>Tuần bất kỳ</div>
                        </button>
                      </div>
                      <span className='divider'></span>
                      <div className='navbar__search-right'>
                        <button
                          className='btn__search-right'
                          onClick={onClickSearch}
                        >
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
                            src={
                              require('../../assets/icons/global.svg').default
                            }
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
                                    <NavLink to='/login'>Đăng nhập</NavLink>
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
                                src={
                                  require('../../assets/icons/user.svg').default
                                }
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
      )}
    </div>
  );
}
