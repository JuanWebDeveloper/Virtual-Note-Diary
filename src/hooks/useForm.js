import { useState } from 'react';

export const useForm = (initialState = {}) => {
	const [formValues, setFormValues] = useState(initialState);

	const reset = () => setFormValues(initialState);

	const handleInputChange = ({ target }) => {
		const nameInputChange = target.name;
		const valueInputChange = target.value;

		setFormValues({
			...formValues,
			[nameInputChange]: valueInputChange,
		});
	};

	return [formValues, handleInputChange, reset];
};
