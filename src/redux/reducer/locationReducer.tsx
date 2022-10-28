import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { http } from '../../utils/setting';
import { AppDispatch } from '../configStore';

export interface LocationModel {
  id: number;
  tenViTri: string;
  tinhThanh: string;
  quocGia: string;
  hinhAnh: string;
}

const initialState: any = {
  arrLocation: [],
  arrPlaceCard: [],
};

const locationReducer = createSlice({
  name: 'locationReducer',
  initialState,
  reducers: {
    getLocationAction: (state, action: PayloadAction<LocationModel[]>) => {
      state.arrLocation = action.payload;
    },
    getLocationFilterByKeywordAction:(state, action:PayloadAction<string>)=>{
        
    },
    getLocationRecentAction: (
      state,
      action: PayloadAction<LocationModel[]>
    ) => {
      state.arrPlaceCard = action.payload;
    },
  },
});

export const { getLocationRecentAction, getLocationAction, getLocationFilterByKeywordAction } =
  locationReducer.actions;

export default locationReducer.reducer;

//--------------- call api -----------------

export const getLocationApi = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get('/vi-tri');
      console.log(result.data.content);
      dispatch(getLocationAction(result.data.content));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getLocationRecentApi = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get(
        '/vi-tri/phan-trang-tim-kiem?pageIndex=1&pageSize=5'
      );
      dispatch(getLocationRecentAction(result.data.content.data));
      // console.log(result.data.content.data);
    } catch (error) {
      console.log(error);
    }
  };
};
