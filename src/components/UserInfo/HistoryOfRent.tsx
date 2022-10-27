import React, { useEffect } from "react";
import { useLazyGetHistoryQuery } from "../../redux/userInfo";
import RentItem from "./RentItem";
import { Typography } from "antd";

type Props = {
	userId?: string;
};

const { Paragraph } = Typography;

function HistoryOfRent(props: Props) {
	const { userId } = props;
	const [trigger, { data }] = useLazyGetHistoryQuery();

	useEffect(() => {
		trigger({ userId });
	}, []);
	return (
		<div>
			{data && data.length > 0 ? (
				data?.map((item: any) => <RentItem roomInfo={item} />)
			) : (
				<Paragraph>Bạn chưa thuê phòng nào</Paragraph>
			)}
		</div>
	);
}

export default HistoryOfRent;
