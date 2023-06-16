// Request
//type Animal = 'cat' | 'dog' | 'bird';
enum Animal {
	CAT = 'cat',
	DOG = 'dog',
	BIRD = 'bird',
}

interface IRequest {
	animal: Animal;
	breed: string;
	sterilized?: string;
}

interface IAvailableData {
	animal: Animal;
	breed: string;
	sterilized?: string;
	location: string;
	age?: number;
}

interface IAvailable {
	status: 'available';
	data: IAvailableData;
}

interface INotAvailable {
	status: 'not available';
	data: {
		message: string;
		nextUpdateIn: Date;
	};
}

type IResponse = IAvailable | INotAvailable;
// Response #2

// {
//     status: 'not available',
//     data: {
//         message: string,
//         nextUpdateIn: Date
//     }
// }

function isAvailableData(response: IAvailable | INotAvailable): response is IAvailable {
	return (response as IAvailable).data.animal !== undefined;
}

/* function isCar(car: Car | Ship): car is Car {
	return (car as Car).wheels.number !== undefined;
}  */

function checkAnimalData(animal: IResponse): string | IAvailableData {
	if (isAvailableData(animal)) {
		return animal.data;
	} else {
		return `${animal.data}, you can try in ${animal.data.nextUpdateIn}`;
	}
}
