import React, { useRef } from 'react';
import { Button, Carousel } from 'antd';
import { CarouselRef } from 'antd/lib/carousel';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';

type Props = {};

export default function Slider({}: Props) {
  const contentStyle: React.CSSProperties = {
    width: '100%',
    height: '600px',
  };
  const slider = useRef<CarouselRef>(null);
  return (
    <>
      <section id='carousel' className='carousel' style={{paddingBlockStart:'80px'}}>
        <Carousel autoplay ref={slider} className='carousel__inner'>
          <div>
            <img
              src={require('../../assets/img/background.jpeg')}
              style={contentStyle}
              alt='sss'
            />
          </div>
          <div>
            <img
              src={require('../../assets/img/MOONBORN.jpeg')}
              style={contentStyle}
              alt='sss'
            />
          </div>
          <div>
            <img
              src={require('../../assets/img/Sentimental.jpeg')}
              style={contentStyle}
              alt='sss'
            />
          </div>
          <div>
            <img
              src={require('../../assets/img/Lesson.jpeg')}
              style={contentStyle}
              alt='sss'
            />
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
