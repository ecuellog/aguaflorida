import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { EventosComponent } from './eventos/eventos.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { ContactService } from './contact.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventosComponent,
    CalendarioComponent,
    GaleriaComponent,
    ContactanosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
  	ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
