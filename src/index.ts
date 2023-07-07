interface IClasses {
	name: string;
	startsAt: string;
	duration: number;
}

interface IWillStartsAt extends Omit<IClasses, 'startsAt'> {
	willStartsAt: string;
}

interface ICurrClients extends Pick<IClasses, 'name'> {
	age: number | string;
	gender: string;
	timeLeft: string;
}

interface IExClients extends Omit<ICurrClients, 'timeLeft'> {
	makeCallFor: Date;
}

type IFutureClients = Pick<IExClients, 'name' | 'makeCallFor'>;

interface IFitnessClubCenter {
	clubName: string;
	location: string;
	classes: IClasses[];
	futureClasses: IWillStartsAt[];
	currClients: ICurrClients[];
	exClients: IExClients[];
	futureClients: IFutureClients[];
}
const fitnessClubCenter: IFitnessClubCenter = {
	clubName: 'Fitness club Center',
	location: 'central ave. 45, 5th floor',
	classes: [
		{
			name: 'yoga',
			startsAt: '8:00 AM',
			duration: 60,
		},
		{
			name: 'trx',
			startsAt: '11:00 AM',
			duration: 45,
		},
		{
			name: 'swimming',
			startsAt: '3:00 PM',
			duration: 70,
		},
	],
	futureClasses: [
		{
			name: 'boxing',
			willStartsAt: '6:00 PM',
			duration: 40,
		},
		{
			name: 'breath training',
			willStartsAt: '8:00 PM',
			duration: 30,
		},
	],
	currClients: [
		{
			name: 'John Smith',
			age: '-',
			gender: 'male',
			timeLeft: '1 month',
		},
		{
			name: 'Alise Smith',
			age: 35,
			gender: 'female',
			timeLeft: '3 month',
		},
		{
			name: 'Ann Sonne',
			age: 24,
			gender: 'female',
			timeLeft: '5 month',
		},
	],
	exClients: [
		{
			name: 'Tom Smooth',
			age: 50,
			gender: 'male',
			makeCallFor: new Date('2023-08-12'),
		},
	],
	futureClients: [
		{
			name: 'Maria',
			makeCallFor: new Date('2023-07-10'),
		},
	],
};
