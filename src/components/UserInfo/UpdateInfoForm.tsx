import React, { useEffect, useState } from "react";
import {
	Button,
	Form,
	Input,
	InputNumber,
	DatePicker,
	Radio,
	RadioChangeEvent,
	DatePickerProps,
} from "antd";
import moment from "moment";
import { useUpdateInfoMutation } from "../../redux/userInfo";
import { User } from "../../redux/signin/types";
type Props = { user: User; setShowUpdateInfo: (value: boolean) => void };

const layout = {
	labelCol: { span: 4 },
	wrapperCol: { span: 20 },
};

const validateMessages = {
	required: "${label} is required!",
	types: {
		email: "${label} is not a valid email!",
		number: "${label} is not a valid number!",
	},
};

function UpdateInfoForm(props: Props) {
	const { user, setShowUpdateInfo } = props;
	const [updateInfo, result] = useUpdateInfoMutation();
	const [gender, setGender] = useState(true);
	const onFinish = (values: any) => {
		const { user: dataUpdate } = values;
		dataUpdate.birthday = moment(dataUpdate.birthday).format("DD-MM-YYYY");
		updateInfo({ dataUpdate, userId: user.id });
	};

	const onChangeGender = (e: RadioChangeEvent) => {
		setGender(e.target.value);
	};

	useEffect(() => {
		if (!result.isLoading && result.data) {
			setShowUpdateInfo(false);
		}
	}, [result.isLoading]);
	return (
		<>
			<Form
				{...layout}
				name='nest-messages'
				onFinish={onFinish}
				validateMessages={validateMessages}
			>
				<Form.Item
					name={["user", "name"]}
					label='Name'
					rules={[{ required: true }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					name={["user", "email"]}
					label='Email'
					rules={[{ type: "email", required: true }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					name={["user", "phone"]}
					label='Phone'
					rules={[{ type: "number", required: true }]}
				>
					<InputNumber />
				</Form.Item>
				<Form.Item
					name={["user", "birthday"]}
					label='Birthday'
					rules={[{ type: "date", required: true }]}
				>
					<DatePicker format='DD-MM-YYYY' />
				</Form.Item>
				<Form.Item name={["user", "gender"]} label='Gender'>
					<Radio.Group onChange={onChangeGender} value={gender}>
						<Radio value={true}>Nam</Radio>
						<Radio value={false}>Nữ</Radio>
					</Radio.Group>
				</Form.Item>
				<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
					{result.isLoading ? (
						<Button
							type='primary'
							htmlType='submit'
							loading={true}
							style={{ width: "100px" }}
						/>
					) : (
						<>
							<Button
								htmlType='button'
								danger
								style={{ width: "100px", marginRight: 100 }}
								onClick={() => setShowUpdateInfo(false)}
							>
								Hủy
							</Button>
							<Button
								type='primary'
								htmlType='submit'
								style={{ width: "100px" }}
							>
								Submit
							</Button>
						</>
					)}
				</Form.Item>
			</Form>
		</>
	);
}

export default UpdateInfoForm;
