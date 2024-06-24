import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const WelcomePage: React.FC = () => {
	const textVariant = {
		hidden: { opacity: 0, y: 20 },
		visible: (custom: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: custom * 0.3,
				duration: 0.8,
			},
		}),
	};

	return (
		<Box
			display='flex'
			flexDirection='column'
			alignItems='center'
			justifyContent='center'
			height='100vh'
			width='100vw'
			style={{ backgroundColor: "#f0f0f0" }}
		>
			<motion.div
				initial='hidden'
				animate='visible'
				custom={0}
				variants={textVariant}
			>
				<Typography variant='h1'>Welcome to Our Service</Typography>
			</motion.div>
			<motion.div
				initial='hidden'
				animate='visible'
				custom={1}
				variants={textVariant}
			>
				<Typography variant='h5'>
					We're here to help guide you through your healthcare journey.
				</Typography>
			</motion.div>
		</Box>
	);
};

export default WelcomePage;
