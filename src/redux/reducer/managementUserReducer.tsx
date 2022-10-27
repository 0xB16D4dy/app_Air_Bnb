import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import customHistory from '../../utils/history';
import { http } from '../../utils/setting';
import { AppDispatch } from '../configStore';

export interface UserModal {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string | null;
  birthday: string;
  avatar: string | null;
  gender: boolean;
  role: string;
}

export interface EditUserModal {
  id: string;
  value: UserModal;
}

const initialState: any = {
  arrUser: [],
  userEdit: {},
};

const managementUserReducer = createSlice({
  name: 'managementUserReducer',
  initialState,
  reducers: {
    getAllUserAction: (state, action: PayloadAction<UserModal[]>) => {
      state.arrUser = action.payload;
    },
    getUserByIdAction: (state, action: PayloadAction<UserModal>) => {
      state.userEdit = action.payload;
    },
  },
});

export const { getAllUserAction, getUserByIdAction } =
  managementUserReducer.actions;

export default managementUserReducer.reducer;

export const getAllUserApi = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get('/users');
      dispatch(getAllUserAction(result.data.content));
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteUserApi = (id: any) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.delete(`/users?id=${id}`);
      console.log(result.data.message);
      dispatch(getAllUserApi());
    } catch (error) {
      console.log(error);
    }
  };
};

export const getUserByIdApi = (id: any) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get(`/users/${id}`);
      dispatch(getUserByIdAction(result.data.content));
    } catch (error) {
      console.log(error);
    }
  };
};

export const editUserByIdApi = (data: EditUserModal) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.put(`/users/${data.id}`, data.value);
      customHistory.push('/admin/management-user');
      dispatch(getAllUserApi());
    } catch (error) {
      console.log(error);
    }
  };
};

export const createUserByRoleAdminApi = (data: UserModal) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.post('/users', data);
      console.log(result.data.content);
      dispatch(getAllUserApi());
    } catch (error) {
      console.log(error);
    }
  };
};

export const searchUserByNameApi = (keyword: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get(`/users/search/${keyword}`);
      console.log(result.data.content);
      dispatch(getAllUserAction(result.data.content));
    } catch (error) {
      console.log(error);
    }
  };
};
