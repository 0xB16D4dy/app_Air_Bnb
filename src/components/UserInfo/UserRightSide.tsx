import { Button, Typography } from "antd";
import React, { useState } from "react";
import { User } from "../../redux/signin/types";
import HistoryOfRent from "./HistoryOfRent";
import UpdateInfoForm from "./UpdateInfoForm";

const { Title, Paragraph } = Typography;

type Props = {
	user: User;
};

function UserRightSide(props: Props) {
	const { user } = props;
  const [showUpdateInfo, setShowUpdateInfo] = useState(false)
	return (
		<div>
			<Title
				level={2}
				style={{ margin: 0 }}
			>{`Xin chào, tôi là ${user?.name}`}</Title>
			<Paragraph>Bắt đầu tham gia vào 2022</Paragraph>
			<Button
				type={"text"}
				style={{ padding: 0, textDecoration: "underline", fontWeight: "700" }}
        onClick={() => setShowUpdateInfo(!showUpdateInfo)}
        disabled={showUpdateInfo}
			>
				Chỉnh sửa hồ sơ
			</Button>

      {showUpdateInfo && <UpdateInfoForm user={user} setShowUpdateInfo={setShowUpdateInfo}/>}

      <Title style={{marginTop: '25px'}} level={2}>Lịch Sử Thuê Phòng</Title>
      <HistoryOfRent/>
		</div>
	);
}

export default UserRightSide;
