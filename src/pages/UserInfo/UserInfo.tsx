import { Col, Row } from "antd";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import UserLeftSide from "../../components/UserInfo/UserLeftSide";
import { useLazyGetUserQuery } from "../../redux/userInfo";

function UserInfo() {
	const params = useParams();
	const { id } = params;
	const [getUser, { data: user, isLoading }] = useLazyGetUserQuery();

	useEffect(() => {
		getUser({ id });
	}, [id]);

  console.log(user)
	return (
		<div className='container' style={{ paddingTop: "80px" }}>
			<Row style={{ maxWidth: "1170px", margin: "48px auto 32px" }}>
				<Col span={6}>
					<UserLeftSide user={user} />
				</Col>
				<Col span={18}></Col>
			</Row>
		</div>
	);
}

export default UserInfo;
