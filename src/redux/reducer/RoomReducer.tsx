import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { notification } from 'antd';
import customHistory from '../../utils/history';
import { http } from '../../utils/setting';
import { AppDispatch } from '../configStore';

export interface RoomModel {
  id: number;
  tenPhong: string;
  khach: number;
  phongNgu: number;
  giuong: number;
  phongTam: number;
  moTa: string;
  giaTien: number;
  mayGiat: boolean;
  banLa: boolean;
  tivi: boolean;
  dieuHoa: boolean;
  wifi: boolean;
  bep: boolean;
  doXe: boolean;
  hoBoi: boolean;
  banUi: boolean;
  maViTri: number;
  hinhAnh: string;
}

export interface BookRoomModel {
  id?: number;
  maPhong: number;
  ngayDen: Date;
  ngayDi: Date;
  soLuongKhach: number;
  maNguoiDung: number;
}

export interface CommentReviewModel {
  ngayBinhLuan: string;
  noiDung: string;
  saoBinhLuan: number;
  tenNguoiBinhLuan: string;
  avatar: string;
}

export interface AddCommentModel {
  id?: number;
  maPhong: number;
  maNguoiBinhLuan: number;
  ngayBinhLuan: string;
  noiDung: string;
  saoBinhLuan: number;
}

const initialState: any = {
  arrRoom: [],
  detailRoom: {},
  arrComment: [],
  arrAllRoom : [],
};

const RoomReducer = createSlice({
  name: 'RoomReducer',
  initialState,
  reducers: {
    getRoomByIDAction: (state, action: PayloadAction<RoomModel[]>) => {
      state.arrRoom = action.payload;
    },
    getDetailRoomByIdAction: (state, action: PayloadAction<RoomModel>) => {
      state.detailRoom = action.payload;
    },
    getCommentReviewByIdAction: (
      state,
      action: PayloadAction<CommentReviewModel[]>
    ) => {
      state.arrComment = action.payload;
    },
    getAllRoomAction: (state,action:PayloadAction<RoomModel[]>)=>{
      state.arrAllRoom = action.payload;
    }
  },
});

export const {
  getRoomByIDAction,
  getDetailRoomByIdAction,
  getCommentReviewByIdAction,
  getAllRoomAction
} = RoomReducer.actions;

export default RoomReducer.reducer;

//-------------Call Api------------
export const getRoomByIDApi = (idCity: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get(
        `/phong-thue/lay-phong-theo-vi-tri?maViTri=${idCity}`
      );
      // console.log(result.data.content);
      const action = getRoomByIDAction(result.data.content);
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};

export const getDetailRoomByIdApi = (id: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get(`/phong-thue/${id}`);
      const action = getDetailRoomByIdAction(result.data.content);
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};

export const bookingRoomApi = (data: BookRoomModel) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.post(`/dat-phong`, data);
      console.log(result.data.message);
      notification.success({
        message: 'Booking Room',
        description: 'You have successfully booked a room',
        placement: 'topRight',
      });
      customHistory.push('/');
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCommentReviewByIdApi = (id: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get(
        `/binh-luan/lay-binh-luan-theo-phong/${id}`
      );
      // console.log(result.data.content);
      const action = getCommentReviewByIdAction(result.data.content);
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};

export const addCommentApi = (data: AddCommentModel) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.post(`/binh-luan`, data);
      notification.success({
        message: 'Add Comment',
        description: `Comment Successful`,
        placement: 'topRight',
      });
      dispatch(getCommentReviewByIdApi(data.maPhong))
    } catch (error) {}
  };
};

//------------- api management Room -------------

export const getAllRoomApi = () => {
  return async (dispatch:AppDispatch) => {
    try {
      const result = await http.get('/phong-thue');
      // console.log(result.data.content);
      dispatch(getAllRoomAction(result.data.content))
    } catch (error) {
      console.log(error)
    }
  }
}