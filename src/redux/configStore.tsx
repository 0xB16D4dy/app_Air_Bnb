import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './reducer/locationReducer';
import managementBookingReducer from './reducer/managementBookingReducer';
import managementUserReducer from './reducer/managementUserReducer';
import RoomReducer from './reducer/RoomReducer';
import { signInApi } from './signin';
import accountState from './signin/account';
import { userApi } from './userInfo';

export const store = configureStore({
  reducer: {
    locationReducer,
    RoomReducer,
    accountState,
    managementBookingReducer,
    managementUserReducer,
    [signInApi.reducerPath]: signInApi.reducer,
    [userApi.reducerPath]: userApi.reducer
  },
  middleware: (getDefauleMiddleware) => {
    return getDefauleMiddleware({ serializableCheck: false }).concat([
      signInApi.middleware,
      userApi.middleware
    ]);
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
