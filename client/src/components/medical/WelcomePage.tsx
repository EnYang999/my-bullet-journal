import React, { useEffect, useState } from "react";
import {
	Box,
	Typography,
	TextField,
	Button,
	Menu,
	MenuItem,
} from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useUser } from "./UserContext";

const WelcomePage: React.FC = () => {
	const { name, setName } = useUser();
	const { t } = useTranslation();
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const controls = useAnimation();

	const handleLogin = () => {
		setIsLoggedIn(true);
	};

	const handleLogout = () => {
		setIsLoggedIn(false);
		setName("");
		setAnchorEl(null);
	};

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	useEffect(() => {
		if (isLoggedIn) {
			controls.start({
				y: [0, 10, 0],
				transition: {
					repeat: Infinity,
					repeatType: "loop",
					duration: 1,
				},
			});
		}
	}, [isLoggedIn, controls]);

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
				<Typography variant='h1'>{t("welcome")}</Typography>
			</motion.div>
			<motion.div
				initial='hidden'
				animate='visible'
				custom={1}
				variants={textVariant}
			>
				<Typography variant='h5'>{t("sub-welcome")}</Typography>
			</motion.div>
			<motion.div
				initial='hidden'
				animate='visible'
				custom={2}
				variants={textVariant}
			>
				{!isLoggedIn ? (
					<Box mt={4} display='flex' flexDirection='column' alignItems='center'>
						<TextField
							label={t("enter_name")}
							variant='outlined'
							value={name}
							onChange={(e) => setName(e.target.value)}
							margin='normal'
						/>
						<Button
							variant='contained'
							color='primary'
							onClick={handleLogin}
							disabled={!name}
						>
							{t("login")}
						</Button>
					</Box>
				) : (
					<Box mt={4} display='flex' flexDirection='column' alignItems='center'>
						<Typography variant='h5'>
							{t("hello")} {name}
						</Typography>
						<Button
							aria-controls='simple-menu'
							aria-haspopup='true'
							onClick={handleClick}
						>
							{t("menu")}
						</Button>
						<Menu
							id='simple-menu'
							anchorEl={anchorEl}
							keepMounted
							open={Boolean(anchorEl)}
							onClose={handleClose}
						>
							<MenuItem onClick={handleLogout}>{t("logout")}</MenuItem>
						</Menu>
						<motion.div animate={controls} style={{ marginTop: 20 }}>
							<Typography variant='body2'>{t("scroll-down")}</Typography>
							<Typography variant='body2'>⬇️</Typography>
						</motion.div>
					</Box>
				)}
			</motion.div>
		</Box>
	);
};

export default WelcomePage;
