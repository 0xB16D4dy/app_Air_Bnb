import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { http } from '../../utils/setting';
import { AppDispatch } from '../configStore';

export interface RoomModel {
    id:       number;
    tenPhong: string;
    khach:    number;
    phongNgu: number;
    giuong:   number;
    phongTam: number;
    moTa:     string;
    giaTien:  number;
    mayGiat:  boolean;
    banLa:    boolean;
    tivi:     boolean;
    dieuHoa:  boolean;
    wifi:     boolean;
    bep:      boolean;
    doXe:     boolean;
    hoBoi:    boolean;
    banUi:    boolean;
    maViTri:  number;
    hinhAnh:  string;
}

const initialState:any = {
    arrRoom:[]
};

const RoomReducer = createSlice({
  name: 'RoomReducer',
  initialState,
  reducers: {
    getRoomByIDAction: (state,action:PayloadAction<RoomModel[]>) =>{
        state.arrRoom = action.payload
    }
  },
});

export const {getRoomByIDAction} = RoomReducer.actions;

export default RoomReducer.reducer;

//-------------Call Api------------
export const getRoomByIDApi = (idCity:number) => {
  return async (dispatch:AppDispatch) => {
    try {
        const result = await http.get(`/phong-thue/lay-phong-theo-vi-tri?maViTri=${idCity}`)
        console.log(result.data.content)
        const action =  getRoomByIDAction(result.data.content);
        dispatch(action)
    } catch (error) {
        console.log(error);
    }
  };
};
