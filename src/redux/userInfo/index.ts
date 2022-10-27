import { createApi } from "@reduxjs/toolkit/dist/query/react";
import {
	ACCESS_TOKEN,
	getStoreJson,
	http,
	setStoreJson,
	USER_INFO,
} from "../../utils/setting";
import { setUserInfo } from "../signin/account";

export const userApi = createApi({
	baseQuery: http,
	reducerPath: "userApi",
	tagTypes: ["User"],
	endpoints: (builder) => ({
		getUser: builder.query<any, any>({
			query: (data) => ({
				url: `/users/${data.id}`,
				method: "get",
			}),
			transformResponse: (res) => res.content,
			providesTags: (result) => ["User"],
		}),
		updateAvatar: builder.mutation<any, any>({
			query: (data) => {
				const formData = new FormData();

				formData.append("formFile", data?.originFileObj);
				return {
					url: `/users/upload-avatar`,
					method: "POST",
					data: formData,
					headers: { "Content-Type": "multipart/form-data" },
				};
			},
			invalidatesTags: ["User"],
			async onQueryStarted(args, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled;
					setStoreJson(USER_INFO, data?.content);
					dispatch(setUserInfo());
				} catch (error) {}
			},
		}),
		updateInfo: builder.mutation<any, any>({
			query: (data) => {
				return {
					url: `/users/${data.userId}`,
					method: "put",
					data: data.dataUpdate,
				};
			},
			invalidatesTags: ["User"],
			async onQueryStarted(args, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled;
					setStoreJson(USER_INFO, data?.content);
					dispatch(setUserInfo());
				} catch (error) {}
			},
		}),
		getHistory: builder.query<any, any>({
			query: (data) => {
				return {
					url: `/dat-phong/lay-theo-nguoi-dung/${data?.userId}`
				}
			},
			transformResponse: (res) => res.content
		})
	}),
});

export const { useLazyGetUserQuery, useUpdateAvatarMutation, useUpdateInfoMutation , useLazyGetHistoryQuery} = userApi;
