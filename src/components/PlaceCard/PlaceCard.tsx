import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/configStore';
import {
  getLocationRecentApi,
  LocationModel,
} from '../../redux/reducer/locationReducer';
type Props = {};

export default function PlaceCard({}: Props) {
  const { arrPlaceCard } = useSelector(
    (state: RootState) => state.locationReducer
  );
  const dispatch: AppDispatch = useDispatch();

  const renderPlaceCardItem = () => {
    return arrPlaceCard?.map((item: LocationModel, index: number) => {
      return (
        <div className='col-3 col-wrapper' key={index}>
          <div className='place__card'>
            <img className='place__card-img' src={item.hinhAnh} alt='...' />
            <div className='place__card-body'>
              <div className='place__card-title'>{item.tinhThanh}</div>
              <span className='place__card-sub-time'>{item.tenViTri}</span>
            </div>
          </div>
        </div>
      );
    });
  };

  useEffect(() => {
    dispatch(getLocationRecentApi());
  }, []);

  return (
    <div className='place__card-section'>
      <div className='row'>{renderPlaceCardItem()}</div>
    </div>
  );
}
