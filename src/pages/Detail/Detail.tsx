import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DetailOrder from '../../components/DetailOrder/DetailOrder';
import DetailReview from '../../components/DetailReview/DetailReview';
import { AppDispatch, RootState } from '../../redux/configStore';
import { getDetailRoomByIdApi } from '../../redux/reducer/RoomReducer';
import { Navigate } from 'react-router-dom';
import { ACCESS_TOKEN, getStore } from '../../utils/setting';
import { notification } from 'antd';

type Props = {};

export default function Detail({}: Props) {
  const params = useParams();
  const dispatch: AppDispatch = useDispatch();
  const { detailRoom } = useSelector((state: RootState) => state.RoomReducer);

  useEffect(() => {
    const { id } = params;
    dispatch(getDetailRoomByIdApi(parseInt(id as string)));
  }, [params.id]);

  if (!getStore(ACCESS_TOKEN)) {
    notification.error({
      message: `Unauthorized`,
      description: 'Please login to access this page!!!',
      placement: 'topRight',
    });
    return <Navigate to='/' />;
  }

  return (
    <div style={{ paddingBlockStart: '80px' }} id='detail'>
      <div className='container'>
        <div className='detail__header'>
          <h1 className='title'>{detailRoom?.tenPhong}</h1>
          <div className='sub-title'>
            <div className='left-content'>
              <span className='rating'>
                <i className='fas fa-star'></i>4,83{' '}
                <span className='greyText'>(18 đánh giá)</span>
              </span>
              <span className='sub-text-divider'> · </span>
              <div className='super-host'>
                <div className='icon-super'>
                  <i className='fas fa-medal'></i>
                </div>
                Chủ nhà siêu cấp
              </div>
              <span className='sub-text-divider'> · </span>
              <span className='address'>Hồ Chí Minh, Việt Nam</span>
            </div>
            <div className='right-content'>
              <button className='btn btn-share'>
                <div className='icon-btn icon-share'>
                  <i className='far fa-share-square'></i>
                </div>
                <span className='text'>Chia sẻ</span>
              </button>
              <button className='btn btn-heart'>
                <div className='icon-btn icon-heart'>
                  <i className='far fa-heart'></i>
                </div>
                <span className='text'>Lưu</span>
              </button>
            </div>
          </div>
        </div>
        <div className='detail__thumbnail'>
          <div className='thumbnail__image'>
            <img
              src={detailRoom?.hinhAnh}
              alt='...'
              style={{ width: '100%', maxHeight: 'calc(70vh - 80px)' }}
            />
          </div>
          <div className='thumbnail__btn-view'>
            <button className='btn btn-view-all'>
              <div className='icon-view-all'>
                <i className='fas fa-th'></i>
              </div>
              <span className='text-view-all'>Hiển thị tất cả ảnh</span>
            </button>
          </div>
        </div>
        <div className='detail__content'>
          <div className='detail__content-left'>
            <div className='content-title'>
              <div className='left-content'>
                <h2 className='title'>{detailRoom?.tenPhong}</h2>
                <div className='sub-title'>
                  <span>{detailRoom?.khach} khách</span>
                  <span> · </span>
                  <span>{detailRoom?.phongNgu} phòng ngủ</span>
                  <span> · </span>
                  <span>{detailRoom?.giuong} giường</span>
                  <span> · </span>
                  <span>{detailRoom?.phongTam} phòng tắm</span>
                </div>
              </div>
              <div className='right-content'>
                <div className='avatar-owned'>
                  <img src='https://joeschmoe.io/api/v1/random' alt='' />
                  <div className='icon-super-host'>
                    <i className='fas fa-medal'></i>
                  </div>
                </div>
              </div>
            </div>
            <div className='content-descriptions'>
              <div className='description__feature'>
                <div className='divider-content'></div>
                <ul className='list-feature'>
                  <li className='feature-content'>
                    <div className='main-content'>
                      <div className='icon-content'>
                        <i className='fa fa-home'></i>
                      </div>
                      <h3 className='text-main'>Toàn bộ nhà</h3>
                    </div>
                    <div className='sub-content'>
                      <span className='text-sub greyText'>
                        Bạn sẽ có nhà riêng cho mình.
                      </span>
                    </div>
                  </li>
                  <li className='feature-content'>
                    <div className='main-content'>
                      <div className='icon-content'>
                        <i className='fas fa-broom'></i>
                      </div>
                      <h3 className='text-main'>Vệ sinh tăng cường</h3>
                    </div>
                    <div className='sub-content'>
                      <span className='text-sub greyText'>
                        Chủ nhà này đã cam kết thực hiện vệ sinh tăng cường 5
                        bước của Airbnb.&nbsp;
                        <button className='btn btn-more-info'>
                          Tìm hiểu thêm
                        </button>
                      </span>
                    </div>
                  </li>
                  <li className='feature-content'>
                    <div className='main-content'>
                      <div className='icon-content'>
                        <i className='fas fa-medal'></i>
                      </div>
                      <h3 className='text-main'>Phong là chủ nhà siêu cấp</h3>
                    </div>
                    <div className='sub-content'>
                      <span className='text-sub greyText'>
                        Chủ nhà siêu cấp là những chủ nhà có kinh nghiệm, được
                        đánh giá cao và là những người cam kết mang lại quẵng
                        thời gian ở tuyệt vời cho khách.
                      </span>
                    </div>
                  </li>
                  <li className='feature-content'>
                    <div className='main-content'>
                      <div className='icon-content'>
                        <i className='fas fa-calendar-times'></i>
                      </div>
                      <h3 className='text-main'>Miễn phí huỷ trong 48 giờ</h3>
                    </div>
                  </li>
                </ul>
              </div>
              <div className='description__content'>
                <div className='divider-content'></div>
                <button className='btn btn-translate'>
                  <span className='btn-content'>Dịch sang Tiếng Việt</span>
                  <div className='icon-translate'>
                    <i className='fas fa-language'></i>
                  </div>
                </button>
                <div className='main-content'>
                  {detailRoom?.moTa} ... <br />
                  <button className='btn btn-more-info'>Tìm hiểu thêm</button>
                </div>
              </div>
            </div>
            <div className='content-utilities'>
              <div className='divider-content'></div>
              <div className='utilities-title'>
                <h3 className='title'>Nơi này có những gì cho bạn</h3>
              </div>
              <div className='row'>
                {detailRoom?.bep && (
                  <div className='col-6'>
                    <div className='item'>
                      <div className='item-content'>
                        <div className='icon-item'>
                          <i className='fa-solid fa-utensils'></i>
                        </div>
                        <span className='text-item'>Bếp</span>
                      </div>
                    </div>
                  </div>
                )}
                {detailRoom?.wifi && (
                  <div className='col-6'>
                    <div className='item'>
                      <div className='item-content'>
                        <div className='icon-item'>
                          <i className='fas fa-wifi'></i>
                        </div>
                        <span className='text-item'>Wifi</span>
                      </div>
                    </div>
                  </div>
                )}
                {detailRoom?.tivi && (
                  <div className='col-6'>
                    <div className='item'>
                      <div className='item-content'>
                        <div className='icon-item'>
                          <i className='fas fa-tv'></i>
                        </div>
                        <span className='text-item'>
                          Tivi với truyền hình cap tiêu chuẩn
                        </span>
                      </div>
                    </div>
                  </div>
                )}
                <div className='col-6'>
                  <div className='item'>
                    <div className='item-content'>
                      <div className='icon-item'>
                        <i className='fa-solid fa-elevator'></i>
                      </div>
                      <span className='text-item'>Thang máy</span>
                    </div>
                  </div>
                </div>
                {detailRoom?.dieuHoa && (
                  <div className='col-6'>
                    <div className='item'>
                      <div className='item-content'>
                        <div className='icon-item'>
                          <i className='fas fa-snowflake'></i>
                        </div>
                        <span className='text-item'>Điều hoà nhiệt độ</span>
                      </div>
                    </div>
                  </div>
                )}
                {detailRoom?.hoBoi && (
                  <div className='col-6'>
                    <div className='item'>
                      <div className='item-content'>
                        <div className='icon-item'>
                          <i className='fas fa-swimming-pool'></i>
                        </div>
                        <span className='text-item'>Hồ bơi</span>
                      </div>
                    </div>
                  </div>
                )}
                <div className='col-6'>
                  <div className='item'>
                    <div className='item-content'>
                      <div className='icon-item'>
                        <img
                          src={require('../../assets/icons/flat-ironing-icon.png')}
                          alt='flat-ironing-icon'
                        />
                      </div>
                      <span className='text-item'>Bàn là</span>
                    </div>
                  </div>
                </div>
                <div className='col-6'>
                  <div className='item'>
                    <div className='item-content'>
                      <div className='icon-item'>
                        <img
                          src={require('../../assets/icons/washing_machine-icon.png')}
                          alt='washing_machine-icon'
                        />
                      </div>
                      <span className='text-item'>Máy giặt</span>
                    </div>
                  </div>
                </div>
                <div className='col-6'>
                  <div className='item'>
                    <div className='item-content'>
                      <div className='icon-item'>
                        <img
                          src={require('../../assets/icons/iron-icon.png')}
                          alt='iron-icon'
                        />
                      </div>
                      <span className='text-item'>Bàn ủi</span>
                    </div>
                  </div>
                </div>
                {detailRoom?.doXe && (
                  <div className='col-6'>
                    <div className='item'>
                      <div className='item-content'>
                        <div className='icon-item'>
                          <i className='fas fa-parking'></i>
                        </div>
                        <span className='text-item'>Bãi đậu xe</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <button className='btn btn-utilities-view'>
                <span className='btn-content'>
                  Hiển thị tất cả 24 tiện nghi
                  <i className='fas fa-chevron-right'></i>
                </span>
              </button>
            </div>
          </div>
          <div className='content-booking'>
            <DetailOrder
              maPhong={detailRoom?.id}
              giaTien={detailRoom?.giaTien}
              khach={detailRoom?.khach}
            />
          </div>
        </div>
        <div className='detail__review'>
          <div className='divider-content'></div>
          <DetailReview id={params.id} />
        </div>
      </div>
    </div>
  );
}
