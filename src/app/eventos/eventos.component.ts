import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  constructor() { }

  /* Event description 116 characters max */
  events = [
  	{
  		'title': 'Partida de Domino',
  		'description': 'Juega domino con otro par de viejitos. Juega domino con otro par de viejitos. Juega domino con otro par de viejitos.',
  		'date': 'Mayo 18, 2018',
  		'place': '500 Tuscany Terrace NW',
  		'imgUrl': '/assets/images/domino.jpg'
  	}
  	{
  		'title': 'Noche de Bingo',
  		'description': 'Diviertete con un buen juego de bingo',
  		'date': 'Mayo 20, 2018',
  		'place': '500 Rocky Rd NW',
  		'imgUrl': '/assets/images/bingo.jpg'
  	}
  ];
}
