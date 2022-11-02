import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { notification } from 'antd';
import { http } from '../../utils/setting';
import { AppDispatch, RootState } from '../configStore';
import { BookRoomModel } from './RoomReducer';

const initialState: any = {
  arrBooking: [],
  bookingEdit: {},
};

const managementBookingReducer = createSlice({
  name: 'managementBookingReducer',
  initialState,
  reducers: {
    getAllBookingAction: (state, action: PayloadAction<BookRoomModel[]>) => {
      state.arrBooking = action.payload;
    },
    getBookingByIdAction: (state, action: PayloadAction<BookRoomModel>) => {
      state.bookingEdit = action.payload;
    },
  },
});

export const { getAllBookingAction, getBookingByIdAction } =
  managementBookingReducer.actions;

export default managementBookingReducer.reducer;

//------------------ Call api ------------------

export const getAllBookingApi = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get('/dat-phong');
      dispatch(getAllBookingAction(result.data.content));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getBookingByIdApi = (id: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get(`/dat-phong/${id}`);
      // console.log(result.data.content);
      dispatch(getBookingByIdAction(result.data.content));
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteBookingByIdApi = (id: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.delete(`/dat-phong/${id}`);
      // console.log(result.data.message)
      notification.error({
        message: 'Delete Booking Room',
        description: result.data.message,
        placement: 'topRight',
      });
      dispatch(getAllBookingApi());
    } catch (error) {
      console.log(error);
    }
  };
};

export const editBookingByIdApi = (data: BookRoomModel) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.put(`/dat-phong/${data.id}`,data);
      notification.success({
        message: 'Edit Booking Room',
        description: result.data.message,
        placement: 'topRight',
      });
      dispatch(getAllBookingApi());
    } catch (error) {
      console.log(error);
    }
  };
};

export const searchBookingByUserIdApi = (maNguoiDung: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get(
        `/dat-phong/lay-theo-nguoi-dung/${maNguoiDung}`
      );
      // console.log(result.data.content);
      dispatch(getAllBookingAction(result.data.content));
    } catch (error) {
      console.log(error);
    }
  };
};

export const createBookingRoomApi = (data: BookRoomModel) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.post(`/dat-phong`, data);
      // console.log(result.data.message);
      notification.success({
        message: 'Booking Room',
        description: 'You have successfully booked a room',
        placement: 'topRight',
      });
      dispatch(getAllBookingApi());
    } catch (error) {
      console.log(error);
    }
  };
};
