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
    getLocationRecentAction: (
      state,
      action: PayloadAction<LocationModel[]>
    ) => {
      state.arrPlaceCard = action.payload;
    },
  },
});

export const { getLocationRecentAction, getLocationAction } =
  locationReducer.actions;

export default locationReducer.reducer;

//--------------- call api -----------------

export const getLocationApi = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get('/vi-tri');
      dispatch(getLocationAction(result.data.content));
    } catch (error) {
      console.log(error);
    }
  };
};

export const searchLocationFilterApi = (keyword: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get('/vi-tri');
      let arrResult = result.data.content;
      let updateArrRes = [];
      for (let i = 0; i < arrResult.length; i++) {
        if (
          arrResult[i].tenViTri
            .toLowerCase()
            .trim()
            .includes(keyword.toLowerCase().trim())
        ) {
          updateArrRes.push(arrResult[i]);
        }
      }
      dispatch(getLocationAction(updateArrRes));
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
