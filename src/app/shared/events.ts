import * as constants from './constants';

class Event {
	id: number;
	title: string;
	descriptionShort: string; //116 characters max
	descriptionFull: string;
	date: Date;
	time: string;
	place: string;
	imgUrl: string;
	recurring: string; //null, weekly, monthly, daily
	recurringFor: number; 

	constructor(id: number, title: string, descriptionShort: string, descriptionFull: string, date: Date, time: string, place: string, imgUrl: string, recurring: string, recurringFor: number){
		this.id = id;
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
		1,
		'Programa de computación',
  	'Talleres para aprender a utilizar la computadora, un programa de 12 semanas empezando el 30 de mayo.',
  	'Empieza el 30 de mayo todos los miercoles de 11am a 12:30pm en Immigration Services Calgary. Es un programa de 12 semanas y contamos con solo 14 cupos. Por favor confirmar participación al (403)669-3570 o al (403)483-1567. Programa dirigido por Gissela Vega.',
  	new Date(2018, 4, 30),
  	'11:00am - 12:30pm',
  	'Immigration Services Calgary, 910 7 Ave SW #1200, Calgary, AB, T2P3N8',
  	'/assets/images/computers.jpg',
  	'weekly',
  	12
	)
);

allEvents.push(
	new Event(
		2,
		'Cocinar con Amigos',
  	'Todos los jueves desde el 12 de Julio hasta el 30 de Agosto. Los interesados seran agregados a un grupo de Whatsapp donde cada Lunes se pondran de acuerdo para decidir la siguente receta.',
  	'La receta decidida el Lunes por el grupo de Whatsapp se preparara el dia Jueves de esa semana. La voluntaria se encargara de comprar los ingredientes de la receta y de acuerdo a la cantidad de personas confirmadas. La voluntaria enviara foto del recibo a los participantes por el grupo de Whatsapp para que abonen su parte el dia Jueves (calculamos entre $5 a $10 por persona). La reunion es a las 10am, los Jueves para cocinar, almorzar y organizar la cocina. Contacta a Maria Isabel al (403)669-3570 o envianos un mensaje haciendo click en "Contactanos".',
  	new Date(2018, 6, 12),
  	'10:00am - 1:00pm',
  	'Westview Baptist Church - 1313 Ranchlands Way NW, Calgary, AB, T3G2A1',
  	'/assets/images/comida.jpg',
  	'weekly',
  	8
	)
);

export {allEvents};