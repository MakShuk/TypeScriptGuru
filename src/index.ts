interface IPhone {
	company: string;
	number: number;
}

type PhoneCompanyType = IPhone['company'];

interface IMobilePhone extends IPhone {
	size: string;
	companyPartner: PhoneCompanyType;
	manufactured: Date;
}

const phones: IMobilePhone[] = [
	{
		company: 'Nokia',
		number: 1285637,
		size: '5.5',
		companyPartner: 'MobileNokia',
		manufactured: new Date('2022-09-01'),
	},
	{
		company: 'Samsung',
		number: 4356637,
		size: '5.0',
		companyPartner: 'SamMobile',
		manufactured: new Date('2021-11-05'),
	},
	{
		company: 'Apple',
		number: 4552833,
		size: '5.7',
		companyPartner: 'no data',
		manufactured: new Date('2022-05-24T12:00:00'),
	},
];

interface IPhonesManufacturedAfterDate extends IMobilePhone {
	manufacturedAfterDate: string;
}

function filterPhonesByDate<T extends IMobilePhone>(
	phones: T[],
	key: keyof T,
	initial: string,
): IPhonesManufacturedAfterDate[] {
	return phones
		.filter((phone) => {
			const manufactured = phone[key];

			if (manufactured instanceof Date && manufactured.getTime() > new Date(initial).getTime()) {
				return phone;
			}
		})
		.map((phone) => {
			const newObj = { ...phone, manufacturedAfterDate: initial };
			return newObj;
		});
}

console.log(filterPhonesByDate(phones, 'manufactured', '2022-01-01'));
