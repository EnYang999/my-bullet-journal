import React, { useState, useRef, useEffect } from "react";
import { Dialog } from "primereact/dialog";
import { Button, Avatar } from "@mui/material";
import { useDropzone } from "react-dropzone";
import AvatarEditor from "react-avatar-editor";
import { Toast } from "primereact/toast";
import Cookies from "universal-cookie";
import axios from "axios";
import { toast } from "../errortoast/ErrorToastManager";
import {
	API_ENDPOINT,
	APP_PROFILE_API,
	APP_AUTHENTICATE_TOKEN_NAME,
	APP_PROFILE_PUT,
	APP_PROFILE_GET_BY_OWN,
} from "../../../../common/constants";

const MyAvatar: React.FC = () => {
	// const [image, setImage] = useState<File | null>(null);
	const [imagePreviewUrl, setImagePreviewUrl] = useState<string>("");
	const [displayBasic, setDisplayBasic] = useState<boolean>(false);
	const editorRef = useRef<AvatarEditor>(null);
	const toastRef = useRef<Toast>(null);
	const cookies = new Cookies();
	const bearToken = cookies.get(APP_AUTHENTICATE_TOKEN_NAME);

	const handleDrop = (acceptedFiles: File[]) => {
		const file = acceptedFiles[0];
		// setImage(file);
		const reader = new FileReader();
		reader.onloadend = () => {
			setImagePreviewUrl(reader.result as string);
			setDisplayBasic(true);
		};
		reader.readAsDataURL(file);
	};

	const { getRootProps, getInputProps } = useDropzone({
		onDrop: handleDrop,
		maxFiles: 1,
		accept: {
			"image/*": [],
		},
	});

	const handleUpload = async () => {
		if (editorRef.current) {
			const canvas = editorRef.current.getImage();
			const dataUrl = canvas.toDataURL();

			try {
				await axios.put(
					`${API_ENDPOINT}${APP_PROFILE_API}${APP_PROFILE_PUT}`,
					{ avatar: dataUrl },
					{
						headers: {
							Authorization: `Bearer ${bearToken}`,
						},
					}
				);
				setImagePreviewUrl(dataUrl);
				setDisplayBasic(false);

				toastRef.current?.show({
					severity: "success",
					summary: "Success",
					detail: "Profile image updated successfully!",
				});
			} catch (error: any) {
				if (error.response) {
					toast.show({
						title: "Error",
						content: error.response.data.error,
						duration: 3000,
					});
				}
			}
		}
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`${API_ENDPOINT}${APP_PROFILE_API}${APP_PROFILE_GET_BY_OWN}`,
					{
						headers: { Authorization: `Bearer ${bearToken}` },
					}
				);
				if (response?.data) {
					setImagePreviewUrl(response.data.profile["avatar"]);
					console.log(response.data.profile);
				}
			} catch (error: any) {
				if (error.response) {
					toast.show({
						title: "Error",
						content: error.response.data.error,
						duration: 3000,
					});
				}
			}
		};

		fetchData();
	}, [bearToken]);

	return (
		<div className='profile_img text-center p-4'>
			<Toast ref={toastRef} />
			<div className='d-flex flex-column justify-content-center align-items-center'>
				<div {...getRootProps()} style={{ width: "100%", height: "100%" }}>
					<input {...getInputProps()} />
					<Avatar
						src={imagePreviewUrl}
						className='avatar-img rounded-circle border border-white border-3'
						alt='Profile'
						onClick={() => setDisplayBasic(true)}
						sx={{ width: 106, height: 106 }}
					/>
				</div>
			</div>
			<Dialog
				visible={displayBasic}
				// style={{ width: "50vw" }}
				onHide={() => setDisplayBasic(false)}
				footer={
					<div>
						<Button
							className='p-button p-component p-button-primary'
							onClick={handleUpload}
						>
							Save
						</Button>
					</div>
				}
			>
				<AvatarEditor
					ref={editorRef}
					image={imagePreviewUrl}
					width={250}
					height={250}
					border={50}
					borderRadius={125}
					color={[255, 255, 255, 0.8]}
					scale={1.1}
					rotate={0}
				/>
			</Dialog>
		</div>
	);
};

export default MyAvatar;
