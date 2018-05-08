import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as constants from '../shared/constants';
import { allEvents } from '../shared/events';
import * as $ from 'jquery';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class CalendarioComponent implements OnInit {

  constructor() {
  }

  today = new Date();
  year = this.today.getFullYear();
  monthNumber = this.today.getMonth();
  month = constants.monthNames[this.monthNumber].toUpperCase();
  day = this.today.getDate();
  weekDayNumber = this.today.getDay();
  weekDay = constants.dayNames[this.weekDayNumber];

  displayMonth = {
  	year: this.year,
  	month: this.month
  }

  ngOnInit() {
  	this.generateCalendar(this.today);
  	this.addEvents();
  }

  generateCalendar(date){
  	var days = this.howManyDays(date);
  	var shift = this.getFirstWeekday(date);
  	$('#days').html('');
  	for(var i = 0; i < shift; i++){
  		$('#days').append('<li _ngcontent-c1 class="empty-day"></li>');
  	}
  	for(var i = 1; i <= days; i++){
  		date.setDate(i);
  		$('#days').append(
  			'<li _ngcontent-c1>' + 
  				'<p _ngcontent-c1 class="weekday">' + constants.dayNames[date.getDay()] + '</p>' +
  				'<p _ngcontent-c1 class="day">' + i + '</p>' +
  				'<div _ngcontent-c1 class="events day' + i + ' month' + date.getMonth() + ' year' + date.getFullYear() + '"></div>' +
  			'</li>'
  		);
  	}
  	for(var i = 1; i <= 7 - (shift+days)%7; i++){
  		$('#days').append('<li _ngcontent-c1 class="empty-day"></li>');
  	}
  	this.today = new Date();
  }

  previousMonth(){

  }

  nextMonth(){

  }

  howManyDays(date) {
		var m = date.getMonth()+1 ;
		if(m==1||m==3||m==5||m==7||m==8||m==10||m==12) return 31;
		if(m==2) {
			if(isLeapYear(d.getFullYear())) {
				return 29
			} else {
				return 28
			}
		}
		return 30;
	}

	getFirstWeekday(date) {
		var tempd = new Date();
		tempd.setFullYear(date.getFullYear());
		tempd.setMonth(date.getMonth());
		tempd.setDate(1);
		tempd.setHours(0);
		tempd.setMinutes(0);
		tempd.setSeconds(0);
		return tempd.getDay();
	}

	addEvents(){
		var events = allEvents;
		for(let event of events){
			$('.day' + event.date.getDate() + '.month' + event.date.getMonth() + '.year' + event.date.getFullYear()).append(
				'<a href="#" class="event-link main-font">' + event.title + '</a>'
			);
		}
		$('.day' + this.today.getDate() + '.month' + this.today.getMonth() + '.year' + this.today.getFullYear()).parent().attr('class', 'today');
	}

}
