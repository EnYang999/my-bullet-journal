import { Box, Button, Grid, Typography, IconButton } from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

const languages = [
	{ code: "ar", name: "Arabic" },
	{ code: "en", name: "English" },
	{ code: "fr", name: "French" },
	{ code: "de", name: "Deutsch" },
	{ code: "zh", name: "Chinese" },
	{ code: "fa", name: "Persian" },
];

const LanguageSelector = () => {
	const { t } = useTranslation();

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng);
	};

	return (
		<Box
			display='flex'
			flexDirection='column'
			alignItems='center'
			justifyContent='center'
			height='100vh'
			bgcolor='#f5f5f5'
			padding={4}
		>
			<Box
				display='flex'
				flexDirection='column'
				alignItems='center'
				justifyContent='center'
				bgcolor='#ffffff'
				boxShadow={3}
				borderRadius={4}
				padding={4}
			>
				<IconButton color='primary' size='large'>
					<TranslateIcon fontSize='large' />
				</IconButton>
				<Typography variant='h5' gutterBottom>
					{t("Select Language")}
				</Typography>
				<Grid container spacing={2} justifyContent='center'>
					{languages.map((language) => (
						<Grid item key={language.code}>
							<Button
								variant='contained'
								color='primary'
								onClick={() => changeLanguage(language.code)}
								style={{ minWidth: "120px" }}
							>
								{language.name}
							</Button>
						</Grid>
					))}
				</Grid>
			</Box>
		</Box>
	);
};

export default LanguageSelector;
