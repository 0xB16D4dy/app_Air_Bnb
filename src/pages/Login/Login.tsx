import React, { ReactNode, useState, useEffect } from "react";
import {
	EyeInvisibleOutlined,
	EyeTwoTone,
	LockOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Modal } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/signin";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configStore";

type Props = {
	children: ReactNode;
	onOpenLogin: (value: boolean) => void;
	isOpenLogin: boolean;
};

export default function Login({ children, isOpenLogin, onOpenLogin }: Props) {
	const navigate = useNavigate();
	const { accessToken, user } = useSelector(
		(state: RootState) => state.accountState.myAccount
	);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [login, { isError, isSuccess, error, isLoading }] = useLoginMutation();

	useEffect(() => {
		if (isOpenLogin) {
			setIsModalOpen(isOpenLogin);
		}
	}, [isOpenLogin, isModalOpen]);

	const onFinish = (values: any) => {
		login(values);
	};

	useEffect(() => {
		if (isError) {
			toast.error("Email hoặc mật khẩu không đúng !", { duration: 1500 });
		}

		if (isSuccess) {
			setIsModalOpen(false);
			onOpenLogin(false);
			window.location.reload();
		}

		if (!!accessToken && !!user) {
			user.role?.toLocaleLowerCase() === "admin"
				? navigate("/admin/management-user")
				: navigate("/");
		}
	}, [isError, error, isSuccess, accessToken]);

	const handleOk = () => {
		setIsModalOpen(false);
		onOpenLogin(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
		onOpenLogin(false);
	};
	return (
		<>
			{children}
			<Modal
				className='login-modal'
				title='Đăng Nhập'
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={null}
				style={{
					textAlign: "center",
				}}
			>
				<Form
					name='normal_login'
					className='login-form'
					initialValues={{ remember: true }}
					onFinish={onFinish}
				>
					<Form.Item
						name='username'
						rules={[
							{ required: true, message: "Please input your E-mail!" },
							{
								type: "email",
								message: "The input is not valid E-mail!",
							},
						]}
					>
						<Input
							prefix={<UserOutlined className='site-form-item-icon' />}
							placeholder='Username'
						/>
					</Form.Item>
					<Form.Item
						name='password'
						rules={[{ required: true, message: "Please input your Password!" }]}
					>
						<Input.Password
							prefix={<LockOutlined className='site-form-item-icon' />}
							iconRender={(visible) =>
								visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
							}
							type='password'
							placeholder='Password'
						/>
					</Form.Item>

					<Form.Item className='login-btn'>
						<Button
							type='primary'
							htmlType='submit'
							className='login-form-button'
							loading={isLoading}
						>
							Log in
						</Button>
					</Form.Item>
					<p>
						Or <NavLink to='/register'>register now!</NavLink>
					</p>
				</Form>
			</Modal>
		</>
	);
}
