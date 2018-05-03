import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { EventosComponent } from './eventos/eventos.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ContactanosComponent } from './contactanos/contactanos.component';


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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
