import { Component, OnInit } from '@angular/core';
import * as constants from '../constants';
import * as $ from 'jquery';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
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
  }

  generateCalendar(date){
  	var days = this.howManyDays(date);
  	var shift = this.getFirstWeekday(date);
  	$('#days').html('');
  	for(var i = 0; i < days; i++){
  		$('#days').append('<li _ngcontent-c1>' + i + '</li>');
  	}
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

	getFirstWeekday(d) {
		var tempd = new Date();
		tempd.setFullYear(d.getFullYear());
		tempd.setMonth(d.getMonth());
		tempd.setDate(1);
		tempd.setHours(0);
		tempd.setMinutes(0);
		tempd.setSeconds(0);
		return tempd.getDay();
	}

}
