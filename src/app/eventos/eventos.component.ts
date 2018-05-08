import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { allEvents } from '../shared/events';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {
	events = allEvents;
	
  constructor() { }

}
