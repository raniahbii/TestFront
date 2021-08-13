import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListecontactComponent } from './listecontact/listecontact.component';


const routes: Routes = [
  { path:"Afficher" , component: ListecontactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
