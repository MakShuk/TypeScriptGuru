type GameTime = { total: number; inMenu: number };

interface PlayerData<T, S extends string | number | GameTime> {
	game: T;
	hours: S;
	server: string;
}

const player1: PlayerData<string, number> = {
	game: 'CS:GO',
	hours: 300,
	server: 'basic',
};

const player2: PlayerData<number, string> = {
	game: 2048,
	hours: '300 h.',
	server: 'arcade',
};

const player3: PlayerData<string, GameTime> = {
	game: 'Chess',
	hours: {
		total: 500,
		inMenu: 50,
	},
	server: 'chess',
};

// Массив данных с фигурами содержит объекты, у каждого из которых обязательно есть свойство name
// Каждый объект может еще содержать дополнительные свойства в случайном виде
// Свойство name может иметь только 4 варианта
// Функция calculateAmountOfFigures должна принимать массив с объектами, у которых обязательно должно быть свойство name
// Возвращает она объект-экземпляр AmountOfFigures
// Внутри себя подсчитывает сколько каких фигур было в массиве и записывает результаты в AmountOfFigures
// С текущими данными в консоль должно попадать:
// { squares: 3, circles: 2, triangles: 2, others: 1 }
type FigureName = 'rect' | 'triangle' | 'line' | 'circle' | 'squares';

interface ShapeData {
	name: FigureName;
	data?: {
		a?: number;
		b?: number;
		c?: number;
		l?: number;
		r?: number;
	};
}

interface IBaseDate {
	a: number;
	b: number;
}

interface IFigureData<T extends IBaseDate> {
	name: FigureName;
	data?: T;
}

interface AmountOfFigures {
	squares: number;
	circles: number;
	triangles: number;
	others: number;
}

function calculateAmountOfFigures(figures: ShapeData[]): AmountOfFigures {
	const result: AmountOfFigures = {
		squares: 0,
		circles: 0,
		triangles: 0,
		others: 0,
	};

	figures.forEach((figure) => {
		switch (figure.name) {
			case 'squares':
				result.squares++;
				break;
			case 'circle':
				result.circles++;
				break;
			case 'triangle':
				result.triangles++;
				break;
			default:
				result.others++;
				break;
		}
	});

	return result;
}

const data: ShapeData[] = [
	{
		name: 'rect',
		data: { a: 5, b: 10 },
	},
	{
		name: 'rect',
		data: { a: 6, b: 11 },
	},
	{
		name: 'triangle',
		data: { a: 5, b: 10, c: 14 },
	},
	{
		name: 'line',
		data: { l: 15 },
	},
	{
		name: 'circle',
		data: { r: 10 },
	},
	{
		name: 'circle',
		data: { r: 5 },
	},
	{
		name: 'rect',
		data: { a: 15, b: 7 },
	},
	{
		name: 'triangle',
	},
];

console.log(calculateAmountOfFigures(data));
