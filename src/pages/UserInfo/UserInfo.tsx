import { Col, Row } from "antd";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import UserLeftSide from "../../components/UserInfo/UserLeftSide";
import UserRightSide from "../../components/UserInfo/UserRightSide";
import { useLazyGetUserQuery } from "../../redux/userInfo";

function UserInfo() {
	const params = useParams();
	const { id } = params;
	const [getUser, { data: user, isLoading }] = useLazyGetUserQuery();

	useEffect(() => {
		getUser({ id });
	}, [id]);


	return (
		<div className='container' style={{ paddingTop: "80px" }}>
			<Row style={{ maxWidth: "1170px", margin: "48px auto 32px" }} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col md={6} style={{}}>
					<UserLeftSide user={user} />
				</Col>
				<Col md={18}>
					<UserRightSide user={user}/>
				</Col>
			</Row>
		</div>
	);
}

export default UserInfo;
