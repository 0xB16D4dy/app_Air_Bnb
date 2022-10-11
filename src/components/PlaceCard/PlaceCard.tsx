import React from 'react';

type Props = {};

export default function PlaceCard({}: Props) {
  return (
    <div className='place__card-section'>
      <div className='row'>
        <div className='col-3 col-wrapper'>
          <div className='place__card'>
            <img
              className='place__card-img'
              src='https://picsum.photos/50/50'
              alt='...'
            />
            <div className='place__card-body'>
              <div className='place__card-title'>Thành phố Hồ Chí Minh</div>
              <span className='place__card-sub-time'>15 phút lái xe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
