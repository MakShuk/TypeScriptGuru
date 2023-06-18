interface IFormDate {
	email: string;
	title: string;
	text: string;
	checkbox: boolean;
}

const formData: IFormDate = {
	email: '',
	title: '',
	text: '',
	checkbox: false,
};

const emailForm = document.getElementById('emailForm') as HTMLFormElement;
const titleForm = document.getElementById('titleForm') as HTMLFormElement;

emailForm.addEventListener('submit', (event) => {
	event.preventDefault();
	formData.email = emailForm.email.value;
	console.log(formData);
	validateFormData(formData) ? checkFormData(formData) : null;
});

titleForm.addEventListener('submit', (event) => {
	event.preventDefault();
	formData.checkbox = titleForm.checkbox.checked;
	formData.text = titleForm.text.value;
	formData.title = titleForm.titleInput.value;
	//formData.title = titleForm.title.value;
	//formData.title = titleForm.title.value;
	console.log(formData);
	validateFormData(formData) ? checkFormData(formData) : null;
});

function isNotEmptyString(value: unknown): value is string {
	return typeof value === 'string' && value.trim().length > 0;
}

function validateFormData({ email, title, text, checkbox }: IFormDate): boolean {
	if (checkbox && isNotEmptyString(email) && isNotEmptyString(title) && isNotEmptyString(text)) {
		console.log('OK');
		return true;
	} else {
		console.log('Please, complete all fields');
		return false;
	}
}

function checkFormData(data: IFormDate): void {
	const { email } = data;
	const emails = ['example@gmail.com', 'example@ex.com', 'admin@gmail.com'];
	if (emails.includes(email)) {
		console.log('This email is already exist');
	} else {
		console.log('Posting data...');
	}
}
