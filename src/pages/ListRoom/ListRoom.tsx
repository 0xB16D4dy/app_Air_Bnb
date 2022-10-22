import { Pagination, PaginationProps, Rate } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { AppDispatch, RootState } from '../../redux/configStore';
import { getRoomByIDApi, RoomModel } from '../../redux/reducer/RoomReducer';

type Props = {};

export default function ListRoom({}: Props) {
  const [current, setCurrent] = useState(1);
  const navigate = useNavigate();
  const onChange: PaginationProps['onChange'] = (page) => {
    // console.log(page);
    setCurrent(page);
  };
  const params = useParams();
  const dispatch: AppDispatch = useDispatch();
  const { arrRoom } = useSelector((state: RootState) => state.RoomReducer);

  const renderItem = () => {
    return arrRoom?.map((item: RoomModel, index: number) => {
      return (
        <div
          className='listings__item'
          key={index}
          onClick={() => {
            navigate(`/detail/${item.id}`);
          }}
        >
          <div className='listings__img listings__img-superHost'>
            <button className='prev-next-icon'>
              <img
                src={require('../../assets/icons/arrow-left.svg').default}
                alt='arrow-left'
              />
            </button>
            <button className='prev-next-icon'>
              <img
                src={require('../../assets/icons/arrow-right.svg').default}
                alt='arrow-right'
              />
            </button>
            <img src={item.hinhAnh} alt='...' />
          </div>
          <div className='listings__content'>
            <div className='listings__title'>
              <div className='listings__icon-text'>
                <span className='greyText'>Private room in Birkenhead</span>
                <h2>{item.tenPhong}</h2>
              </div>
              <div className='listings__title-icon'>
                <button>
                  <i className='far fa-heart'></i>
                </button>
              </div>
            </div>
            <div className='seperator'></div>
            <div className='listings__description'>
              <span className='greyText'>
                {item.khach} Khách · {item.phongNgu} Phòng ngủ
              </span>
              <span className='greyText'>Kitchen · Wifi · Heating</span>
            </div>
            <div className='listings__details'>
              <div className='listings__ratings'>
                <Rate allowHalf defaultValue={4.5} />
                <span>(114)</span>
              </div>
              <div className='listings__price'>
                <div className='listings__price-total'>
                  <span>
                    ${item.giaTien} <span>/ đêm</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  useEffect(() => {
    const idCity: string = params.city as string;
    dispatch(getRoomByIDApi(parseInt(idCity, 10)));
  }, [params.idcity]);
  return (
    <section className='listRoom'>
      <div className='listRoom__content'>
        <span>Hơn 300 chỗ ở · 16 thg 4 - 14 thg 5 · 1 người</span>
        <h3>Chỗ ở tại khu vực đã chọn</h3>
        <div className='listRoom__filters'>
          <button className='outlined curved'>Loại nơi ở</button>
          <button className='outlined curved'>Giá</button>
          <button className='outlined curved'>Đặt ngay</button>
          <button className='outlined curved'>Phòng và phòng ngủ</button>
          <button className='outlined curved'>Bộ lọc khác</button>
        </div>
        <div className='listRoom__scarcity'>
          <i className='fa fa-calendar' aria-hidden='true'></i>
          <span>
            <span className='bold'>
              67% số địa điểm ở Lake District cho ngày của bạn và khách đã được
              đặt.{' '}
            </span>
            Bạn có thể muốn đặt sớm.
          </span>
        </div>
        <div className='listings'>{renderItem()}</div>
        <div className='pagination'>
          <Pagination
            total={50}
            pageSize={5}
            current={current}
            onChange={onChange}
            className='pagination__content'
          />
        </div>
      </div>
      <div className='listRoom__map'>
        <div className='listRoom__map-googleMap'>
          <div id='map'>
            {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d501725.3382326875!2d106.41503116335178!3d10.755341085908567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529292e8d3dd1%3A0xf15f5aad773c112b!2zSOG7kyBDaMOtIE1pbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1666092311710!5m2!1svi!2s'
              className='content'
              allowFullScreen
              loading='lazy'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
