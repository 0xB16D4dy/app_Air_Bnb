import React, { useEffect } from "react";
import { useLazyGetHistoryQuery } from "../../redux/userInfo";
import RentItem from "./RentItem";

type Props = {};

function HistoryOfRent({}: Props) {
	const [trigger, { data }] = useLazyGetHistoryQuery();

	useEffect(() => {
		trigger({});
	}, []);
	return (
		<div>
			{data?.map((item: any) => (
				<RentItem roomInfo={item}/>
			))}
		</div>
	);
}

export default HistoryOfRent;
