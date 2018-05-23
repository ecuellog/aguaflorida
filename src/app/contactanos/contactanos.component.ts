import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from '../contact.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.scss']
})
export class ContactanosComponent implements OnInit {

	message = '';

  constructor(private ContactService: ContactService) { }

  ngOnInit() {
  }

  contact(f: NgForm){
  	this.ContactService.contact(f.value)
  		.subscribe(
  			data => {
  				this.message = data['message'];
  				console.log(this.message);
  				$('#message').modal('toggle');
  			},
  			error => {
  				this.message = error['error'];
  				$('#message').modal('toggle');
  			}
  		)
  }

}
