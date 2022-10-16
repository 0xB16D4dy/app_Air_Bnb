import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Login from "../pages/Login/Login";

type Props = {};

export default function HomeTemplate({}: Props) {
	const [isOpenModalLogin, setOpenModalLogin] = useState(false);
	return (
		<Login onOpenLogin={setOpenModalLogin} isOpenLogin={isOpenModalLogin}>
			<Header handleOpenLogin={setOpenModalLogin} />
			<Outlet />
			<Footer />
		</Login>
	);
}
