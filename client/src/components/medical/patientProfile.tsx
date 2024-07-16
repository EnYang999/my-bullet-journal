// src/components/PatientProfile.tsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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
	return (
		<Container>
			<Row className='mb-3'>
				<Col>
					<h2>Patient Profile</h2>
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
						<strong>Name:</strong> {name}
					</Col>
				</Row>
				<Row className='mb-3'>
					<Col>
						<strong>Age:</strong> {age}
					</Col>
				</Row>
				<Row className='mb-3'>
					<Col>
						<strong>Weight (kg):</strong> {weight}
					</Col>
				</Row>
				<Row className='mb-3'>
					<Col>
						<strong>Height (cm):</strong> {height}
					</Col>
				</Row>
				<Row className='mb-3'>
					<Col>
						<strong>History of Surgeries:</strong> {historyOfSurgeries}
					</Col>
				</Row>
				<Row className='mb-3'>
					<Col>
						<strong>Allergies:</strong> {allergies}
					</Col>
				</Row>
			</Card>
		</Container>
	);
};

export default PatientProfile;
