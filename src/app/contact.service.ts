import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http'

@Injectable()
export class ContactService {

  constructor(private http: HttpClient) {}

  sendPost(path, params){
  	var headers = new HttpHeaders();
  	headers = headers.set('Content-Type','application/json');
  	params = JSON.stringify(params);
  	return this.http.post(path, params, {
  		headers: headers
  	});
  }

  contact(params){
  	console.log(params);
  	return this.sendPost('/contact', params);
  }
}
