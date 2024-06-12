import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css"; // Importing Bootstrap

const PermissionDeniedPage: React.FC = () => {
	return (
		<Container
			maxWidth='sm'
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				minHeight: "100vh",
				textAlign: "center",
			}}
		>
			<Box
				sx={{
					bgcolor: "background.paper",
					boxShadow: 1,
					borderRadius: 2,
					p: 2,
					minWidth: 300,
				}}
			>
				<Typography variant='h4' gutterBottom style={{ color: "#d32f2f" }}>
					Access Denied
				</Typography>
				<Typography variant='body1' gutterBottom>
					You don't have permission for this page, please log in.
				</Typography>
				<Button
					variant='contained'
					color='primary'
					href='/login'
					className='mt-4'
				>
					Log In
				</Button>
			</Box>
		</Container>
	);
};

export default PermissionDeniedPage;
