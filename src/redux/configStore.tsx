import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './reducer/locationReducer';
import RoomReducer from './reducer/RoomReducer';
import { signInApi } from './signin';
import accountState from './signin/account';

export const store = configureStore({
  reducer: {
    locationReducer,
    RoomReducer,
    accountState,
    [signInApi.reducerPath]: signInApi.reducer,
  },
  middleware: (getDefauleMiddleware) => {
    return getDefauleMiddleware({ serializableCheck: false }).concat([
      signInApi.middleware,
    ]);
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
