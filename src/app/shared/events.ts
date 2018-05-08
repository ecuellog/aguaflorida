import * as constants from './constants';

class Event {
	title: string;
	descriptionShort: string; //116 characters max
	descriptionFull: string;
	date: Date;
	place: string;
	imgUrl: string;
	recurring: string; //null, weekly
	recurringFor: number; 

	constructor(title: string, descriptionShort: string, descriptionFull: string, date: Date, place: string, imgUrl: string, recurring: string, recurringFor: number){
		this.title = title;
		this.descriptionShort = descriptionShort;
		this.descriptionFull = descriptionFull;
		this.date = date;
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
		return month + ' ' + this.date.getDate() + ' ,' + this.date.getFullYear();
	}
}

var allEvents = [];

allEvents.push(
	new Event(
		'Partida de Domino',
  	'Juega domino con otro par de viejitos. Juega domino con otro par de viejitos. Juega domino con otro par de viejitos.',
  	'Juega domino con otro par de viejitos. Juega domino con otro par de viejitos. Juega domino con otro par de viejitos.',
  	new Date(2018, 4, 15),
  	'500 Tuscany Terrace NW',
  	'/assets/images/domino.jpg',
  	null,
  	null
	)
);

allEvents.push(
	new Event(
		'Noche de Bingo',
  	'Juega domino con otro par de viejitos. Juega domino con otro par de viejitos. Juega domino con otro par de viejitos.',
  	'Juega domino con otro par de viejitos. Juega domino con otro par de viejitos. Juega domino con otro par de viejitos.',
  	new Date(2018, 4, 20),
  	'500 Rocky Rd NW',
  	'/assets/images/bingo.jpg',
  	null,
  	null
	)
);

allEvents.push(
	new Event(
		'Bingo en Junio',
  	'Juega domino con otro par de viejitos. Juega domino con otro par de viejitos. Juega domino con otro par de viejitos.',
  	'Juega domino con otro par de viejitos. Juega domino con otro par de viejitos. Juega domino con otro par de viejitos.',
  	new Date(2018, 5, 2),
  	'500 Rocky Rd NW',
  	'/assets/images/bingo.jpg',
  	null,
  	null
	)
);

export {allEvents};