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
  currDate = new Date();
  displayMonth = {
  	year: this.currDate.getFullYear(),
  	month: constants.monthNames[this.currDate.getMonth()].toUpperCase()
  }

  ngOnInit() {
  	this.generateCalendar(this.today);
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
  	if((shift+days)%7 != 0){
	  	for(var i = 1; i <= 7 - (shift+days)%7; i++){
	  		$('#days').append('<li _ngcontent-c1 class="empty-day"></li>');
	  	}
  	}
  	this.displayMonth.month = constants.monthNames[this.currDate.getMonth()].toUpperCase();
  	this.displayMonth.year = this.currDate.getFullYear();
  	this.today = new Date();
  	this.addEvents();
  }

  prevMonth(){
  	let prevMonth = this.currDate.getMonth();
  	let prevYear = this.currDate.getFullYear();
  	if(prevMonth == 0){
  		prevMonth = 11;
  		prevYear--;
  	} else {
  		prevMonth--;
  	}
  	this.currDate = new Date(prevYear, prevMonth, 1);
  	this.generateCalendar(this.currDate);
  }

  nextMonth(){
  	let nextMonth = this.currDate.getMonth();
  	let nextYear = this.currDate.getFullYear();
  	if(nextMonth == 11){
  		nextMonth = 0;
  		nextYear++;
  	} else {
  		nextMonth++;
  	}
  	this.currDate = new Date(nextYear, nextMonth, 1);
  	this.generateCalendar(this.currDate);
  }

  howManyDays(date) {
		var m = date.getMonth()+1 ;
		if(m==1||m==3||m==5||m==7||m==8||m==10||m==12) return 31;
		if(m==2) {
			if(this.isLeapYear(date.getFullYear())) {
				return 29
			} else {
				return 28
			}
		}
		return 30;
	}

	isLeapYear(year) {
		if(year%400==0) {
			return true;
		} else if(year%100==0) {
			return false;
		} else if(year%4==0) {
			return true;
		} else {
			return false;
		}
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
				'<a href="#" class="event-link main-font" data-toggle="modal" data-target="#event' + event.id + '">' + event.title + '</a>'
			);

			if(event.recurring != null){
				let recurringDate = new Date(event.date.getTime());
				for(let i = 1; i < event.recurringFor; i++){
					recurringDate.setTime(recurringDate.getTime() + 604800000); //7days
					$('.day' + recurringDate.getDate() + '.month' + recurringDate.getMonth() + '.year' + recurringDate.getFullYear()).append(
						'<a href="#" class="event-link main-font" data-toggle="modal" data-target="#event' + event.id + '">' + event.title + '</a>'
					);
				}
			}
		}

		//highlight today
		$('.day' + this.today.getDate() + '.month' + this.today.getMonth() + '.year' + this.today.getFullYear()).parent().attr('class', 'today');
	}

}
