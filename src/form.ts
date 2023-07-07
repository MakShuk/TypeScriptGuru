interface IForm {
	login: ILoginForm;
	password: ILoginForm;
}

interface ILoginForm {
	isValid: boolean;
	errorMsg?: string;
}

interface ILoginForm {
	isValid: boolean;
	errorMsg?: string;
}

const validationData: IForm = {
	login: { isValid: false, errorMsg: 'At least 3 characters' },
	password: { isValid: true },
};
