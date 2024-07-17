import { Box, Button, Grid, IconButton } from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

const languages = [
	{ code: "ar", name: "العربية" },
	{ code: "en", name: "English" },
	{ code: "fr", name: "français" },
	{ code: "de", name: "Deutsch" },
	{ code: "zh", name: "中文" },
	{ code: "fa", name: "فارسی" },
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
			height='50vh'
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
				<Grid container spacing={2} justifyContent='center'>
					{languages.map((language) => (
						<Grid item key={language.code}>
							<Button
								variant='contained'
								color='primary'
								onClick={() => changeLanguage(language.code)}
								style={{ minWidth: "120px" }}
							>
								{t(language.name)}
							</Button>
						</Grid>
					))}
				</Grid>
			</Box>
		</Box>
	);
};

export default LanguageSelector;
