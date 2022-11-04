import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from '../../redux/configStore';
import {
  getLocationRecentApi,
  LocationModel,
} from '../../redux/reducer/locationReducer';
type Props = {};

export default function PlaceCard({}: Props) {
  const { arrLocation } = useSelector(
    (state: RootState) => state.locationReducer
  );
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const renderPlaceCardItem = () => {
    return arrLocation?.map((item: LocationModel, index: number) => {
      return (
        <div className='col-md-3 col-sm-6 col-wrapper' key={index} onClick={()=>{
          navigate(`/location/${item.id}`);
        }}>
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
