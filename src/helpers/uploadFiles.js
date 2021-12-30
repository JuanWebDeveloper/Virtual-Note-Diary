export const uploadFiles = async (file) => {
	const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/dhunq7fbj/image/upload';

	const formData = new FormData();
	formData.append('file', file);
	formData.append('upload_preset', 'virtual-note-diary');
	formData.append('cloud_name', 'dhunq7fbj');

	const headers = {
		'content-type': 'multipart/form-data',
		'Access-Control-Allow-Origin': '*',
	};

	try {
		const response = await fetch(cloudinaryUrl, {
			method: 'POST',
			body: formData,
			header: headers,
		});

		if (response.ok) {
			const cloudinaryResponse = await response.json();
			return cloudinaryResponse.secure_url;
		} else {
			throw await response.json();
		}
	} catch (error) {
		throw error;
	}
};
