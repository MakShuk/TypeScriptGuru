// Перечисление с названием TypesOfMedia, которое включает строчные типы video, audio

enum TypesMedia {
	VIDEO,
	AUDIO,
}

type FormatsOfMedia = '.mp4' | '.mov' | '.mkv' | '.flv' | '.webM';

interface IMedia {
	name: string;
	type: TypesMedia;
	format: FormatsOfMedia;
	subtitles?: string;
	marks?: unknown;
}

function checkIfArrayOfStrings(arr: any): arr is string[] {
	if (!Array.isArray(arr)) {
		return false;
	}
	return arr.every((item) => typeof item === 'string');
}

function playMedia(
	{ name, type, format, subtitles, marks }: IMedia = {
		name: 'example',
		type: TypesMedia.VIDEO,
		format: '.webM',
	},
): string {
	let marksLog;
	if (checkIfArrayOfStrings(marks)) {
		for (const el of marks) {
			marksLog = '';
			marksLog += `${el}`;
		}
	}
	if (typeof marks === 'string') {
		marksLog = `${marks}`;
	}
	marksLog = `Unsupported type of marks`;

	console.log(`Media ${name}${format} is ${type}
    Marks: ${marksLog}
    Subtitles: ${subtitles ?? 'none'}`);
	return 'Media started';
}

playMedia({
	name: 'WoW',
	format: '.mov',
	type: TypesMedia.VIDEO,
	subtitles: 'hmhmhm hmhmhm doh',
	marks: ['4:30', '5:40'],
});

const arr: any = ['one', 'two', 3];
if (Array.isArray(arr)) {
	console.log('This is an array of strings');
} else {
	console.log('This is not an array of strings');
}
