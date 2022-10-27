import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Login from "../pages/Login/Login";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../redux/signin/account";
import { ACCESS_TOKEN, getStoreJson } from "../utils/setting";

export default function HomeTemplate() {
	const [isOpenModalLogin, setOpenModalLogin] = useState(false);
	const params = useParams();
	const dispatch = useDispatch();
	const accessToken = getStoreJson(ACCESS_TOKEN);
	const { r } = params;
	useEffect(() => {
		if (accessToken) {
			dispatch(setUserInfo());
		}
	}, [accessToken]);
	useEffect(() => {
		if (r === "true") {
			toast.success("Đăng ký thành công !")
			setOpenModalLogin(true);
		}
	}, []);
	return (
		<Login onOpenLogin={setOpenModalLogin} isOpenLogin={isOpenModalLogin}>
			<Header handleOpenLogin={setOpenModalLogin} />
			<Outlet />
			<Footer />
			<Toaster
				position='top-right'
				toastOptions={{ className: "react-hot-toast" }}
			/>
		</Login>
	);
}
