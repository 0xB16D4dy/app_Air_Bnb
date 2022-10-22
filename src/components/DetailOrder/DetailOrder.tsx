import React, { useState } from 'react';
import { Button, Form, DatePicker, Dropdown, Input } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
type Props = {};

const { RangePicker } = DatePicker;

export default function DetailOrder({}: Props) {
  const [book, setBook] = useState<Boolean>(true);
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  const select = (
    <div className='select__dropdown-wrapper'>
      <div className='select__dropdown-content'>
        <div className='select-item'>
          <div className='label'>
            <p className='title'>Người lớn</p>
            <span className='sub-title'>Từ 13 tuổi trở lên</span>
          </div>
          <div className='actions'>
            <Button
              type='primary'
              shape='circle'
              size='middle'
              icon={<MinusOutlined />}
            ></Button>
            <span className='quantity'>1</span>
            <Button
              type='primary'
              shape='circle'
              size='middle'
              icon={<PlusOutlined />}
            ></Button>
          </div>
        </div>
        <div className='close-dropdown'>
          <button className='btn btn-dropdown-close'>Đóng</button>
        </div>
      </div>
    </div>
  );
  return (
    <div className='wrapper-booking' id='wrapper-booking'>
      <Form className='form-booking' onFinish={onFinish}>
        <div className='title-form'>
          <span className='price'>
            $3.812 <span>đêm</span>
          </span>
          <div className='rating greyText'>1 đánh giá</div>
        </div>
        <div className='form-content'>
          <label htmlFor='RangePicker' className='label-book'>
            Nhận phòng
          </label>
          <label htmlFor='RangePicker' className='label-pay'>
            Trả phòng
          </label>
          <Form.Item
            className='form-group form-group-first'
            name={'RangePicker'}
          >
            <RangePicker
              format={'DD/MM/YYYY'}
              separator={''}
              suffixIcon={''}
              placeholder={['Thêm ngày', 'Thêm ngày']}
            />
          </Form.Item>
          <div className='form-group form-group-second'>
            <Dropdown
              overlay={select}
              overlayClassName={'select__dropdown'}
              trigger={['click']}
              getPopupContainer={() =>
                document.getElementById('wrapper-booking') || document.body
              }
            >
              <Button
                className='btn btn-dropdown-select'
                icon={<i className='fa-solid fa-angle-down'></i>}
              >
                <p className='label'>Khách</p>
                <span className='info'>1 khách</span>
                <Form.Item
                  name='quantity'
                  initialValue={'1 khách'}
                  hidden={true}
                >
                  <Input />
                </Form.Item>
              </Button>
            </Dropdown>
          </div>
          <div className='form-group-third'>
            {book ? (
              <Form.Item>
                <Button
                  type='primary'
                  className='btn-order'
                  htmlType='submit'
                  onClick={() => {
                    setBook(!book);
                  }}
                  block
                >
                  Kiểm tra tình trạng còn phòng
                </Button>
              </Form.Item>
            ) : (
              <Form.Item>
                <Button
                  type='primary'
                  className='btn-order'
                  htmlType='submit'
                  block
                >
                  Đặt phòng
                </Button>
              </Form.Item>
            )}
          </div>
        </div>
        {book ? (
          ''
        ) : (
          <div className='booked'>
            <span className='reminder'>Bạn vẫn chưa bị trừ tiền</span>
            <div className='price-list'>
              <div className='price-item primary-price'>
                <span className='text'>$3.812 x 6 đêm</span>
                <span className='result'>$22.872</span>
              </div>
              <div className='price-item second-price'>
                <span className='text'>Phí dịch vụ lưu trú</span>
                <span className='result'>$2.287</span>
              </div>
              <div className='price-item third-price'>
                <span className='text'>Phí dịch vụ</span>
                <span className='result'>$0</span>
              </div>
            </div>
            <div className='price-total'>
              <div className='text-total'>Tổng trước thuế</div>
              <span className='result'>$25.159</span>
            </div>
          </div>
        )}
      </Form>
      <div className='content-report'>
        <button className='btn btn-report'>
          <span className='text-report'>
            <span className='icon-report'>
              <i className='fa-solid fa-flag'></i>
            </span>
            Báo cáo nhà/phòng cho thuê này
          </span>
        </button>
      </div>
    </div>
  );
}
