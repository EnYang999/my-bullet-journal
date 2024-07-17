// src/components/PatientProfile.tsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Card, Avatar } from "@mui/material";
import { useUser } from "./UserContext";

interface PatientProfileProps {
	avatarUrl: string;
	age: number;
	weight: number;
	height: number;
	historyOfSurgeries: string;
	allergies: string;
}

const PatientProfile: React.FC<PatientProfileProps> = ({
	avatarUrl,
	age,
	weight,
	height,
	historyOfSurgeries,
	allergies,
}) => {
	const { name } = useUser();
	const { t } = useTranslation();
	return (
		<Container>
			<Row className='mb-3'>
				<Col>
					<h2>{t("patient_profile")}</h2>
				</Col>
			</Row>
			<Card variant='outlined' className='p-3'>
				<Row className='mb-3'>
					<Col className='d-flex align-items-center'>
						<Avatar
							alt={name}
							src={avatarUrl}
							sx={{ width: 56, height: 56, marginRight: "1rem" }}
						/>
						<strong>{t("name")}: </strong> {name}
					</Col>
				</Row>
				<Row className='mb-3'>
					<Col>
						<strong>{t("age")}: </strong> {age}
					</Col>
				</Row>
				<Row className='mb-3'>
					<Col>
						<strong>{t("weight")}: </strong> {weight}
					</Col>
				</Row>
				<Row className='mb-3'>
					<Col>
						<strong>{t("height")}: </strong> {height}
					</Col>
				</Row>
				<Row className='mb-3'>
					<Col>
						<strong>{t("history_surgery")}: </strong> {historyOfSurgeries}
					</Col>
				</Row>
				<Row className='mb-3'>
					<Col>
						<strong>{t("hallergies")}: </strong> {allergies}
					</Col>
				</Row>
			</Card>
		</Container>
	);
};

export default PatientProfile;
