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
			<Row style={{ maxWidth: "1170px", margin: "48px auto 32px",  }} gutter={{ xs: 24, sm: 24, md: 24, lg: 32 }}>
				<Col md={6}  xs={24} style={{paddingBottom: '24px'}}>
					<UserLeftSide user={user} />
				</Col>
				<Col md={18} xs={24} >
					<UserRightSide user={user}/>
				</Col>
			</Row>
		</div>
	);
}

export default UserInfo;
