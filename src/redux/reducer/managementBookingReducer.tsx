import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { http } from '../../utils/setting';
import { AppDispatch } from '../configStore';
import { BookRoomModel } from './RoomReducer';

const initialState: any = {
  arrBooking: [],
};

const managementBookingReducer = createSlice({
  name: 'managementBookingReducer',
  initialState,
  reducers: {
    getAllBookingAction: (state, action: PayloadAction<BookRoomModel[]>) => {
      state.arrBooking = action.payload;
    },
  },
});

export const { getAllBookingAction } = managementBookingReducer.actions;

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
