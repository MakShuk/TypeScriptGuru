enum TransferStatus {
	Pending = 'pending',
	Rejected = 'rejected',
	Completed = 'completed',
}

enum ErrorMessages {
	NotFound = 'Not found: 404',
	NotEnoughSpace = 'Not enough space: 507',
	Forbidden = 'Forbidden: 403',
}

interface ITransfer {
	path: string;
	data: string[];
	date?: Date;
	start: (p: string, d: string[]) => string;
	stop: (reason: string) => string;
}

interface TransferError {
	message: ErrorMessages;
}

// Класс должен имплементировать ITransfer и TransferError
class SingleFileTransfer implements ITransfer, TransferError {
	message: ErrorMessages;
	path: string;
	data: string[];
	date?: Date | undefined;
	status: TransferStatus;
	constructor() {
		this.status = TransferStatus.Pending;
	}

	start(p: string, d: string[]): string {
		this.status = TransferStatus.Pending;
		return `p: ${p} d: ${d.join(' ')}`;
	}
	stop(reason: string): string {
		this.status = TransferStatus.Completed;
		return `${new Date()}: Transfer: ${this.status}, reason: ${reason};`;
	}

	checkTransferStatus(): string {
		return this.status;
	}

	getError(): string {
		return `Transfer status:${this.status}, error ${ErrorMessages.Forbidden}`;
	}

	// Необходимо создать метод, который будет останавливать передачу данных
	// И возвращать строку с причиной и датой остановки (Дата в любом формате)
	// Необходимо создать метод, который будет возвращать строку, содержащую
	// Статус передачи и любое сообщение об ошибке. На ваш выбор или отталкиваться от приходящего аргумента
	// Метод может показаться странным, но может использоваться для тестов, например
}

const res = new SingleFileTransfer();
console.log(res.checkTransferStatus());
console.log(res.stop('not data'));
