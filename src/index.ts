interface Queue<T> {
	enqueue(item: T): void;
	dequeue(): T | undefined;
	peek(): T | undefined | null;
	isEmpty(): boolean;
	length(): number;
}

class ArrayQueue<T> implements Queue<T> {
	private queue: T[];
	constructor() {
		this.queue = [];
	}
	enqueue(item: T): void {
		this.queue.push(item);
	}
	dequeue(): T | undefined {
		if (this.isEmpty()) throw Error('queue is empty');
		return this.queue.shift();
	}
	peek(): T | null | undefined {
		if (this.isEmpty()) throw Error('queue is empty');
		return this.queue[0];
	}
	isEmpty(): boolean {
		return this.queue.length === 0;
	}
	length(): number {
		return this.queue.length;
	}
}

class Stack<T> {
	private stack: T[] = [];
	constructor(private limit: number = Number.MAX_VALUE) {}

	push(value: T): void {
		if (this.limit === this.stack.length) throw Error('stack is empty');
		this.stack.push(value);
	}

	pop(): T | undefined {
		if (this.isEmpty()) throw Error('stack is empty');
		return this.stack.pop();
	}

	length(): number {
		return this.stack.length;
	}

	isEmpty(): boolean {
		return this.stack.length === 0;
	}

	top(): T | null {
		if (this.isEmpty()) return null;
		return this.stack[this.stack.length - 1];
	}
}

const arrTest1 = new ArrayQueue<number>();
arrTest1.enqueue(5);
arrTest1.enqueue(10);
console.log(arrTest1.peek());
console.log(arrTest1.dequeue());
console.log(arrTest1.length());

const arrTest2 = new ArrayQueue<string>();
arrTest2.enqueue('5');
arrTest2.enqueue('10');
console.log(arrTest2.peek());
console.log(arrTest2.dequeue());
console.log(arrTest2.length());

const stackTest1 = new Stack<number>(10);
stackTest1.push(20);
stackTest1.push(50);
console.log(stackTest1.top());
console.log(stackTest1.pop());
console.log(stackTest1.length());

const stackTest2 = new Stack<string>(10);
stackTest2.push('20');
stackTest2.push('50');
console.log(stackTest2.top());
console.log(stackTest2.pop());
console.log(stackTest2.length());
