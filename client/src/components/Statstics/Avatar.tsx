import React, { useState, ChangeEvent, useRef, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Dialog } from "primereact/dialog";
import Dropzone from "react-dropzone";
import defaultAvatar from "../../assets/landing/9.jpg";
import AvatarEditor from "react-avatar-editor";
import { Toast } from "primereact/toast";
import Cookies from "universal-cookie";
import axios from "axios";
import { toast } from "../errortoast/ErrorToastManager";
import {
	API_ENDPOINT,
	APP_BACKEND_PORT,
	APP_PROFILE_API,
	APP_AUTHENTICATE_TOKEN_NAME,
	APP_PROFILE_PUT,
	APP_PROFILE_GET_BY_OWN,
} from "../../../../common/constants";
// Functional Component
const Avatar: React.FC = () => {
	const [image, setImage] = useState<File | null>(null);
	const [imagePreviewUrl, setImagePreviewUrl] = useState<string>(defaultAvatar);
	const [displayBasic, setDisplayBasic] = useState<boolean>(false);
	const editorRef = useRef<AvatarEditor>(null);
	const toastRef = useRef<Toast>(null);
	const cookies = new Cookies();
	const bearToken = cookies.get(APP_AUTHENTICATE_TOKEN_NAME);
	// Handle File Change
	const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
		const file = e.target.files ? e.target.files[0] : null;
		if (file && file.type.substring(0, 5) === "image") {
			setImage(file);
			const reader = new FileReader();
			reader.onloadend = () => {
				setImagePreviewUrl(reader.result as string);
				setDisplayBasic(true);
			};
			reader.readAsDataURL(file);
		} else {
			setImage(null);
			setImagePreviewUrl("");
		}
	};

	// Handle Upload
	const handleUpload = async () => {
		if (editorRef.current) {
			const canvas = editorRef.current.getImage();

			const dataUrl = canvas.toDataURL();
			console.log("Cropped Image Data URL:", dataUrl);
			try {
				const res = await axios.put(
					`${API_ENDPOINT}${APP_BACKEND_PORT}${APP_PROFILE_API}${APP_PROFILE_PUT}`,
					{
						avatar: imagePreviewUrl,
					},
					{
						headers: {
							Authorization: `Bearer ${bearToken}`,
						},
					}
				);
				console.log(res);
			} catch (error: any) {
				console.log("Error from client:", error);
				if (error.response) {
					toast.show({
						title: "Error",
						content: error.response.data.error,
						duration: 3000,
					});
				}
			}
			setImagePreviewUrl(dataUrl);
			setDisplayBasic(false);
			toastRef.current?.show({
				severity: "success",
				summary: "Success",
				detail: "Profile image updated successfully!",
			});
		}
	};
	const handleAvatarPost = async (e: React.KeyboardEvent<HTMLInputElement>) => {
		e.preventDefault();
		if (e.key === "Enter") {
			try {
				const res = await axios.put(
					`${API_ENDPOINT}${APP_BACKEND_PORT}${APP_PROFILE_API}${APP_PROFILE_PUT}`,
					{
						avatar: imagePreviewUrl,
					},
					{
						headers: {
							Authorization: `Bearer ${bearToken}`,
						},
					}
				);
				console.log(res);
			} catch (error: any) {
				console.log("Error from client:", error);
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
					`${API_ENDPOINT}${APP_BACKEND_PORT}${APP_PROFILE_API}${APP_PROFILE_GET_BY_OWN}`,
					{
						headers: { Authorization: `Bearer ${bearToken}` },
					}
				);
				if (response?.data) {
					setImage(response.data.profile["avatar"]);
				}
			} catch (error: any) {
				console.error("Error fetching data:", error);
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
	}, []);
	return (
		<div className='profile_img text-center p-4'>
			<Toast ref={toastRef} />
			{/* {imagePreviewUrl && ( */}
			<div className='d-flex flex-column justify-content-center align-items-center'>
				<img
					// style={{
					// 	width: "200px",
					// 	height: "200px",
					// 	borderRadius: "50%",
					// 	objectFit: "cover",
					// 	border: "4px solid green",
					// }}
					src={imagePreviewUrl}
					className='avatar-img rounded-circle border border-white border-3'
					alt='Profile'
					onClick={() => setDisplayBasic(true)}
				/>
			</div>
			{/* )} */}
			<Dialog
				header={
					<p className='text-2xl font-semibold textColor'>Update Profile</p>
				}
				visible={displayBasic}
				style={{ width: "50vw" }}
				onHide={() => setDisplayBasic(false)}
				footer={
					<div>
						<button
							className='p-button p-component p-button-primary'
							onClick={handleUpload}
						>
							Save
						</button>
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
					color={[255, 255, 255, 0.6]} // RGBA
					scale={1.2}
					rotate={0}
				/>
			</Dialog>
			<InputText type='file' accept='image/*' onChange={handleFileChange} />
			{/* {image && <p>{image.name}</p>} */}
		</div>
	);
};

export default Avatar;
