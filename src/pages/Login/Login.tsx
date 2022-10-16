import React, { ReactNode, useState, useEffect } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Modal } from "antd";
import { NavLink } from "react-router-dom";
import { useLoginMutation } from "../../redux/signin";

type Props = {
	children: ReactNode;
	onOpenLogin: (value: boolean) => void;
	isOpenLogin: boolean;
};

export default function Login({ children, isOpenLogin, onOpenLogin }: Props) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [login, {isError, isLoading, isSuccess, error}] = useLoginMutation()

	useEffect(() => {
		if (isOpenLogin) {
			setIsModalOpen(isOpenLogin);
		}
	}, [isOpenLogin, isModalOpen]);

	const onFinish = (values: any) => {
		// console.log("Received values of form: ", values);
		login(values)
	};

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
						rules={[{ required: true, message: "Please input your Username!" }]}
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
						<Input
							prefix={<LockOutlined className='site-form-item-icon' />}
							type='password'
							placeholder='Password'
						/>
					</Form.Item>
					{/* <Form.Item>
						<Form.Item name='remember' valuePropName='checked' noStyle>
							<Checkbox>Remember me</Checkbox>
						</Form.Item>
						<a className='login-form-forgot' href='#'>
							Forgot password
						</a>
					</Form.Item> */}
					<Form.Item className="login-btn">
						<Button
							type='primary'
							htmlType='submit'
							className='login-form-button'
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
