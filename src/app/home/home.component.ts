import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	
  constructor() { }

  ngOnInit() {

  }

  scroll(id){
  	$('html, body').animate({ scrollTop: $(id).offset().top - 48}, 500);
  }
}
