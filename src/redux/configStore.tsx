import { configureStore, PayloadAction } from "@reduxjs/toolkit";
import { signInApi } from "./signin";

export const store = configureStore({
	reducer: {
		numberRudcer: (state = 1, action: PayloadAction<number>) => {
			return 1;
		},
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
