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
	manufacturedAfterDate: Date;
}

function filterPhonesByDate<T extends IMobilePhone[], K extends keyof T[number]>(
	phones: T,
	key: K,
	initial: string,
): IPhonesManufacturedAfterDate[] {
	const filtered = [];
	for (const phone of phones) {
		if (phone.manufactured > new Date(initial)) {
			const obj = {
				company: phone.company,
				number: phone.number,
				size: phone.size,
				companyPartner: phone.companyPartner,
				manufactured: phone.manufactured,
				manufacturedAfterDate: new Date(initial),
			};
			filtered.push(obj);
		}
	}

	return filtered;
}

console.log(filterPhonesByDate(phones, 'company', '2022-01-01'));
