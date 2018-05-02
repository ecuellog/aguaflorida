import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	ngOnInit(){
		$(window).on("load", function(){
		  $("body").css("visibility","visible");
		});
	}

	responsiveNavBar(){
		var x = document.getElementById("topnav");
    if (x.className === "topnav prim-color") {
      x.className += " responsive";
    } else {
      x.className = "topnav prim-color";
    }
	}
}