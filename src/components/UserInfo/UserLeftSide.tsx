import { Avatar, Button, Divider, Upload, UploadProps } from "antd";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLoginMutation } from "../../redux/signin";
import { User } from "../../redux/signin/types";
import { useUpdateAvatarMutation } from "../../redux/userInfo";
import {
	AvatarUpload,
	Container,
	GetAchievement,
	LeftSideContainer,
} from "./styles";

const props: UploadProps = {
	name: "file",
	showUploadList: false,
};

type LeftSideProps = {
	user?: User;
};

function UserLeftSide({ user }: LeftSideProps) {
	const [updateAvatar, { isSuccess }] = useUpdateAvatarMutation();
	const [avatar, setAvatar] = useState(null);

	const onChange = (e: any) => {
		setAvatar(e.file);
	};

	const checkAvatar = (file: any) => {
		if (file.size > 1048576) {
			return toast.error("Dung lượng ảnh phải dưới 1MB");
		}
	};

	useEffect(() => {
		if (!!avatar) {
			updateAvatar(avatar);
		}
	}, [avatar]);



	return (
		<LeftSideContainer>
			<AvatarUpload>
				<Avatar
					size={128}
					src={user?.avatar || "https://joeschmoe.io/api/v1/random"}
				/>
				<Upload {...props} onChange={onChange} beforeUpload={checkAvatar}>
					<span style={{ textDecoration: "underline", fontWeight: "600" }}>
						Cập nhật ảnh
					</span>
				</Upload>
			</AvatarUpload>
			<Container style={{ marginBottom: "16px" }}>
				<Avatar size={24} src='/assets/icons/shield-check.svg' />
			</Container>
			<Container>
				<h6 style={{ fontSize: 18, fontWeight: "800" }}>Xác minh danh tính</h6>
				<p>Xác thực danh tính của bạn với huy hiệu xác minh danh tính.</p>
				<GetAchievement>Nhận huy hiệu</GetAchievement>
			</Container>
			<Divider />
			<Container>
				<h6 style={{ fontSize: 18, fontWeight: "800" }}>
					{user?.name || "user"} đã xác nhận
				</h6>
				<div>
					<Avatar
						size={16}
						src='/assets/icons/check.svg'
						style={{ marginRight: 8 }}
					/>
					Địa chỉ email
				</div>
			</Container>
		</LeftSideContainer>
	);
}

export default UserLeftSide;
