import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { notification } from 'antd';
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
  editLocation:{},
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
    getLocationByIdAction:(state,action:PayloadAction<LocationModel>)=>{
      state.editLocation = action.payload;
    }
  },
});

export const { getLocationRecentAction, getLocationAction, getLocationByIdAction } =
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

export const createLocationApi = (data:LocationModel) => {
  return async (dispatch:AppDispatch) => {
    try {
      const result = await http.post('/vi-tri',data);
      notification.success({
        message: 'Delete Booking Room',
        description: result.data.message,
        placement: 'topRight',
      });
      dispatch(getLocationApi());
    } catch (error) {
      console.log(error)
    }
  }
}

export const deleteLocationApi = (id:number) => {
  return async (dispatch:AppDispatch) => {
    try {
      const result = await http.delete(`/vi-tri/${id}`)
      // console.log(result.data.message);
      notification.error({
        message: 'Delete Booking Room',
        description: result.data.message,
        placement: 'topRight',
      });
      dispatch(getLocationApi());
    } catch (error) {
      console.log(error)
    }
  }
};

export const getLocationByIdApi = (id:number) =>{
  return async (dispatch:AppDispatch) => {
    try {
      const result = await http.get(`/vi-tri/${id}`)
      // console.log(result.data.content);
      dispatch(getLocationByIdAction(result.data.content))
    } catch (error) {
      console.log(error)
    }
  }
}

export const editLocationByIdApi = (data:LocationModel) => {
  return async (dispatch:AppDispatch) => {
    try {
      const result = await http.put(`/vi-tri/${data.id}`,data)
      // console.log(result.data.message);
      notification.success({
        message: 'Update Location',
        description: result.data.message,
        placement: 'topRight',
      });
      dispatch(getLocationApi());
    } catch (error) {
      console.log(error)
    }
  }
}
