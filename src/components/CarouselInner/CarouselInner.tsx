import React, { useRef } from 'react';
import { Button, Carousel } from 'antd';
import { CarouselRef } from 'antd/lib/carousel';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';

type Props = {};

export default function CarouselInner({}: Props) {
  const contentStyle: React.CSSProperties = {
    height: '350px',
    color: '#fff',
    lineHeight: '350px',
    textAlign: 'center',
    background: '#364d79',
  };
  const slider = useRef<CarouselRef>(null);
  return (
    <>
      <section id='carousel' className='carousel'>
        <Carousel autoplay ref={slider} className='carousel__inner'>
          <div>
          <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
        <div className='button-prev-next'>
          <Button
            onClick={() => {
              if (slider.current) {
                slider.current.prev();
              }
            }}
            icon={<LeftOutlined className='arrow-left-icon' />}
          ></Button>
          <Button
            onClick={() => {
              if (slider.current) {
                slider.current.next();
              }
            }}
            icon={<RightOutlined className='arrow-right-icon' />}
          ></Button>
        </div>
      </section>
    </>
  );
}
