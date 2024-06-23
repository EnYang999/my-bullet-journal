import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-color: #f7f7f7;
`;

const TextWrapper = styled.div`
	font-size: 2rem;
	color: #333;
`;

const Line = styled.div`
	display: flex;
`;

const Letter = styled(motion.span)`
	display: inline-block;
	margin: 0 2px;
`;

const WelcomePage: React.FC = () => {
	const welcomeText = "Welcome to LondonHealth, Emma";
	const helpText = "How can I help you today?";

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: (i = 1) => ({
			opacity: 1,
			transition: {
				staggerChildren: 0.04,
				delayChildren: 0.04 * i,
			},
		}),
	};

	const letterVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<StyledContainer>
			<TextWrapper>
				<Line
					as={motion.div}
					variants={containerVariants}
					initial='hidden'
					animate='visible'
				>
					{welcomeText.split("").map((char, index) => (
						<Letter key={index} variants={letterVariants}>
							{char}
						</Letter>
					))}
				</Line>
				<Line
					as={motion.div}
					variants={containerVariants}
					initial='hidden'
					animate='visible'
					custom={2} // Delay for the second line
				>
					{helpText.split("").map((char, index) => (
						<Letter key={index} variants={letterVariants}>
							{char}
						</Letter>
					))}
				</Line>
			</TextWrapper>
		</StyledContainer>
	);
};

export default WelcomePage;
