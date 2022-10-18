import { configureStore } from "@reduxjs/toolkit";
import { signInApi } from "./signin";
import accountState from "./signin/account";

export const store = configureStore({
	reducer: {
		// numberRudcer: (state = 1, action: PayloadAction<number>) => {
		// 	return 1;
		// },
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
