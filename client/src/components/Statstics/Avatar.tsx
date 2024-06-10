import React, { useState, ChangeEvent, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { Dialog } from "primereact/dialog";
import AvatarEditor from "react-avatar-editor";
import { Toast } from "primereact/toast";
import Avatar from "@mui/material/Avatar";
// Functional Component
const AvatarComponent: React.FC = () => {
	const [image, setImage] = useState<File | null>(null);
	const [imagePreviewUrl, setImagePreviewUrl] = useState<string>("");
	const [displayBasic, setDisplayBasic] = useState<boolean>(false);
	const editorRef = useRef<AvatarEditor>(null);
	const toastRef = useRef<Toast>(null);

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
	const handleUpload = () => {
		if (editorRef.current) {
			const canvas = editorRef.current.getImage();
			const dataUrl = canvas.toDataURL();
			console.log("Cropped Image Data URL:", dataUrl);
			setImagePreviewUrl(dataUrl);
			setDisplayBasic(false);

			toastRef.current?.show({
				severity: "success",
				summary: "Success",
				detail: "Profile image updated successfully!",
			});
		}
	};

	return (
		<div className='profile_img text-center p-4'>
			<Toast ref={toastRef} />
			{imagePreviewUrl && (
				<div className='d-flex flex-column justify-content-center align-items-center'>
					<Avatar
						style={{
							width: "200px",
							height: "200px",
							borderRadius: "50%",
							objectFit: "cover",
							border: "4px solid green",
						}}
						src={imagePreviewUrl}
						alt='Profile'
						onClick={() => setDisplayBasic(true)}
					/>
				</div>
			)}
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
					color={[255, 255, 255, 0.6]} // RGBA
					scale={1.2}
					rotate={0}
				/>
			</Dialog>
			<InputText type='file' accept='image/*' onChange={handleFileChange} />
			{image && <p>{image.name}</p>}
		</div>
	);
};

export default AvatarComponent;
