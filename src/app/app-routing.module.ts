import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventosComponent } from './eventos/eventos.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { GaleriaComponent } from './galeria/galeria.component';


const routes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'eventos', component: EventosComponent},
	{path: 'calendario', component: CalendarioComponent},
	{path: 'contactanos', component: ContactanosComponent},
	{path: 'galeria', component: GaleriaComponent}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
