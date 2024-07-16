import { useState, FC } from "react";
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Button,
	List,
	ListItem,
	ListItemText,
	IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
interface Book {
	id: string;
	selfLink: string;
	volumeInfo: {
		authors: string[];
		categories: string[];
		title: string;
		description: string;
		imageLinks: { smallThumbnail: string; thumbnail: string };
		saleInfo: {
			retailPrice: {
				amount: number;
				currencyCode: string;
			};
		};
	};
}

interface SearchResultsPageProps {
	results: Book[];
}
const SearchResultsPage: FC<SearchResultsPageProps> = ({ results }) => {
	const [open, setOpen] = useState(true);
	const handleClose = () => {
		setOpen(false);
	};
	return (
		<Dialog open={open} onClose={handleClose} fullWidth maxWidth='sm'>
			<DialogTitle>
				Search Results
				<IconButton
					aria-label='close'
					onClick={handleClose}
					sx={{ position: "absolute", right: 8, top: 8 }}
				>
					<CloseIcon />
				</IconButton>
			</DialogTitle>
			<DialogContent dividers>
				{results.length > 0 ? (
					<List>
						{results.map((todo, index) => (
							<ListItem key={index}>
								<ListItemText
									primary={"description"}
									secondary={`Due Date: ${"sssss"}`}
								/>
							</ListItem>
						))}
					</List>
				) : (
					<p>No results found.</p>
				)}
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} color='primary'>
					Close
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default SearchResultsPage;
