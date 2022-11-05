import React, { useState, useEffect } from "react";
import {
	Button,
	Form,
	Input,
	Radio,
	RadioChangeEvent,
	Col,
	Row,
	Typography,
} from "antd";
import { useRegisterMutation } from "../../redux/signin";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const formItemLayout = {
	labelCol: {
		xs: { span: 24 },
		sm: { span: 8 },
	},
	wrapperCol: {
		xs: { span: 24 },
		sm: { span: 16 },
	},
};

const tailFormItemLayout = {
	wrapperCol: {
		xs: {
			span: 24,
			offset: 0,
		},
		sm: {
			span: 16,
			offset: 8,
		},
	},
};

const { Title } = Typography;

type Props = {};

function Register({}: Props) {
	const [gender, setGender] = useState(true);
	const [form] = Form.useForm();
	const [register, { isSuccess }] = useRegisterMutation();
	const navigate = useNavigate();

	useEffect(() => {
		if (isSuccess) {
			navigate("/true");
		}
	}, [isSuccess]);

	const onChangeGender = (e: RadioChangeEvent) => {
		setGender(e.target.value);
	};

	const onFinish = (values: any) => {
		const data = {
			name: values.name,
			email: values.email,
			gender: values.gender,
			password: values.password,
		};
		register({ data });
	};

	return (
		<div className='register-container'>
			<Row
				style={{
					width: "60%",
					margin: "0 auto ",
					background: "#fff",
					borderRadius: "10px",
					overflow: "hidden",
				}}
			>
				<Col
					md={12}
					xs={0}
					className='img-register'
					style={{
						padding: "0px",
						background: "url(./assets/img/form-v6.jpg)",
						backgroundRepeat: "no-repeat",
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				></Col>
				<Col md={12} xs={24} style={{ padding: "40px 40px", margin: "auto 0" }}>
					<Title style={{ textAlign: "center" }}>Register</Title>
					<Form
						{...formItemLayout}
						form={form}
						name='register'
						onFinish={onFinish}
						scrollToFirstError
					>
						<Form.Item name={"name"} label='Name' rules={[{ required: true }]}>
							<Input />
						</Form.Item>
						<Form.Item
							name='email'
							label='E-mail'
							rules={[
								{
									type: "email",
									message: "The input is not valid E-mail!",
								},
								{
									required: true,
									message: "Please input your E-mail!",
								},
							]}
						>
							<Input />
						</Form.Item>

						<Form.Item
							name='password'
							label='Password'
							rules={[
								{
									required: true,
									message: "Please input your password!",
								},
							]}
							hasFeedback
						>
							<Input.Password />
						</Form.Item>

						<Form.Item
							name='confirm'
							label='Confirm Password'
							dependencies={["password"]}
							hasFeedback
							rules={[
								{
									required: true,
									message: "Please confirm your password!",
								},
								({ getFieldValue }) => ({
									validator(_, value) {
										if (!value || getFieldValue("password") === value) {
											return Promise.resolve();
										}
										return Promise.reject(
											new Error(
												"The two passwords that you entered do not match!"
											)
										);
									},
								}),
							]}
						>
							<Input.Password />
						</Form.Item>

						<Form.Item name={"gender"} label='Gender'>
							<Radio.Group onChange={onChangeGender} value={gender}>
								<Radio value={true}>Nam</Radio>
								<Radio value={false}>Nữ</Radio>
							</Radio.Group>
						</Form.Item>
						<Form.Item {...tailFormItemLayout}>
							<Button
								type='primary'
								htmlType='submit'
								style={{
									background: `linear-gradient(
                  to right,
                  rgb(230, 30, 77) 0%,
                  rgb(227, 28, 95) 50%,
                  rgb(215, 4, 102) 100%
                )`,
									width: "50%",
									borderRadius: "8px",
									borderColor: "transparent",
								}}
							>
								Register
							</Button>
						</Form.Item>
					</Form>
				</Col>
			</Row>
		</div>
	);
}

export default Register;
