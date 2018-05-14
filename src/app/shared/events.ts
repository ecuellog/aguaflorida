import * as constants from './constants';

class Event {
	title: string;
	descriptionShort: string; //116 characters max
	descriptionFull: string;
	date: Date;
	time: string;
	place: string;
	imgUrl: string;
	recurring: string; //null, weekly
	recurringFor: number; 

	constructor(title: string, descriptionShort: string, descriptionFull: string, date: Date, time: string, place: string, imgUrl: string, recurring: string, recurringFor: number){
		this.title = title;
		this.descriptionShort = descriptionShort;
		this.descriptionFull = descriptionFull;
		this.date = date;
		this.time = time;
		this.place = place;
		this.imgUrl = imgUrl;
		this.recurring = recurring;
		this.recurringFor = recurringFor;
	}

	getDateString(){
		if(this.recurring){
			let weekday = constants.dayNames[this.date.getDay()];
			return 'Todos los ' + weekday;
		}

		let month = constants.monthNames[this.date.getMonth()];
		return this.date.getDate() + ' de ' + month + ', ' + this.date.getFullYear();
	}
}

var allEvents = [];

allEvents.push(
	new Event(
		'Programa de computación',
  	'Talleres para aprender a utilizar la computadora, un programa de 12 semanas empezando el 30 de mayo.',
  	'Empieza el 30 de mayo todos los miercoles de 11am a 12:30pm en Immigration Services Calgary. Es un programa de 12 semanas y contamos con solo 14 cupos. Por favor confirmar participación al (403)669-3570 o al (403)483-1567. Programa dirigido por Gissela Vega.',
  	new Date(2018, 4, 30),
  	'11:00am',
  	'Immigration Services Calgary',
  	'/assets/images/computers.jpg',
  	'weekly',
  	12
	)
);

export {allEvents};