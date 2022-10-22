import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { http } from '../../utils/setting';
import { AppDispatch } from '../configStore';

export interface UserModal {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: null;
  birthday: string;
  avatar: null;
  gender: boolean;
  role: string;
}

const initialState:any = {
  arrUser: [],
};

const managementUserReducer = createSlice({
  name: 'managementUserReducer',
  initialState,
  reducers: {
    getAllUserAction: (state, action: PayloadAction<UserModal[]>) => {
      state.arrUser = action.payload;
    },
  },
});

export const {getAllUserAction} = managementUserReducer.actions;

export default managementUserReducer.reducer;

export const getAllUserApi = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get('/users');
      dispatch(getAllUserAction(result.data.content))
    } catch (error) {
      console.log(error);
    }
  };
};
