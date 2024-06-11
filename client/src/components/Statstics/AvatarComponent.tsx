import React, { useState, useCallback } from "react";
import Cropper, { Area } from "react-easy-crop";
import { useDropzone } from "react-dropzone";
import { IconButton, Modal, Box, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import getCroppedImg from "../../utils/cropImage";
import defaultAvatar from "../../assets/landing/13.jpg";
const AvatarEditor: React.FC = () => {
	const [avatar, setAvatar] = useState<string | null>(null);
	const [crop, setCrop] = useState({ x: 0, y: 0 });
	const [zoom, setZoom] = useState(1);
	const [croppedArea, setCroppedArea] = useState<Area | null>(null);
	const [file, setFile] = useState<File | null>(null);
	const [isCropModalOpen, setIsCropModalOpen] = useState(false);

	const onCropComplete = useCallback((_: Area, croppedAreaPixels: Area) => {
		setCroppedArea(croppedAreaPixels);
	}, []);

	const handleFileDrop = (acceptedFiles: File[]) => {
		setFile(acceptedFiles[0]);
		setIsCropModalOpen(true);
	};

	const handleSave = useCallback(async () => {
		if (file && croppedArea) {
			const croppedImage = await getCroppedImg(
				URL.createObjectURL(file),
				croppedArea
			);
			setAvatar(croppedImage);
			setIsCropModalOpen(false);
		}
	}, [file, croppedArea]);

	const handleOpenFileExplorer = () => {
		document.getElementById("file-dropzone")?.click();
	};

	const { getRootProps, getInputProps } = useDropzone({
		onDrop: handleFileDrop,
		multiple: false,
		noClick: true,
		noKeyboard: true,
	});

	return (
		<div style={{ position: "relative", width: "150px", height: "150px" }}>
			<img
				src={avatar || defaultAvatar}
				alt='avatar'
				style={{
					width: "100%",
					height: "100%",
					borderRadius: "50%",
					cursor: "pointer",
				}}
				onMouseOver={({ target }) =>
					((target as HTMLImageElement).style.opacity = "0.7")
				}
				onMouseOut={({ target }) =>
					((target as HTMLImageElement).style.opacity = "1")
				}
				onClick={handleOpenFileExplorer}
			/>
			<IconButton
				style={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					backgroundColor: "rgba(0,0,0,0.5)",
					color: "white",
				}}
				onClick={handleOpenFileExplorer}
			>
				<EditIcon />
			</IconButton>
			<div {...getRootProps()} style={{ display: "none" }} id='file-dropzone'>
				<input {...getInputProps()} />
			</div>
			<Modal open={isCropModalOpen} onClose={() => setIsCropModalOpen(false)}>
				<Box
					sx={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						width: 400,
						bgcolor: "background.paper",
						boxShadow: 24,
						p: 4,
					}}
				>
					{file && (
						<>
							<div style={{ position: "relative", height: 300 }}>
								<Cropper
									image={URL.createObjectURL(file)}
									crop={crop}
									zoom={zoom}
									cropSize={{ width: 200, height: 200 }}
									aspect={1}
									onCropChange={setCrop}
									onZoomChange={setZoom}
									onCropComplete={onCropComplete}
								/>
							</div>
							<Button onClick={handleSave}>Save</Button>
						</>
					)}
				</Box>
			</Modal>
		</div>
	);
};

export default AvatarEditor;
