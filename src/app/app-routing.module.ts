import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { PharmaComponent } from './pharma/pharma.component';
import { PortfoliohealingComponent } from './portfoliohealing/portfoliohealing.component';
import { ClientsComponent } from './clients/clients.component';

const routes: Routes = [
  { path: '', component: CarsComponent },
  { path: 'pharma', component: PharmaComponent },
  { path: 'healing', component: PortfoliohealingComponent },
  { path: 'clients', component: ClientsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
