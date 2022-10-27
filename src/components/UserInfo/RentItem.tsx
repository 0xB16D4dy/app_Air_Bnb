import { Col, Row, Typography } from "antd";
import moment from "moment";
import React from "react";

const { Title, Paragraph } = Typography;
type Props = {};

function RentItem({ roomInfo }: { roomInfo: any }) {
	return (
		<>
			<Row style={{ padding: "15px 0" }} className='item-rent'>
				<Col span={8}>
					<div style={{ borderRadius: "8px", overflow: "hidden" }}>
						<img
							src='https://picsum.photos/300/200'
							alt=''
							width={"100%"}
							height='50%'
							style={{ objectFit: "cover" }}
						/>
					</div>
				</Col>
				<Col span={16}>
					<div style={{ padding: "0 10px" }}>
						<Title level={3}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</Title>
						<Paragraph
							ellipsis={{ rows: 2, expandable: false, symbol: "more" }}
						>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
							voluptas rem hic nam, ipsam at placeat ipsum in eos, aliquam
							debitis illo repudiandae eum tempora? Veritatis, fugiat
							consectetur? Optio doloribus esse ratione est maxime corrupti sit
							neque earum quasi molestiae? Omnis, rem fuga. Neque et explicabo
							voluptatum dolor nam aspernatur enim corporis atque distinctio
							fugiat rerum eveniet cupiditate quisquam dignissimos architecto ut
						</Paragraph>
						<div style={{ display: "flex", justifyItems: "center" }}>
							<Paragraph style={{ marginRight: "15px" }}>
								<span style={{ fontWeight: "bold" }}>Ngày đến: </span>
								{moment(roomInfo?.ngayDen).format("DD-MM-YYYY")}
							</Paragraph>
							<Paragraph>
								<span style={{ fontWeight: "bold" }}>Ngày đi: </span>
								{moment(roomInfo?.ngayDi).format("DD-MM-YYYY")}
							</Paragraph>
						</div>
					</div>
				</Col>
			</Row>
		</>
	);
}

export default RentItem;
