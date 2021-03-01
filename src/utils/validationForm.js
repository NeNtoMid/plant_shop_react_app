const validationForm = {
	name: {
		type: 'text',
		name: 'name',
		placeholder: 'Your name',
		iconClasses: 'fas fa-user',
		validation: {
			required: { value: true, message: 'Name is mandatory' },
			minLength: { value: 3, message: 'Name is too short' },
			maxLength: { value: 126, message: 'Name is too long' },
			setValueAs: (value) => value.trim(),
		},
	},

	email: {
		type: 'email',
		name: 'email',
		placeholder: 'Your email',
		iconClasses: 'fas fa-envelope',
		validation: {
			required: { value: true, message: 'Email is mandatory' },
			minLength: { value: 3, message: 'Email is too short' },
			pattern: {
				// eslint-disable-next-line
				value: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
				message: 'Email is not proper',
			},
			setValueAs: (value) => value.trim(),
		},
	},

	pass: {
		type: 'password',
		name: 'pass',
		placeholder: 'Password',
		iconClasses: 'fas fa-lock',
		validation: {
			required: { value: true, message: 'Password is mandatory' },
			minLength: { value: 6, message: 'Password is too short' },
			maxLength: { value: 126, message: 'Password is too long' },
			setValueAs: (value) => value.trim(),
		},
	},

	re_pass: {
		type: 'password',
		name: 're_pass',
		placeholder: 'Repeat your password',
		iconClasses: 'fas fa-unlock',
		validation: {
			required: { value: true, message: 'Repeated password is mandatory' },
			minLength: { value: 6, message: 'Repeated password is too short' },
			maxLength: { value: 126, message: 'Repeated password is too long' },
			setValueAs: (value) => value.trim(),
		},
	},
};

export default validationForm;
