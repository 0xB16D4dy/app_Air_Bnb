import { createSlice } from "@reduxjs/toolkit";
import { ACCESS_TOKEN, getStoreJson, USER_INFO } from "../../utils/setting";
import { User } from "./types";

export interface account {
	myAccount: {
		accessToken: string;
		user: User;
	};
}

const initialState = {
	myAccount: {
		accessToken: "",
		user: {},
	},
} as unknown as account;

export const accountState = createSlice({
	name: "account",
	initialState,
	reducers: {
		setUserInfo: (state) => {
			state.myAccount.accessToken = getStoreJson(ACCESS_TOKEN);
			state.myAccount.user = getStoreJson(USER_INFO);
		},
		logOut: (state) => {
			state.myAccount.accessToken = '';
			state.myAccount.user = {};
		}
	},
});

export const { setUserInfo, logOut } = accountState.actions;
export default accountState.reducer;
