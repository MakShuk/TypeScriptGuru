interface IForm {
	login: string;
	password: string;
}

interface ILoginForm {
	isValid: boolean;
	errorMsg: string;
}

interface IPassForm {
	isValid: boolean;
}

type Validation<T> = {
	[P in keyof T]: ILoginForm | IPassForm;
};

const validationData: Validation<IForm> = {
	login: { isValid: false, errorMsg: 'At least 3 characters' },
	password: { isValid: true },
};
